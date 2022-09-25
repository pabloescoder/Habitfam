import "./App.css";
import { firebaseConfig } from "./config/firebase_config";
import User from "./models/user";
import { firebaseRegister } from "./services/authentication_service";


function App() {
  console.log(firebaseConfig)

  return (
    <div>
      <div>
        <p id="title">Habitfam</p>
      </div>
    </div>
  );
}

export default App;
