import React from "react";
import styles from './styles.module.scss';

interface ScorBoxProps {
  maxPoints: number;
  pointsSpent: number;
}

const ScoreBox: React.FC<ScorBoxProps> = ( { maxPoints, pointsSpent }) => (
  <div className={styles.container}>
    <p className={styles.score}>{pointsSpent}/{maxPoints}</p>
    <p className={styles.spent}>Points Spent</p>
  </div>
);

export default ScoreBox;
