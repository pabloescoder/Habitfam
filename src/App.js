import "./App.css";
import User from "./models/user";


function App() {
  var u = new User("UID_STRING", "algorithm@me.com");
  return (
    <div>
      <div>
        <p id="title">Habitfam</p>
      </div>
    </div>
  );
}

export default App;
