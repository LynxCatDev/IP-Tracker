import './LayoutWrapper.scss';

export const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="layout">
      <div className="layout-wrapper">{children}</div>
    </div>
  );
};
