import { BetaBadge } from '../BetaBadge/BetaBadge';
import './LayoutWrapper.scss';

export const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="layout">
      <BetaBadge />
      <div className="layout-wrapper">{children}</div>
    </div>
  );
};
