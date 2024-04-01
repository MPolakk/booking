import styled from "styled-components"

export const StyledDescription = styled.div`
      background-color: ${({ theme }) => theme.main.bg2};
      margin-top: -55px;
      width: 100%;
      background-color: white;
      @media (min-width: ${({ theme }) => theme.mbp.desktop}px) {
            display: flex;
            justify-content: center;
         }
   & > .description { 
      padding: 30px 50px 30px 30px;
      @media (min-width: ${({ theme }) => theme.mbp.desktop}px) {
            width: 600px;
   
         }
      h3 {
         font-size: ${({ theme }) => theme.fontSize.titleH3};
         color: ${({ theme }) => theme.textcolor.header1};
      }
   
   
      p {
         font-family: ${({ theme }) => theme.font.buttonCard};
         margin-top: 25px;
         color: ${({ theme }) => theme.textcolor.text2};
      }
}
   & > .parking-info {
      display: flex;
      flex-wrap:wrap;
      align-items: center;
      justify-content: right;
      padding: 50px;
      background-color: ${({ theme }) => theme.main.bg};
      color: ${({ theme }) => theme.textcolor.text2};
      height: 300px;
      font-size: ${({ theme }) => theme.fontSize.titleH4big};
      @media (min-width: ${({ theme }) => theme.mbp.desktop}px) {
            width:600px;
   
         }
      h4 {
         font-family: ${({ theme }) => theme.font.buttonCard};
         text-align: right;
         margin-left:70px;
      }
      img {
         aspect-ratio: 1/1;
         width: 100px;
         margin: 0 auto;
      }
   }
`