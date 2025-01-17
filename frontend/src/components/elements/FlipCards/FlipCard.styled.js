import styled from "styled-components";

export const StyledFlipCardContainer = styled.div`
background-color: transparent;
height: 260px;
width: 100%;
perspective: 1000px;
overflow: hidden;
@media (min-width: ${({ theme }) => theme.mbp.desktop}px) {
            width: 300px;
            height: 300px;
            transform: translateY(-30px);
            z-index: 25;
         }
`

export const StyledFlipCard = styled.div`
   position: relative;
   width: 100%;
   height: 100%;
   text-align: center;
   transition: transform 0.8s;
   transform-style: preserve-3d;
   
   
   .flipcard-front {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      width: 100%;
      height: 100%;
      padding: 50px;
      text-align: left;
      background-color: white;
      h2 {
         padding-bottom: 10px;
         font-size: ${({ theme }) => theme.fontSize.titleH2big};
         color: ${({ theme }) => theme.textcolor.text3}
      }
      p {
         color: ${({ theme }) => theme.textcolor.text1};
         font-family: ${({ theme }) => theme.font.buttonCard}
      }

   }

   .flipcard-back {
      transform: rotateY(-180deg);
      height: 100%;
      width: 100%;
      overflow: hidden;
      background-image: url(${({ imgsrc }) => imgsrc});
      background-position: center;
      background-repeat:no-repeat;
      background-size: cover;
   }
   .flipcard-front, .flipcard-back {
      backface-visibility: hidden;
      position: absolute;
      top: 0;
      left: 0;
   }
 

`