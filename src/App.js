import { NextUIProvider } from "@nextui-org/react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/UI/Navbar";
import DetailedHabit from "./components/DetailedHabit/DetailedHabit";
import { firebaseConfig } from "./config/firebase_config";
import User from "./models/user";
import { firebaseRegister } from "./services/authentication_service";
import Enterhabit from "./components/Enterhabit/Enterhabit";
import { createHabitGroup, getHabitGroupMembers, getMyHabitGroups } from "./services/database_service";



async function firebaseIntegration() {
  const test_user = new User("8jABCPjHG8dhqxsMUJp9V2pAYHy2", "test02@gmail.com");
  test_user.name = "test one";
  // console.log(test_user.userMap);
  // var res = await createHabitGroup(test_user, "DSA", "lorem ipsume debug etc etc", new Date(2022, 10, 26), new Date(2022, 11, 26));
  // console.log(res);

  var res = await getMyHabitGroups(test_user);
  var res = await getHabitGroupMembers(res[0]);
  console.log(res);

}

function App() {
  // firebaseIntegration();

  return (
    <NextUIProvider>
      <Navbar />
      {/* <div className="page"> */}
      {/* <Enterhabit /> */}
    {/* </div> */}
      <Routes>
        <Route path="/detailed-habit" element={<DetailedHabit />}></Route>
      </Routes>
    </NextUIProvider>
  );
}
export default App;
