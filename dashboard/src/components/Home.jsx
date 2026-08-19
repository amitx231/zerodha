import React, { useEffect, useState } from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";


const Home = () => {
  const [user, setUser]=useState(null);
  const [loading , setLoading]=useState(true);

  useEffect(()=>{
    const checkAuthN =async()=>{
        try {
          const response =await fetch(
            "http://localhost:8080/api/auth/me",
            {
              credentials:"include"
            }
          );
          const data = await response.json();
          if(!response.ok)
          {
            window.location.href="http://localhost:5173/login";
            return;
          }
          setUser(data.user);
        } catch (error) {
          console.log("Authentication Error",error);
          window.location.href="http://localhost:5173/login"; 
        } finally{
          setLoading(false);
        }
      };
      checkAuthN();
  },[]);

  if(loading)
  {
    return <h2>Checking Authentication....!!</h2>
  }

  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;
