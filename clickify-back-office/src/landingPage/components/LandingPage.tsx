import React, { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const LandingPage: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname === "/") {
      navigate("/dashboard");
    }
  }, [navigate]);

  return <div style={{ display: "flex" }}></div>;
};
