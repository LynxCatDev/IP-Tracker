import { faqData } from '@/constants/faqData';
import { FAQItem } from './FAQItem';

export const FAQ = () => {
  return (
    <div className="faq">
      {faqData.map((item) => (
        <FAQItem key={item.question} faqItem={item} />
      ))}
    </div>
  );
};
