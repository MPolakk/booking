import styled from 'styled-components';

export const StyledSocialMedia = styled.div`
   height: 200px;
   width: 100%;
   padding: 50px;
   color: ${({ theme }) => theme.textcolor.text2};
   font-family: ${({ theme }) => theme.font.buttonCard};
   background-color: ${({ theme }) => theme.main.bg2};
   @media (min-width: ${({ theme }) => theme.mbp.desktop}px) {
         display: flex;
         justify-content: center;
         
         }
   & > div {
      @media (min-width: ${({ theme }) => theme.mbp.desktop}px) {
         width: 1200px;
         display: flex;
         align-items: center;
         justify-content: flex-end;
         padding-right: 50px;
         border-top: dashed 1px black;
         h4 {
            width: 100%;
         }
         div {
            width: 200px;
         }
         }
       
   h4{
      text-align: right;
   }
   img {
      width: 30px;
      margin: 10px 20px;
   }
}
`