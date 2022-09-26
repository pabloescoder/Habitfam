import { NextUIProvider } from "@nextui-org/react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/UI/Navbar";
import DetailedHabit from "./components/DetailedHabit/DetailedHabit";
import { firebaseConfig } from "./config/firebase_config";
import User from "./models/user";
import { firebaseRegister } from "./services/authentication_service";
import Enterhabit from "./components/Enterhabit/Enterhabit";
<<<<<<< HEAD
import UserInfo from "./components/UserInfo/UserInfo";
=======
import { createHabitGroup } from "./services/database_service";



async function firebaseIntegration() {
  const test_user = new User("8jABCPjHG8dhqxsMUJp9V2pAYHy2", "test02@gmail.com");
  test_user.name = "test one";
  console.log(test_user.userMap);
  var res = await createHabitGroup(test_user, "DSA", "lorem ipsume debug etc etc", new Date(2022, 10, 26), new Date(2022, 11, 26));
  console.log(res);
}

>>>>>>> a4786cc58768a05659b32b335d4fe8e8d9060aa0
function App() {
  firebaseIntegration();

  return (
    <NextUIProvider>
      <Navbar />
<<<<<<< HEAD
      <div className="page">
      
      
    </div>
=======
      {/* <div className="page"> */}
      {/* <Enterhabit /> */}
    {/* </div> */}
>>>>>>> a4786cc58768a05659b32b335d4fe8e8d9060aa0
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
