import { NextUIProvider } from "@nextui-org/react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/UI/Navbar";
import DetailedHabit from "./components/DetailedHabit/DetailedHabit";
import { firebaseConfig } from "./config/firebase_config";
import User from "./models/user";
import { firebaseRegister } from "./services/authentication_service";
import Enterhabit from "./components/Enterhabit/Enterhabit";
import UserInfo from "./components/UserInfo/UserInfo";
function App() {


  return (
    <NextUIProvider>
      <Navbar />
      <div className="page">
      
      
    </div>

      {/* <div className="page"> */}
      {/* <Enterhabit /> */}
    {/* </div> */}

      <Routes>
        <Route path="/detailed-habit" element={<DetailedHabit />}></Route>
      </Routes>
      <Routes>
        <Route path="/detailed-habit" element={<Enterhabit />}></Route>
      </Routes>
      <Routes>
        <Route path="/detailed-habit" element={<UserInfo />}></Route>
      </Routes>
    </NextUIProvider>
  );
}
export default App;
