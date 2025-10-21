import { statsData } from '@/constants/trustedStatsData';
import './TrustedStats.scss';

export const TrustedStats = () => {
  return (
    <div className="trusted-stats">
      <h2 className="trusted-stats--title">Trusted by Users Worldwide</h2>
      <div className="trusted-stats--grid">
        {statsData.map((stat, index) => (
          <div
            key={index}
            className="trusted-stats--item"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div
              className="trusted-stats--icon"
              style={{ color: stat.iconColor }}
            >
              {stat.icon}
            </div>
            <div className="trusted-stats--value">{stat.value}</div>
            <div className="trusted-stats--label">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
