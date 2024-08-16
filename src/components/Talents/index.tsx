import React from "react";
import './styles.scss';

interface ButtonProps {
  className: string;
  selected: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onContextMenu: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const SpriteButton: React.FC<ButtonProps> = ({ className, selected, onClick, onContextMenu }) => {

  return (
    <button className={`sprite-button ${className} ${selected ? 'selected' : ''}`} onClick={(e) => onClick(e)} onContextMenu={(e) => onContextMenu(e)}></button>
  );
}


export default SpriteButton;
