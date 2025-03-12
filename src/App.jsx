import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Country from "./pages/Country";
import Contact from "./pages/Contact";
import AppLayout from "./components/Layouts/AppLayout";
import ErrorPage from "./pages/ErrorPage";
import CountryCard from "./components/Layouts/CountryCard";
import CountryDetails from "./components/Layouts/CountryDetails";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="country" element={<Country />} />
        <Route path="country/:id" element={<CountryDetails />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default App;
