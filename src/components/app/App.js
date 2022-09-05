import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import {useState} from "react";
import {CookiesProvider} from "react-cookie";

import Main from "../main/Main";
import Header from "../header/Header";
import Login from "../login/Login";
import Register from "../register/Register";
import Table from "../table/Table";
import './App.scss';

function App() {
    const [loggedIn, setLoggedIn] = useState(localStorage.getItem("loggedIn"));


  return (
      <CookiesProvider>
          <BrowserRouter>
                <div className="App">
                    <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
                    <main>
                        <Routes>
                            <Route path="/" element={<Main loggedIn={loggedIn}/>}/>
                            <Route path="registration" element={<Register/>}/>
                            <Route path="login" element={<Login setLoggedIn={setLoggedIn} />}/>
                            <Route path="statistic-links" element={<Table/>}/>
                        </Routes>
                    </main>
                </div>
          </BrowserRouter>
      </CookiesProvider>


          );
}

export default App;
