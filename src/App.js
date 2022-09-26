import { useContext } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { Routes, Route } from "react-router-dom";
import AuthContext from "./store/authContext";
import Navbar from "./components/UI/Navbar";
import DetailedHabit from "./components/DetailedHabit/DetailedHabit";
import { firebaseConfig } from "./config/firebase_config";
import User from "./models/user";
import { firebaseRegister } from "./services/authentication_service";
import Enterhabit from "./components/Enterhabit/Enterhabit";
import { createHabitGroup } from "./services/database_service";
import AuthModal from "./components/UI/AuthenticationModal";

async function firebaseIntegration() {
  const test_user = new User(
    "8jABCPjHG8dhqxsMUJp9V2pAYHy2",
    "test02@gmail.com"
  );
  test_user.name = "test one";
  console.log(test_user.userMap);
  var res = await createHabitGroup(
    test_user,
    "DSA",
    "lorem ipsume debug etc etc",
    new Date(2022, 10, 26),
    new Date(2022, 11, 26)
  );
  console.log(res);
}

function App() {
  const authCtx = useContext(AuthContext);
  firebaseIntegration();

  return (
    <NextUIProvider>
      <Navbar />
      {/* <div className="page"> */}
      {/* <Enterhabit /> */}
      {/* </div> */}
      {authCtx.showModal && <AuthModal />}
      <Routes>
        <Route path="/detailed-habit" element={<DetailedHabit />}></Route>
      </Routes>
    </NextUIProvider>
  );
}
export default App;
