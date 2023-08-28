import React from "react";
import ReactBootstrap from "react-bootstrap";
import Card from "./Card";
import NavBar from "./NavBar";
import Home from "./Home";
import Withdraw from "./Withdraw";
import {HashRouter, Routes, Route, Link} from "react-router-dom";

function Badbank() {
    //const ctx = React.useContext(UserContext);

    return (<>
        <HashRouter>
            <NavBar />
           
                    <p>test from inside Badbank component</p>
                    <Link to="/">Home</Link>
                    <div className="container" style={{ padding: "20px" }}>
                    <Routes>
                    <Route path="/" exact component={Home} />
                    <Route path="/CreateAccount" component={Home} />
                    <Route path="/Login" component={Home} />
                    <Route path="/Deposit" element={<Home />} />
                    <Route path="/Withdraw" component={Withdraw} />
                    <Route path="/Balance" component={Home} />
                    <Route path="/Alldata" component={Home} />

                    
                    </Routes>
                    </div>
                
        
        </HashRouter>
        </>
    );


/*
    return (
        <HashRouter>
            <NavBar />
            
            <UserContext.Provider value={{
                users: [{
                    name: 'abel',
                    email: 'abel@mit.edu', password: 'secret', balance: 100
                }]
            }}>
                <div className="container" style={{ padding: "20px" }}>
                    <Route path="/" exact component={Home} />
                    <Route path="/CreateAccount" component={CreateAccount} />
                    <Route path="/Login" component={Login} />
                    <Route path="/Deposit" component={Deposit} />
                    <Route path="/Withdraw" component={Withdraw} />
                    <Route path="/Balance" component={Balance} />
                    <Route path="/Alldata" component={AllData} />
                </div>
            </UserContext.Provider>
            
        </HashRouter>
    );
*/
    /*
    
    return (
        <Card 
          txtcolor="black"
          header="BadBank Landing Page"
          title="Welcome to the bank 2:39"
          text="You can use this bank"
          body={(<img src="bank.png" className="img-fluid" />)}
        />
    );
    */
    
   //return (<div>Test Again</div>);
}

export default Badbank;