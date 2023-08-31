import Card from "./Card";
import {useContext, useState} from "react";
import UserContext from "./Context";

function Deposit() {
  const ctx = useContext(UserContext);
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState('');
  const [amount, setAmount] = useState('');
  let userIdx = 0;

  console.log("Depost Component" + JSON.stringify(ctx));

  if (!ctx.currentLogin) {
    return (
        <Card 
          bgcolor="warning"
          txtcolor="black"
          header="Deposit"
          title="Not Logged In"
          text="Please Log In First"
        />
    );
  }

  function getCurrentUserIdx() {
    /* assume ctx.currentLogin is valid */
    let i;
    for (i = 0; i < ctx.users.length; i++) {
      if (ctx.currentLogin === ctx.users[i].name) {
        console.log("found user" + ctx.users[i]);
        return i;
      }    
    }

    /* should never be here */
    console.log("Something is hacked");
    return 0;
  }

  function validDeposit() {
     if (parseFloat(amount) <= 0) {
      setStatus('Error: Can not deposit negative amount.');
      setTimeout(()=>setStatus(''), 3000);
      return false;
     }
     return true;
  }

  function handleDeposit() {
      /* first valid input */
      if (!validDeposit()) return;
      
      ctx.users[userIdx].balance += parseFloat(amount);
      setShow(false);
  }

  function clearForm() {
      setAmount('');
      setShow(true);
  }

  userIdx = getCurrentUserIdx();

  return (
      <Card 
        bgcolor="success-subtle"
        txtcolor="black"
        header="Deposit"
        status={status}
        body={show ? (<>
              Balance: {ctx.users[userIdx].balance}
              <br/><br/>
              Deposit Amount: <br/>
              <input type="number" className="form-control"
                id="deposit" placeholder="Deposit Amount" value={amount}
                onChange={e=>setAmount(e.currentTarget.value)} /><br/>
              <button type="submit" 
                className={"btn btn-light btn-outline-dark " + ((!amount) ? "disabled" : '')}
                onClick={handleDeposit}>Deposit</button>

        </> ) 
        : 
        (<>
          <h5>{`Successfully deposited $${amount} to Account ${ctx.currentLogin} .`}</h5><br />
          New Balance is: {ctx.users[userIdx].balance} <br/><br/>

          <button type="submit" className="btn btn-light btn-outline-dark"
            onClick={clearForm}>Make another Deposit</button>
        </>)
        }
      />
  );   

}

export default Deposit;