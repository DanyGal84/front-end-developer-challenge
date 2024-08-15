import React from 'react';
import { LayoutProps } from './interfaces';
import styles from './styles.module.scss';

const Layout: React.FC<LayoutProps> = ({ component: Component, children, ...rest }) => (
  <div className={styles.layout}>
    <main>
      {Component ? <Component { ...rest} /> : children}
    </main>
  </div>
);

export default Layout;
