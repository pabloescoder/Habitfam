import { NextUIProvider } from "@nextui-org/react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/UI/Navbar";
import DetailedHabit from "./components/DetailedHabit/DetailedHabit";
import { firebaseConfig } from "./config/firebase_config";
import User from "./models/user";
import { firebaseRegister } from "./services/authentication_service";

function App() {
  console.log(firebaseConfig);

  return (
    <NextUIProvider>
      <Navbar />
      <Routes>
        <Route path="/detailed-habit" element={<DetailedHabit />}></Route>
      </Routes>
    </NextUIProvider>
  );
}
export default App;
