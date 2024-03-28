import styled from 'styled-components';

export const StyledSocialMedia = styled.div`
   height: 200px;
   width: 100%;
   padding: 50px;
   color: ${({ theme }) => theme.textcolor.text2};
   font-family: ${({ theme }) => theme.font.buttonCard};
   background-color: ${({ theme }) => theme.main.bg2};
   h4{
      text-align: right;
   }
   img {
      width: 30px;
      margin: 10px 20px;
   }
`