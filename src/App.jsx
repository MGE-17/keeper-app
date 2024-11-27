import { useEffect, useState } from "react";
import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Note from "./components/Note/Note";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />;
      <Note />;
      <Footer />;
    </>
  );
}

export default App;
