import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../imgs/logo.png";
import { UilSignOutAlt ,UilEstate } from "@iconscout/react-unicons";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [selectedDashboard, setSelectedDashboard] = useState(false);
  const [selectedDiabetes, setSelectedDiabetes] = useState(false);
  const [selectedForm, setSelectedForm] = useState(false);


  const [expanded, setExpaned] = useState(true)

  const sidebarVariants = {
    true: {
      left: '0'
    },
    false: {
      left: '-60%'
    }
  }
  console.log(window.innerWidth)
  return (
    <>
      <div className="bars" style={expanded ? { left: '60%' } : { left: '5%' }} onClick={() => setExpaned(!expanded)}>
        <UilBars />
      </div>
      <motion.div className='sidebar'
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ''}
      >
        {/* logo */}
        <div className="logo">
          {/* <img src={Logo} alt="logo" /> */}
          <span>
           <span>HealthCare</span>
          </span>
        </div>

        <div className="menu">   
        
           <div className={selectedDashboard ? "menuItem active" : "menuItem"} onClick={()=>{setSelectedDashboard(true);
          setSelectedDiabetes(false);
          setSelectedForm(false);}}>
          <UilEstate />
          <Link to="/dashboard"><span>Dashboard</span> </Link> 
          </div> 

          <div className={selectedForm ? "menuItem active" : "menuItem"} onClick={()=>{setSelectedForm(true);
          setSelectedDashboard(false);
          setSelectedDiabetes(false);}}>
          <UilEstate />
          <Link to="/form"><span>Form</span> </Link> 
          </div> 


          <div className={selectedDiabetes ? "menuItem active" : "menuItem"} onClick={()=>{setSelectedDiabetes(true);
                                                                                           setSelectedForm(false);
                                                                                           setSelectedDashboard(false);}}>
          <UilEstate />
          <Link to="/diabetes"><span>Diabetes</span> </Link> 
          </div> 


       



          {/* signoutIcon */}
          <div className="menuItem">
            <UilSignOutAlt />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
