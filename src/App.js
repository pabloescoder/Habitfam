import { NextUIProvider } from "@nextui-org/react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/UI/Navbar";
import DetailedHabit from "./components/DetailedHabit/DetailedHabit";

function App() {
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
