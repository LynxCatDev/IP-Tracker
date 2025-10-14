import { contactsFAQData } from '@/constants/faqData';
import './FAQ.scss';

export const ContactsFAQ = () => {
  return (
    <div className="contacts-faq">
      <h3 className="contacts-faq--title">Frequently Asked Questions</h3>
      <div className="contacts-faq--grid">
        {contactsFAQData.map((item, index) => (
          <div key={index} className="contacts-faq--item">
            <h4 className="contacts-faq--question">{item.question}</h4>
            <p className="contacts-faq--answer">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
