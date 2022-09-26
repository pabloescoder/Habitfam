import { async } from "@firebase/util";
import "./App.css";
import { firebaseConfig } from "./config/firebase_config";
import User from "./models/user";
import { firebaseRegister, firebaseSignIn } from "./services/authentication_service";


async function App() {
  return (
    <div>
      <div>
        <p id="title">Habitfam</p>
      </div>
    </div>
  );
}

export default App;
