import React from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" data-tooltip-id="homeTip">
            Bad Bank
          </a>
          <ReactTooltip
            id="homeTip"
            place="bottom"
            content="Bad Bank's home page. For current News."
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#/CreateAccount/"
                  data-tooltip-id="caTip"
                >
                  Create Account
                </a>
                <ReactTooltip
                  id="caTip"
                  place="bottom"
                  content="Page to create new account"
                />
              </li>
              <li className="nav-item">
                <a className="nav-link" 
                   id="login" 
                   href="#/Login/"
                   data-tooltip-id="loginTip"
                >
                  Login
                </a>
                <ReactTooltip
                  id="loginTip"
                  place="bottom"
                  content="Page to Login to an existing account"
                />
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/Deposit/"
                   data-tooltip-id="depositTip"
                >
                  Deposit
                </a>
                <ReactTooltip
                  id="depositTip"
                  place="bottom"
                  content="Page to deposit money. You have to log in to an account first."
                />
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/Withdraw/"
                data-tooltip-id="withdrawTip"
                >
                  Withdraw
                </a>
                <ReactTooltip
                  id="withdrawTip"
                  place="bottom"
                  content="Page to withdraw money. You have to log in to an account first."
                />
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/AllData/"
                   data-tooltip-id="alldataTip"
                >
                  {" "}
                  All Data
                </a>
                <ReactTooltip
                  id="alldataTip"
                  place="bottom"
                  content="Page to list all accounts information"
                />
              </li>
            </ul>
            <span className="navbar-text" id="account"></span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

/*
  <ElementWithTooltip 
                              id="nav_item_ca"
                              tip="This is a page where you can create new account"
                              placement="bottom"
                            />


working hard-coded tooltip:
 <OverlayTrigger
                            placement="bottom"
                            delay={{show:200, hide:250}}
                            overlay={<Tooltip id="tooltip-id1">This is a tooltip</Tooltip>}
                          >
                          <a className="nav-link" href="#/CreateAccount/">Create Account</a>
                          </OverlayTrigger>

a simpler using ReactTooltip:
  
                        <a className="nav-link" href="#/CreateAccount/"
                        data-tooltip-id="caTip"
                        >Create Account</a>
                        <ReactTooltip id="caTip" place="bottom" effect="solid">
                            Tooltip please showup for ca using reacttooltip
                        </ReactTooltip>


                            */
