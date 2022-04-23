import { useSelector, useDispatch } from "react-redux";
import {
  logIn,
  logOut,
} from "./actions/actions.auth";


function App() {

  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  return (

    <div className="card border-primary mb-3">
      <div className="card-header">App 1 - For Logged in users only</div>
      <div className="card-body text-primary">



        <p>Log in to see a secret about me</p>
        <button className="btn btn-success" onClick={() => dispatch(logIn())}>Login</button>
        
        {auth ? (
          <><button className="btn btn-primary" onClick={() => dispatch(logOut())}>Logout</button>
          <div>
            <p>
              I don't more than 50% of redux. But if you know 50% of it, you're like a Superman.
            </p>
          </div>
          </>) : (
          ""
        )}

      </div>
    </div>

  );
}

export default App;
