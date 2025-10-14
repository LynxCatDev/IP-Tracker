import { faqData } from '@/constants/faqData';
import { FAQItem } from './FAQItem';

export const FAQ = () => {
  return (
    <div className="faq">
      {faqData.map((item, index) => (
        <FAQItem key={item.question} faqItem={item} index={index} />
      ))}
    </div>
  );
};
