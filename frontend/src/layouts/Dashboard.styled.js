import styled from 'styled-components';

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
`;
export const StyledHeader = styled.div`
  width: 100%;
  height: 100%;
  z-index: 20;
  background-color: ${({ theme }) => theme.main.bg2};
`;

export const StyledFooter = styled.footer`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  z-index: 5;
  bottom: 0;
  height: 165px;
  width: 100%;
  padding: 20px;
  background-color: ${({ theme }) => theme.footer.bg};
  span {
    color: ${({ theme }) => theme.footer.text};
    font-family: ${({ theme }) => theme.font.main};
    width: 100%;
    text-align: center;
  }
`