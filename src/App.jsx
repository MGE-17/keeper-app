import { useEffect, useState } from "react";
import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Note from "./components/Note/Note";
import Footer from "./components/footer/Footer";
import notes from "./notes";

function App() {
  return (
    <>
      <Header />
      {notes.map((card) => {
        return <Note key={card.id} title={card.title} content={card.content} />;
      })}
      <Footer />
    </>
  );
}

export default App;
