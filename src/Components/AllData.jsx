import Card from "./Card";
import {useContext} from "react";
import UserContext from "./Context";

function AllData() {
    const ctx = useContext(UserContext);
  
    return (
      <Card 
          bgcolor="info-subtle"
          txtcolor="black"
          header="BadBank ALL DATA"
          title={`Total Users:  ${ctx.users.length} `}
          body={(<table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
                <th scope="col">Balance</th>
              </tr>
            </thead>
            <tbody>
              {ctx.users.map((item)=>
                (
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.password}</td>
                    <td>{item.balance}</td>
                  </tr>
                ))}
            </tbody>
          </table>
          )
          }
        />
    );
  }

  export default AllData;