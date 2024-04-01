import { StyledFlipCardContainer, StyledFlipCard } from "./FlipCard.styled";
import { useState, useRef } from "react";
import { useMedia } from "../../../hooks/useMedia";

const FlipCard = ({ rotateValueX, rotateValueY, text, header, imgsrc }) => {

   const { isDesktop } = useMedia();
   const [rotateActive, setRotateActive] = useState(false);
   const idRef = useRef(null);
   const rotateHandler = () => {
      setRotateActive(!rotateActive);
      if (idRef.current) clearTimeout(idRef.current);
      idRef.current = setTimeout(() => {
         setRotateActive(false)
      }, 3000)
   }
   const rotateHandlerDesktop = () => {
      setRotateActive(!rotateActive);
   }


   return (
      <StyledFlipCardContainer onClick={!isDesktop ? rotateHandler : null} onMouseEnter={isDesktop ? rotateHandlerDesktop : null} onMouseLeave={isDesktop ? rotateHandlerDesktop : null}>
         <StyledFlipCard imgsrc={imgsrc} style={rotateActive ? (rotateValueX ? { transform: `rotateX(${rotateValueX}deg)` } : { transform: `rotateY(${rotateValueY}deg)` }) : null}  >

            <div className="flipcard-front">
               <h2>{header}</h2>
               <p>{text}</p>
            </div>

            <div
               className="flipcard-back"
               style={rotateValueX ? { transform: `rotateY(-180deg) rotateZ(180deg)` } : null}
            >

            </div>

         </StyledFlipCard>
      </StyledFlipCardContainer>
   );
}

export default FlipCard;