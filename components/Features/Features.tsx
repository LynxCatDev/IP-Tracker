import { featuresData } from '@/constants/featuresData';
import './Features.scss';

export const Features = () => {
  return (
    <div className="features">
      <h3 className="features--title">Why Choose IP Tracker?</h3>
      <div className="features--grid">
        {featuresData.map((feature, index) => (
          <div
            key={index}
            className="features--item"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div
              className="features--icon"
              style={{
                backgroundColor: feature.iconBgColor,
                color: feature.iconColor,
              }}
            >
              {feature.icon}
            </div>
            <div className="features--name">{feature.title}</div>
            <div className="features--description">{feature.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
