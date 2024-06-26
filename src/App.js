import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BeforeLogin from './pages/BeforeLogin';
import { ResponsiveAppBar } from './CF_Lib/R---esponsiveAppBar';
import { LoginModal } from './CF_Lib/LoginModal';


function App() {
  const [Auth, setAuth] = useState(false);
  const sessionData = localStorage.getItem('LoginKey');
  useEffect(() => {
    if (sessionData) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, [sessionData]);

  const [open, setOpen] = useState(false);

  return (
    <div className="App">


        <BrowserRouter>

          {Auth ?
            <Routes>
              <Route path={`/`} element={<BeforeLogin />} />
            </Routes>
            :
            <Routes>
              <Route path={`/`} element={<BeforeLogin />} />
              <Route path={`/Contact`} element={"Contact"} />
              <Route path={`/dd`} element={"Login Component"} />
              <Route path={`/dashboard`} element={"<Dashboard />"} />
            </Routes>
          }
        </BrowserRouter>

    </div>
  );
}

export default App;
