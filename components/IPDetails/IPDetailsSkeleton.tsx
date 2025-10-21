import './IPDetailsSkeleton.scss';

export const IPDetailsSkeleton = () => {
  return (
    <div className="ip-details-skeleton--wrapper">
      <div className="ip-details-skeleton">
        <div className="ip-details-skeleton--info">
          <div className="skeleton skeleton--badge"></div>
          <div className="skeleton skeleton--badge-small"></div>
        </div>

        <div className="ip-details-skeleton--ip-address">
          <div className="skeleton skeleton--ip"></div>
          <div className="skeleton skeleton--button"></div>
        </div>

        <div className="ip-details-skeleton--location">
          <div className="skeleton skeleton--location-text"></div>
        </div>
      </div>

      <div className="ip-details-skeleton--cards-grid">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="ip-details-skeleton--card">
            <div className="skeleton skeleton--icon"></div>
            <div className="skeleton--card-content">
              <div className="skeleton skeleton--card-title"></div>
              <div className="skeleton skeleton--card-value"></div>
            </div>
          </div>
        ))}
      </div>

      <div className="ip-details-skeleton--additional">
        <div className="ip-details-skeleton--additional-header">
          <div className="skeleton skeleton--icon-small"></div>
          <div className="skeleton skeleton--additional-title"></div>
        </div>

        <div className="ip-details-skeleton--additional-list">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="skeleton skeleton--list-item"></div>
          ))}
        </div>
      </div>

      <div className="ip-details-skeleton--refresh">
        <div className="skeleton skeleton--refresh-button"></div>
      </div>
    </div>
  );
};
