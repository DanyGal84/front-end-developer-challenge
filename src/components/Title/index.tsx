import React from "react";
import styles from './styles.module.scss';

interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ( { text } ) => (
  <div className={styles.title}>
    <h2>{text}</h2>
  </div>
);

export default Title;
