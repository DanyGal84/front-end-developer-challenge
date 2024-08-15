import React from 'react';
import Title from '../../components/Title';
import TalentPath from '../../components/TalentPath';
import SpriteButton from '../../components/Talents';
import PathBar from '../../components/PathBar';
import styles from './styles.module.scss';

const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Title text="TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000" />
      <TalentPath>
        <SpriteButton className="button-weight" onClick={() => alert('Button 1 clicked!')}/>
        <PathBar />
        <SpriteButton className="button-food" onClick={() => alert('Button 2 clicked!')}/>
        <PathBar />
        <SpriteButton className="button-birthday" onClick={() => alert('Button 3 clicked!')}/>
        <PathBar />
        <SpriteButton className="button-crown" onClick={() => alert('Button 4 clicked!')}/>
      </TalentPath>
      <TalentPath>
        <SpriteButton className="button-ship" onClick={() => alert('Button 1 clicked!')}/>
        <PathBar />
        <SpriteButton className="button-scubba" onClick={() => alert('Button 2 clicked!')}/>
        <PathBar />
        <SpriteButton className="button-lightning" onClick={() => alert('Button 3 clicked!')}/>
        <PathBar />
        <SpriteButton className="button-skull" onClick={() => alert('Button 4 clicked!')}/>
      </TalentPath>
    </div>
  )
}


export default HomePage;
