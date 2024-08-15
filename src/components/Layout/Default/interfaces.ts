import React from 'react';

export interface LayoutProps {
  component?: React.ComponentType<any>;
  children?: React.ReactNode;
  [key: string]: any;
}
