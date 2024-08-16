import React, { useState } from 'react';
import Title from '../../components/Title';
import TalentPath from '../../components/TalentPath';
import SpriteButton from '../../components/Talents';
import PathBar from '../../components/PathBar';
import ScoreBox from '../../components/ScoreBox';
import styles from './styles.module.scss';

interface rune {
  id: string;
  spriteName: string;
  last: boolean;
  selected: boolean;
  order: number;
}

const HomePage: React.FC = () => {
  const runesPath1 = [
        {
          id: 't1',
          spriteName: 'button-weight',
          last: false,
          selected: false,
          order: 1
        },
        {
          id: 't2',
          spriteName: 'button-food',
          last: false,
          selected: false,
          order: 2
        },
        {
          id: 't3',
          spriteName: 'button-birthday',
          last: false,
          selected: false,
          order: 3
        },
        {
          id: 't4',
          spriteName: 'button-crown',
          last: true,
          selected: false,
          order: 4
        }
  ];

  const runesPath2 = [
    {
      id: 't5',
      spriteName: 'button-ship',
      last: false,
      selected: false,
      order: 1
    },
    {
      id: 't6',
      spriteName: 'button-scubba',
      last: false,
      selected: false,
      order: 2
    },
    {
      id: 't7',
      spriteName: 'button-lightning',
      last: false,
      selected: false,
      order: 3
    },
    {
      id: 't8',
      spriteName: 'button-skull',
      last: true,
      selected: false,
      order: 4
    }
  ];

  const [maxPoints] = useState(6)
  const [pointsSpent, setPointsSpent] = useState(0);
  const [runes1, setRunes1] = useState(runesPath1);
  const [runes2, setRunes2] = useState(runesPath2);

  const isNextRune = (order: number, pathNumber: number) => {
    if (pathNumber === 1) {
      const selectedRunes = runes1.filter(rune => rune.selected).length;
      return selectedRunes + 1 === order;
    }

    if (pathNumber === 2) {
      const selectedRunes = runes2.filter(rune => rune.selected).length;
      return selectedRunes + 1 === order;
    }

  };

  const handleLeftClick = (rune: rune, e: React.MouseEvent<HTMLButtonElement>, pathNumber: number) => {
    if (pointsSpent < maxPoints && isNextRune(rune.order, pathNumber)) {
      if (pathNumber === 1) {
        const updatedRunes = runes1.map(r =>
          r.id === rune.id ? { ...r, selected: true } : r
        );
        setRunes1(updatedRunes);
      }

      if (pathNumber === 2) {
        const updatedRunes = runes2.map(r =>
          r.id === rune.id ? { ...r, selected: true } : r
        );
        setRunes2(updatedRunes);
      }
      setPointsSpent(pointsSpent + 1);
    }

    if(pointsSpent === maxPoints) {
      alert('You have reached the maximum available points to spent');
    }
  };

  const handleRightClick = (rune: rune, e: React.MouseEvent<HTMLButtonElement>, pathNumber: number) => {
    e.preventDefault();
    if (rune.selected) {
      if (pathNumber === 1) {
        const updatedRunes = runes1.map(r =>
          r.id === rune.id ? { ...r, selected: false } : r
        );
        setRunes1(updatedRunes);
      }

      if (pathNumber === 2) {
        const updatedRunes = runes2.map(r =>
          r.id === rune.id ? { ...r, selected: false } : r
        );
        setRunes2(updatedRunes);
      }
      setPointsSpent(pointsSpent - 1);
    }
  };

  return (
    <div className={styles.container}>
      <Title text="TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000" />
      <div className={styles.pathContainer}>
        <div className={styles.talentPath}>
          <TalentPath pathNumber='1'>
            {runes1.map(rune => (
              <>
                <SpriteButton key={rune.id} className={rune.spriteName} selected={rune.selected} onClick={(e) => handleLeftClick(rune, e, 1)} onContextMenu={(e) => handleRightClick(rune, e, 1)}/>
                {!rune.last ? <PathBar/> : null}
              </>
            ))}
          </TalentPath>
          <TalentPath pathNumber='2'>
            {runes2.map(rune => (
              <>
                <SpriteButton key={rune.id} className={rune.spriteName} selected={rune.selected} onClick={(e) => handleLeftClick(rune, e, 2)} onContextMenu={(e) => handleRightClick(rune, e, 2)}/>
                {!rune.last ? <PathBar/> : null}
              </>
            ))}
          </TalentPath>
        </div>
        <ScoreBox maxPoints={maxPoints} pointsSpent={pointsSpent} />
      </div>
    </div>
  );
}

export default HomePage;
