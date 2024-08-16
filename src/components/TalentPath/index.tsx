import React, { ReactNode } from "react";

import styles from './styles.module.scss';

interface TalentPathProps {
  children: ReactNode;
  pathNumber: string;
}

const TalentPath: React.FC<TalentPathProps> = ( { children, pathNumber }) => (
  <div className={styles.container}>
    <p>Talent Path {pathNumber}</p>
    {children}
  </div>
);

export default TalentPath;
