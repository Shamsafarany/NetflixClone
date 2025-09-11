import background from "../assets/background.jpg";
import '../Styles/Action.css';
import { useState } from "react";
function Action(){
  const [email, setEmail] = useState("");
  function handleInput(){
    if (!email) return;
    setEmail("");
  }
    return (
      <>
        <div className="containers">
          <div className="background" />
          <div className="texts">
            <h3>Unlimited movies, TV shows, and more</h3>
            <p>Starts at SAR 35. Cancel anytime.</p>
            <p>
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div className="emailCont">
              <input
                type="email"
                className="email"
                placeholder="Email address"
                required
                value ={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button onClick={handleInput}className="getStarted">Get Started &#10095;</button>
            </div>
          </div>
        </div>
      </>
    );
}
export default Action;