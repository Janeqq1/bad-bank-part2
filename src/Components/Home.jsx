import Card from "./Card";
import {useContext} from "react";
import UserContext from "./Context";

function Home() {
    const ctx = useContext(UserContext);

    console.log("Render Home: "+ JSON.stringify(ctx));
    
    return (
        <Card 
          txtcolor="black"
          header="BadBank Home Page"
          title={"Welcome to the bank" + (ctx.currentLogin ? `, ${ctx.currentLogin}` : '')}
          text="For all your bad banking needs."
          body={(<img src="bank.png" className="img-fluid" 
                    alt="Responsive image" />)}
        />
    );
    
}

export default Home;