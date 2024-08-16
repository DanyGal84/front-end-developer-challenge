import React, { useState } from 'react';
import Title from '../../components/Title';
import TalentPath from '../../components/TalentPath';
import SpriteButton from '../../components/Talents';
import PathBar from '../../components/PathBar';
import ScoreBox from '../../components/ScoreBox';
import styles from './styles.module.scss';

interface SpriteObject {
  id: string;
  spriteName: string;
  last: boolean;
  selected: boolean;
}

const HomePage: React.FC = () => {
  const [maxPoints] = useState(6)
  const [pointsSpent, setPointsSpent] = useState(0);


  const pathData = [
    {
      pathId: 1,
      pathNumber: '1',
      sprites: [
        {
          id: 't1',
          spriteName: 'button-weight',
          last: false
        },
        {
          id: 't2',
          spriteName: 'button-food',
          last: false
        },
        {
          id: 't3',
          spriteName: 'button-birthday',
          last: false,
          selected: false,
        },
        {
          id: 't4',
          spriteName: 'button-crown',
          last: true
        }
      ]
    },
    {
      pathId: 2,
      pathNumber: '2',
      sprites: [
        {
          id: 't5',
          spriteName: 'button-ship',
          last: false
        },
        {
          id: 't6',
          spriteName: 'button-scubba',
          last: false
        },
        {
          id: 't7',
          spriteName: 'button-lightning',
          last: false
        },
        {
          id: 't8',
          spriteName: 'button-skull',
          last: true
        }
      ]
    }
  ];

  const onTalentClick = () => {
    setPointsSpent(pointsSpent + 1);
  };

  return (
    <div className={styles.container}>
      <Title text="TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000" />
      <div className={styles.pathContainer}>
        <div className={styles.talentPath}>
          {pathData.map((data) => (
            <TalentPath key={data.pathId} pathNumber={data.pathNumber}>
            {data.sprites.map((sprite) => (
              <div key={sprite.id} className={styles.spriteButton} onClick={onTalentClick}>
                <SpriteButton key={sprite.id} className={sprite.spriteName} />
                {!sprite.last ? <PathBar /> : null}
              </div>
            ))}
            </TalentPath>
          ))}
        </div>
        <ScoreBox maxPoints={maxPoints} pointsSpent={pointsSpent} />
      </div>
    </div>
  )
}

export default HomePage;
