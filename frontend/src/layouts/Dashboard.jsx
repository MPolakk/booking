import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Page, StyledFooter, StyledHeader } from './Dashboard.styled';
import { SwitchDarkMode } from '../components/elements';
import NavBar from '../components/elements/NavBar/NavBar';
const Dashboard = () => {

  return (
    <Page>
      <StyledHeader>
        <NavBar></NavBar>
      </StyledHeader>
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
      <StyledFooter>
        <img src="\icons\ico-logo-001.png" alt="" />
        <span>© Vacanza Park. All rights reserved.</span>
      </StyledFooter>

    </Page>
  );
};

export default Dashboard;