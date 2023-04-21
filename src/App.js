import { useEffect, useState } from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { EmptyPage } from './components/EmptyPage';
import { MainForm } from './components/Forms/MainForm';
import { GeneralForm } from './components/Forms/FormTypes/GeneralForm';
import { OwnershipForm } from './components/Forms/FormTypes/OwnershipForm';
import { RegistrationAddressForm } from './components/Forms/FormTypes/RegistrationAddressForm';
import { ResidentialAddressForm } from './components/Forms/FormTypes/ResidentialAddressForm';
import { SocialMediaForm } from './components/Forms/FormTypes/SocialMediaForm';

function App() {
  const [activePage, setActivePage] = useState();

  useEffect(() => {

  }, []);

  const changePage = (page) => {
    setActivePage(page);
  };

  return (
    <div className="App">
      <Router>
        <Sidebar changePage={changePage} />
        <Routes>
          <Route path='/general' element={<MainForm children={<GeneralForm />} />} />
          <Route path='/ownership' element={<MainForm children={<OwnershipForm />} />} />
          <Route path='/registration-address' element={<MainForm children={<RegistrationAddressForm />} />} />
          <Route path='/residential-address' element={<MainForm children={<ResidentialAddressForm />} />} />
          <Route path='/social-media' element={<MainForm children={<SocialMediaForm />} />} />
          <Route path='/' element={<EmptyPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
