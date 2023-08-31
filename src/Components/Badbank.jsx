import React from "react";
import ReactBootstrap from "react-bootstrap";
import NavBar from "./NavBar";
import Home from "./Home";
import Withdraw from "./Withdraw";
import Deposit from "./Deposit";
import CreateAccount from "./CreateAccount";
import Login from "./Login";
import AllData from "./AllData";
import {HashRouter, Routes, Route, Link} from "react-router-dom";
import UserContext from "./Context";


function Badbank() {
    
    return (<>
    <NavBar />
        <HashRouter>
            
            <UserContext.Provider value={{
                users: [{
                    name: 'Abel',
                    email: 'abel@mit.edu', password: 'nono', balance: 100
                }],
                currentLogin: ''
            }}>
                    <div className="container" style={{padding: "20px" }}>
                    <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/CreateAccount" element={<CreateAccount />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Deposit" element={<Deposit />} />
                    <Route path="/Withdraw" element={<Withdraw />} />
                    <Route path="/Alldata" element={<AllData />} />

                    
                    </Routes>
                    </div>
            </UserContext.Provider> 
        
        </HashRouter>
        </>
    );

}

export default Badbank;