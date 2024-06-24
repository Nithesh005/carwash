import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BeforeLogin from './pages/BeforeLogin';
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
          </Routes>
        }
      </BrowserRouter>
    </div>
  );
}

export default App;
