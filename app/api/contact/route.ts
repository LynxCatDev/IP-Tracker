import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const CAPTCHA_SECRET =
  process.env.HCAPTCHA_SECRET_KEY ||
  '0x0000000000000000000000000000000000000000';

// Sanitize input to prevent HTML/script injection
function sanitizeInput(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Verify hCaptcha token
async function verifyCaptcha(token: string): Promise<boolean> {
  try {
    const response = await fetch('https://hcaptcha.com/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `response=${token}&secret=${CAPTCHA_SECRET}`,
    });
    const data = await response.json();
    return data.success === true || data.pass === true;
  } catch {
    return false;
  }
}

// Simple rate limiting (in production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 3; // Max 3 requests per minute per IP

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now - record.timestamp > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { count: 1, timestamp: now });
    return false;
  }

  if (record.count >= MAX_REQUESTS) {
    return true;
  }

  record.count++;
  return false;
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0] ||
      request.headers.get('x-real-ip') ||
      'unknown';

    // Check rate limit
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 },
      );
    }

    const formData = await request.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;
    const captchaToken = formData.get('captchaToken') as string;
    const screenshot = formData.get('screenshot') as File | null;

    // Verify CAPTCHA
    if (!captchaToken) {
      return NextResponse.json(
        { error: 'Please complete the CAPTCHA verification' },
        { status: 400 },
      );
    }

    const captchaValid = await verifyCaptcha(captchaToken);
    if (!captchaValid) {
      return NextResponse.json(
        { error: 'CAPTCHA verification failed. Please try again.' },
        { status: 400 },
      );
    }

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 },
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 },
      );
    }

    // Validate input lengths
    if (
      name.length > 100 ||
      email.length > 254 ||
      subject.length > 200 ||
      message.length > 5000
    ) {
      return NextResponse.json(
        { error: 'Input exceeds maximum length' },
        { status: 400 },
      );
    }

    // Sanitize all user inputs
    const safeName = sanitizeInput(name);
    const safeEmail = sanitizeInput(email);
    const safeSubject = sanitizeInput(subject);
    const safeMessage = sanitizeInput(message);

    // Process screenshot attachment if provided
    let attachments: { filename: string; content: Buffer }[] = [];
    let screenshotHtml = '';

    if (screenshot && screenshot.size > 0) {
      // Validate file type (only images)
      const allowedTypes = [
        'image/jpeg',
        'image/png',
        'image/gif',
        'image/webp',
      ];
      if (!allowedTypes.includes(screenshot.type)) {
        return NextResponse.json(
          {
            error:
              'Invalid file type. Only images (JPEG, PNG, GIF, WebP) are allowed.',
          },
          { status: 400 },
        );
      }

      // Validate file size (max 5MB)
      const maxSize = 5 * 1024 * 1024; // 5MB
      if (screenshot.size > maxSize) {
        return NextResponse.json(
          { error: 'File too large. Maximum size is 5MB.' },
          { status: 400 },
        );
      }

      const buffer = Buffer.from(await screenshot.arrayBuffer());
      const filename = `screenshot-${Date.now()}.${
        screenshot.type.split('/')[1]
      }`;

      attachments = [{ filename, content: buffer }];
      screenshotHtml = `
              <!-- Screenshot Attachment -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #fff8e6; border: 1px solid #ffd966; border-radius: 10px; margin-top: 20px;">
                <tr>
                  <td style="padding: 15px 20px;">
                    <p style="margin: 0; font-size: 13px; color: #996600;">
                      📎 <strong>Screenshot attached:</strong> ${sanitizeInput(
                        filename,
                      )}
                    </p>
                  </td>
                </tr>
              </table>`;
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'IP Tracker <onboarding@resend.dev>', // Change this after verifying your domain
      to: ['uzuntudor@gmail.com'],
      subject: `New Contact: ${safeSubject}`,
      replyTo: email,
      attachments,
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #f4f4f7; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f4f4f7; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="max-width: 600px; width: 100%;">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 40px 30px; border-radius: 12px 12px 0 0; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
                📧 New Message Received
              </h1>
              <p style="color: rgba(255,255,255,0.85); margin: 10px 0 0; font-size: 15px;">
                Someone reached out via IP Tracker contact form
              </p>
            </td>
          </tr>
          
          <!-- Main Content -->
          <tr>
            <td style="background-color: #ffffff; padding: 40px;">
              
              <!-- Sender Info Card -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f8f9fc; border-radius: 10px; margin-bottom: 25px;">
                <tr>
                  <td style="padding: 20px;">
                    <p style="margin: 0 0 5px; font-size: 11px; font-weight: 600; color: #667eea; text-transform: uppercase; letter-spacing: 1px;">
                      FROM
                    </p>
                    <p style="margin: 0 0 15px; font-size: 18px; font-weight: 600; color: #1a1a2e;">
                      ${safeName}
                    </p>
                    <p style="margin: 0 0 5px; font-size: 11px; font-weight: 600; color: #667eea; text-transform: uppercase; letter-spacing: 1px;">
                      EMAIL
                    </p>
                    <a href="mailto:${safeEmail}" style="margin: 0; font-size: 15px; color: #667eea; text-decoration: none;">
                      ${safeEmail}
                    </a>
                  </td>
                </tr>
              </table>
              
              <!-- Subject -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom: 25px;">
                <tr>
                  <td style="border-left: 4px solid #667eea; padding-left: 15px;">
                    <p style="margin: 0 0 5px; font-size: 11px; font-weight: 600; color: #667eea; text-transform: uppercase; letter-spacing: 1px;">
                      SUBJECT
                    </p>
                    <p style="margin: 0; font-size: 18px; font-weight: 600; color: #1a1a2e;">
                      ${safeSubject}
                    </p>
                  </td>
                </tr>
              </table>
              
              <!-- Message -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border: 1px solid #e8e8ef; border-radius: 10px;">
                <tr>
                  <td style="padding: 25px;">
                    <p style="margin: 0 0 12px; font-size: 11px; font-weight: 600; color: #667eea; text-transform: uppercase; letter-spacing: 1px;">
                      MESSAGE
                    </p>
                    <p style="margin: 0; font-size: 15px; line-height: 1.7; color: #4a4a68;">
                      ${safeMessage.replace(/\n/g, '<br>')}
                    </p>
                  </td>
                </tr>
              </table>
              ${screenshotHtml}
              
              <!-- Reply Button -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-top: 30px;">
                <tr>
                  <td align="center">
                    <a href="mailto:${safeEmail}?subject=Re: ${safeSubject}" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; padding: 14px 35px; border-radius: 8px; font-size: 15px; font-weight: 600; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.35);">
                      Reply to ${safeName} →
                    </a>
                  </td>
                </tr>
              </table>
              
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f8f9fc; padding: 25px 40px; border-radius: 0 0 12px 12px; text-align: center; border-top: 1px solid #e8e8ef;">
              <p style="margin: 0 0 5px; font-size: 13px; color: #8a8aa3;">
                This email was sent from your IP Tracker contact form
              </p>
              <p style="margin: 0; font-size: 12px; color: #b0b0c3;">
                © ${new Date().getFullYear()} IP Tracker. All rights reserved.
              </p>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { message: 'Email sent successfully', id: data?.id },
      { status: 200 },
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}
