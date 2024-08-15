import React from 'react';
import Title from '../../components/Title';
import TalentPath from '../../components/TalentPath';
import SpriteButton from '../../components/Talents';
import styles from './styles.module.scss';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Title text="TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000" />
      <TalentPath>
        <SpriteButton className="button-weight" onClick={() => alert('Button 1 clicked!')}/>
        <SpriteButton className="button-food" onClick={() => alert('Button 2 clicked!')}/>
        <SpriteButton className="button-birthday" onClick={() => alert('Button 3 clicked!')}/>
        <SpriteButton className="button-crown" onClick={() => alert('Button 4 clicked!')}/>
      </TalentPath>
      <TalentPath>
        <SpriteButton className="button-weight" onClick={() => alert('Button 1 clicked!')}/>
        <SpriteButton className="button-food" onClick={() => alert('Button 2 clicked!')}/>
        <SpriteButton className="button-birthday" onClick={() => alert('Button 3 clicked!')}/>
        <SpriteButton className="button-crown" onClick={() => alert('Button 4 clicked!')}/>
      </TalentPath>
    </div>
  )
}


export default HomePage;
