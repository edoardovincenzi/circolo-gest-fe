import React from 'react';

const LayoutPage = ({ children }: { children: React.ReactElement }) => {
  return <div className="container mx-auto">{children}</div>;
};

export default LayoutPage;
