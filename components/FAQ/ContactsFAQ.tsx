import { faqData } from '@/constants/faqData';
import './FAQ.scss';

export const ContactsFAQ = () => {
  return (
    <div className="faq">
      <h3 className="faq--title">Frequently Asked Questions</h3>
      <div className="faq--grid">
        {faqData.map((item, index) => (
          <div key={index} className="faq--item">
            <h4 className="faq--question">{item.question}</h4>
            <p className="faq--answer">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
