import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BeforeLogin from './pages/BeforeLogin';
import { ResponsiveAppBar } from './CF_Lib/ResponsiveAppBar';
function App() {
  const [Auth, setAuth] = useState(false);
  return (
    <div className="App">

      <BrowserRouter>

        {Auth ?
          "kk"
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
