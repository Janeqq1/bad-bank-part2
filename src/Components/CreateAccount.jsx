import Card from "./Card";
import {useContext, useState} from "react";
import UserContext from "./Context";

function CreateAccount() {
    const ctx = useContext(UserContext);
    const [show, setShow] = useState(true);
    const [status, setStatus] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    console.log("Rending CreateAccount" + JSON.stringify(ctx));

    function validInput(input, label) {
       /* for now just check to make sure they exist */
       if (!input) {
        setStatus('Error: ' + label + ' is required');
        setTimeout(()=>setStatus(''), 3000);
        return false;
       }

       return true;
    }

    function handleCreate() {
        /* first valid input */
        if (!validInput(name, 'Name')) return;
        if (!validInput(email, 'Email')) return;
        if (!validInput(password, 'Password')) return;

        ctx.users.push({name, email, password, balance:100});
        setShow(false);
    }

    function clearForm() {
        setName('');
        setEmail('');
        setPassword('');
        setShow(true);
    }

    return (
        <Card 
          bgcolor="success-subtle"
          txtcolor="black"
          header="Create Account"
          status={status}
          body={show ? (<>
                Name: <br/>
                <input type="text" className="form-control" 
                  id="name" placeholder="Enter name" value={name} 
                  onChange={e =>setName(e.currentTarget.value)} /><br/>
                Email address: <br/>
                <input type="email" className="form-control"
                  id="emial" placeholder="Enter email" value={email}
                  onChange={e=>setEmail(e.currentTarget.value)} /><br/>
                Password: <br/>
                <input type="password" className="form-control"
                  id="password" placeholder="Enter password" value={password}
                  onChange={e=>setPassword(e.currentTarget.value)} /><br/>
                <button type="submit" 
                  className={"btn btn-light btn-outline-dark " + ((!name && !email && !password) ? "disabled" : '')}
                  onClick={handleCreate}>Create Account</button>

          </> ) 
          : 
          (<>
            <h5>{`Account ${ctx.currentLogin} Successfully Created.`}</h5><br/>
            <button type="submit" className="btn btn-light"
              onClick={clearForm}>Add Another Account</button>
          </>)
          }
        />
    );
}

export default CreateAccount;
