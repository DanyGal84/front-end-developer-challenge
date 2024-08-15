import React from "react";
import './styles.scss';

interface ButtonProps {
  onClick: () => void;
  className: string;
}

const SpriteButton: React.FC<ButtonProps> = ({ onClick, className }) => (
  <button className={`sprite-button ${className}`} onClick={onClick}></button>
);

export default SpriteButton;
