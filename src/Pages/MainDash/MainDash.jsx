import React from "react";
import Cards from "../../components/Cards/Cards";
import Table from "../../components/Table/Table";
import "./MainDash.css";
import RightSide from '../../components/RigtSide/RightSide';

const MainDash = () => {
  return (
    <>
    <div className="MainDash">
      <h1>Dashboard</h1>
      <Cards />
      <Table />
    
    </div>
      <RightSide/>
      </>
  );
};

export default MainDash;
