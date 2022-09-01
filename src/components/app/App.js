import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Main from "../main/Main";
import Header from "../header/Header";
import Login from "../login/Login";

import './App.scss';
import Register from "../register/Register";

function App() {
  return (
      <BrowserRouter>
            <div className="App">
                <Header/>
                <main>
                    <Routes>
                        <Route path="/" element={<Main/>}/>
                        <Route path="registration" element={<Register/>}/>
                        <Route path="login" element={<Login/>}/>
                    </Routes>
                </main>
            </div>
      </BrowserRouter>

  );
}

export default App;
