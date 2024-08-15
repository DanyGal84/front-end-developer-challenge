import React, { ReactNode } from "react";

import styles from './styles.module.scss';

interface TalentPathProps {
  children: ReactNode
}

const TalentPath: React.FC<TalentPathProps> = ( { children }) => (
  <div className={styles.container}>
    {children}
  </div>
);

export default TalentPath;
