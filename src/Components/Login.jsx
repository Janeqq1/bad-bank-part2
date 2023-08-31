import Card from "./Card";
import {useContext, useState} from "react";
import UserContext from "./Context";

function Login() {
    const ctx = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState('');
    const [show, setShow] = useState(true);

    function validInput(input, label) {
      /* for now just check to make sure they exist */
      if (!input) {
       setStatus('Error: ' + label + ' is required');
       setTimeout(()=>setStatus(''), 3000);
       return false;
      }

      return true;
   }

   function handleLogin() {
    if (!validInput(email, 'Email')) return;
    if (!validInput(password, 'Password')) return;

    /* login logic */
    /* find the matching user */
    let i = 0;
    let userFound = false;
    for (i=0; i<ctx.users.length; i++) {
        if (email === ctx.users[i].email) {
            if (password === ctx.users[i].password) {
                userFound = true;
                ctx.currentLogin = ctx.users[i].name;
                break;
            }
        }
    }

    if (userFound) {
        setStatus('Logged In to Account ' + ctx.currentLogin);
        document.getElementById("login").innerText = "Logout";
        document.getElementById("account").innerText = 
            "Account: " + ctx.currentLogin;
    } else {
        setStatus('Login Failed.');
        setTimeout(()=>setStatus(''), 3000);
    }

    setEmail('');
    setPassword('');
   }
    
   function handleLogout() {
    ctx.currentLogin = '';
    document.getElementById("login").innerText = "Login";
    document.getElementById("account").innerText = "";
    setStatus('');
    setShow(!show);
   }

   if (!ctx.currentLogin) {
    return (
      <Card 
       bgcolor="primary-subtle"
       txtcolor="black"
       header="Login"
       status={status}
       body={
        (
          <>
          Email<br/>
          <input type="email" className="form-control"
            id="email" placeholder="Enter email" value={email}
            onChange={e=>setEmail(e.currentTarget.value)} /><br/>
          Password<br/>
          <input type="password" className="form-control"
            id="password" placeholder="Enter password" value={password}
            onChange={e=>setPassword(e.currentTarget.value)} /><br/>
          <button type="submit" 
            className={"btn btn-light btn-outline-dark " + ((!email && !password) ? "disabled": '')}
            onClick={handleLogin}>Login</button>
          </>
        ) 
       }
      />
    );
   } else {
    return (
        <Card 
       bgcolor="warning-subtle"
       txtcolor="black"
       header="Logout"
       body={
        (
          <>
          Currently Logged In to Account {ctx.currentLogin} <br /><br/>
          <button type="submit" className="btn btn-light btn-outline-dark"
            onClick={handleLogout}>Logout</button>
          </>
        ) 
       }
      />
    );
   }
}

export default Login;