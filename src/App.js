import NavBar from "./components/NavBar";
import MobNav from "./components/MobNav";
import NavBtn from "./components/NavBtn";
import { useState } from "react";

function App() {
  const [isActive, setIsActive] = useState(false);
  const stateUpdater = () => {
    setIsActive(!isActive);
  };
  return (
    <div className="relative">
      <NavBar></NavBar>
      <MobNav state={isActive}></MobNav>
      <NavBtn updater={stateUpdater} state={isActive}></NavBtn>
    </div>
  );
}

export default App;
