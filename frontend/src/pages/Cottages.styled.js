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
& > div:nth-child(1), & > div:nth-child(2) {
      z-index: 7;
      text-align: center;
      position: relative;
      width: 100%;
      overflow: hidden;
         img {
         width: 170%;
         @media (min-width: ${({ theme }) => theme.mbp.desktop}px) {
            width:100%;
         }
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

   & > div:nth-child(2) {
      @media (min-width: ${({ theme }) => theme.mbp.desktop}px) {
         z-index: 6;
         margin-top: -20px;
         div {
            display: flex;
            width: 100%;
            img {
               width: 60%;
            }
            div {
               width: 100%;
               background-color: ${({ theme }) => theme.header.bg2};
            }
         }
         }
   }
`

export const StyledCard = styled.div`
         position: absolute;
         bottom: -30px;
         width: 85%;
         height: 200px;
         background-color: white;
         z-index: 7;
         @media (min-width: ${({ theme }) => theme.mbp.desktop}px) {
            padding: 50px;
            width: 60%;
            height: 300px;
            right: 0;
            top: 55%;
            z-index: 10;
           & > div {
            
            & > h2 {
             font-size: ${({ theme }) => theme.fontSize.titleH2big}
           }
           }
           
         }
   & > div {
         text-align: left;
         height: 85%;
         padding: 20px;
         @media (min-width: ${({ theme }) => theme.mbp.desktop}px) {
            height: 100%;
            width: 70%;
            padding: 0;
         }
      h6 {
         
         text-transform: uppercase;
         padding: 10px 0;
         color: ${({ theme }) => theme.textcolor.boldedtext};
      }
      h2 {
         color: ${({ theme }) => theme.textcolor.header1};
      }
   }
`

export const StyledSlider = styled.div`
   transform: translateY(-10px);
   width: 100%;
   background-color: ${({ theme }) => theme.main.bg2};
   z-index: 8;
   overflow: hidden;
   img {
      width: 100%;
   }

`

export const StyledFlipCards = styled.div`
   transform: translateY(-50px);
   background-color: ${({ theme }) => theme.main.bg2};
   width: 100%;
   z-index: 10;
   @media (min-width: ${({ theme }) => theme.mbp.desktop}px) {
            display: flex;
            align-content: center;
            justify-content: center;
            
         }
`

export const StyledBlankSpace = styled.div`
   height: 500px;
   width: 100%;
`