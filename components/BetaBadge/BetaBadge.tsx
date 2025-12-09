'use client';

import './BetaBadge.scss';

export const BetaBadge = () => {
  return (
    <>
      {/* Corner Ribbon */}
      <div className="beta-ribbon">BETA</div>
    </>
  );
};

// Small inline badge for use in header/logo
export const BetaTag = () => {
  return <span className="beta-tag">BETA</span>;
};
