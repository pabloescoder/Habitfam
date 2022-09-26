<<<<<<< HEAD
import { NextUIProvider } from "@nextui-org/react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/UI/Navbar";
import DetailedHabit from "./components/DetailedHabit/DetailedHabit";
import { firebaseConfig } from "./config/firebase_config";
import User from "./models/user";
import { firebaseRegister } from "./services/authentication_service";
import Enterhabit from "./components/Enterhabit/Enterhabit";
function App() {
  console.log(firebaseConfig);

=======
import { async } from "@firebase/util";
import "./App.css";
import { firebaseConfig } from "./config/firebase_config";
import User from "./models/user";
import { firebaseRegister, firebaseSignIn } from "./services/authentication_service";


async function App() {
>>>>>>> dev-abhinav
  return (
    <NextUIProvider>
      <Navbar />
      <div className="page">
      <Enterhabit />
    </div>
      <Routes>
        <Route path="/detailed-habit" element={<DetailedHabit />}></Route>
      </Routes>
    </NextUIProvider>
  );
}
export default App;
