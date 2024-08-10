import { useState } from "react";


import "./App.css";
import React from 'react.jsx';
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Sidebar from "./Sidebar.jsx";
import List from "./List.jsx";
import ListItem from "./ListItem.jsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardPage from './DashboardPage';
import ItemDetailsPage from './ItemDetailsPage';
import AboutPage from './AboutPage';
import NotFoundPage from './NotFoundPage';












function App() {
  const [people, setPeople] = useState(initialData);

  // Handle delete item
  const handleDelete = (index) => {
    setPeople(people.filter((_, i) => i !== index));
  };

  return (
    <>
      <div>
        <h1>People List</h1>
        <List people={people} onDelete={handleDelete} />
      </div>
      <Navbar
        appName='The Appappapp'
        picture="images.png"
      />


      <Sidebar
        lingHomePage="./"
        linkAbout="./About"
      />

      <main>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/item/:id" element={<ItemDetailsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={0} g={255} b={0} />
      <BoxColor r={0} g={0} b={255} />
      <BoxColor r={128} g={128} b={128} />
      <Footer linkGit ="https://github.com/RobinZu/React-App" />
     
    </>
  );
};



export default App
