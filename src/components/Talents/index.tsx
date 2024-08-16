import React, { useState } from "react";
import './styles.scss';

interface ButtonProps {
  className: string;
}

const SpriteButton: React.FC<ButtonProps> = ({ className }) => {
  const [active, setActive] = useState(false);

  const onAddTalent = () => {
    setActive(!active);
  }


  return (
    <button className={`sprite-button ${className} ${active ? 'selected' : ''}`} onClick={onAddTalent}></button>
  );
}


export default SpriteButton;
