import styled from "styled-components";

export const StyledCottages = styled.div`
position: relative;
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   align-items: flex-start;
   width: 100%;
   color: white;
   
   font-family: ${({ theme }) => theme.font.titlePrimary};
   z-index: 5;
   h6 {
      font-size: ${({ theme }) => theme.fontSize.titleH6};
   }
   h2 {
      font-size: ${({ theme }) => theme.fontSize.titleH2small};
   }
   span {
            font-family: ${({ theme }) => theme.font.titleSecondary}
      }
   .background {
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 700px;
      z-index: -10;
      background-image: url('images/background/domek-vacanza-dwu-poziomowe-03.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      }
   
`

export const StyledHeader = styled.div`
background-color: ${({ theme }) => theme.main.bg2};
      position: relative;
      display: grid;
      place-items: center;
div:nth-child(1), div:nth-child(2) {
      text-align: center;
      position: relative;
      width: 100%;
      overflow: hidden;
         img {
         width: 170%;
      }
      h6,h2 {
         position: absolute;
         width: 100%;
         top: 45%;
         transform: translateY(-100%);
      }
      h2 {
         transform: translateY(0);
      }
   
   }
`

export const StyledCard = styled.div`
      position: absolute;
      bottom: -30px;
      width: 85%;
      height: 200px;
      padding: 20px;
      text-align: left;
      background-color: white;
   h6 {
      text-transform: uppercase;
      padding: 10px 0;
      color: ${({ theme }) => theme.textcolor.boldedtext};
   }
   h2 {
      color: ${({ theme }) => theme.textcolor.header1};
   }
`

export const StyledSlider = styled.div`
   transform: translateY(-10px);
   background-color: ${({ theme }) => theme.main.bg2};
   width: 100%;
`

export const StyledFlipCards = styled.div`
   transform: translateY(-50px);
   background-color: ${({ theme }) => theme.main.bg2};
`

export const StyledBlankSpace = styled.div`
   height: 500px;
   width: 100%;
`