import { useEffect, useState } from 'react';
import './App.css';
import './output.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BeforeLogin from './pages/BeforeLogin';
import { ResponsiveAppBar } from './CF_Lib/R---esponsiveAppBar';
import { LoginModal } from './CF_Lib/LoginModal';
import MiniDrawer from './CF_Lib/Minivariantdrawer';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import BasicBars from './Charts/BasicBars';
import { Dashboard } from './pages/Dashboard';


function App() {
  // const [Auth, setAuth] = useState(false);

  // const sessionData = localStorage.getItem('LoginKey');
  // console.log(sessionData);
  // useEffect(() => {
  //   if (sessionData != null) {
  //     setAuth(true);
  //   } else {
  //     setAuth(false);
  //   }
  //   return setLoading(false);
  // }, [sessionData]);

  // const [open, setOpen] = useState(false);

  // const destroySession = () => {
  //   localStorage.removeItem('LoginKey');
  // }
  // destroySession();

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoute />} >
            <Route element={<MiniDrawer />}>
              <Route path="/home" exact element={<Dashboard />} />
              <Route path="/staff" exact element={<div>Avalukenna Amaba samutaham 🎶🎵</div>} />
              <Route path="/branch" exact element={<div>🎶🎵</div>} />
              <Route path="/Service" exact element={<div>Idada pole</div>} />
              <Route path="/Bookings" exact element={<div>thana</div>} />
              <Route path="/Follow ups" exact element={<div>thinna</div>} />
            </Route>
            <Route path={`/nithi`} exact element={"Hello Nithi"} />
            <Route path={`*`} exact element={"Page Not found! Go Back to Home"} />
          </Route>
          <Route path={`/`} element={<BeforeLogin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
