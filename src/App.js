import { useContext } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/UI/Navbar";
import AuthContext from "./store/authContext";
import AuthModal from "./components/UI/AuthenticationModal";
import DetailedHabit from "./components/DetailedHabit/DetailedHabit";
import Enterhabit from "./components/Enterhabit/Enterhabit";
import UserInfo from "./components/UserInfo/UserInfo";

const App = () => {
  const authCtx = useContext(AuthContext);

  return (
    <NextUIProvider>
      <Navbar />
      {authCtx.showModal && <AuthModal />}
      <Routes>
        <Route path="/detailed-habit" element={<DetailedHabit />}></Route>
      </Routes>
      <Routes>
        <Route path="/new-habit-group" element={<Enterhabit />}></Route>
      </Routes>
      <Routes>
        <Route path="/dashboard" element={<UserInfo />}></Route>
      </Routes>
    </NextUIProvider>
  );
};
export default App;
