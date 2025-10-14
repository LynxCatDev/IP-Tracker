'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQItemInterface } from '@/constants/faqData';

interface FAQItemProps {
  faqItem: FAQItemInterface;
}

export const FAQItem = ({ faqItem }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const icon = faqItem.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="faq--item"
      onClick={() => setIsOpen(!isOpen)}
      data-open={isOpen}
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

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="faq--answer"
          >
            {faqItem.answer}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
