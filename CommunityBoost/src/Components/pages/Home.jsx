import React, { useEffect, useState } from "react";
import Navbar from "../layouts/Navbar.jsx";
import FeedCard from "../FeedCard/FeedCard.jsx";
import { Navigate } from "react-router-dom";
import NewCard from "../NewCard/NewCard.jsx";
import "./Home.css";
import AboutUs from "../AboutUs/AboutUs.jsx";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div>
      {isLoggedIn ? (
        <div className="home">
          <Navbar />
          <NewCard />
          <FeedCard />
          <AboutUs />
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </div>
  );
}
