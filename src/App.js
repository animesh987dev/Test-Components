import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Backdrop from "./components/Backdrop";
import Form from "./components/Form";
import { useState } from "react";

function App() {
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(!modal);
  };

  return (
    <div className="relative">
      <NavBar toggle={openModal}></NavBar>
      <Hero></Hero>
      {modal === true ? (
        <>
          <Backdrop toggle={openModal}></Backdrop>
          <Form toggle={openModal}></Form>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
