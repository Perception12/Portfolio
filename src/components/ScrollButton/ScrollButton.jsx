import React, {useState} from "react";
import { UilArrowUp } from '@iconscout/react-unicons'
import '../../styles/ScrollButton.css';

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <button 
    style={{display:visible ? 'inline' : 'none'}}
    className="scroll-button" 
    onClick={scrollToTop}>
        <UilArrowUp />
    </button>
  );
};

export default ScrollButton;