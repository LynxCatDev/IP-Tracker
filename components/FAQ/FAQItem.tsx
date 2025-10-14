'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQItemInterface } from '@/constants/faqData';

interface FAQItemProps {
  faqItem: FAQItemInterface;
  index: number;
}

export const FAQItem = ({ faqItem, index }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const icon = faqItem.icon;

  return (
    <div
      className={`faq--item ${isOpen ? 'faq--item-open' : ''}`}
      onClick={() => setIsOpen(!isOpen)}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="faq--header">
        <div className="faq--title">
          {faqItem.icon && (
            <div
              className="faq--icon"
              style={{
                background: faqItem.backgroundColor,
              }}
            >
              {icon}
            </div>
          )}
          <div className="faq--question">
            <h3>{faqItem.question}</h3>
          </div>
        </div>

        <ChevronDown size={20} className="faq--chevron" />
      </div>

      <div className="faq--answer-wrapper">
        <div className="faq--answer">{faqItem.answer}</div>
      </div>
    </div>
  );
};
