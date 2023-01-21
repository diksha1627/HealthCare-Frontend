import React from "react";
import "./Users.css";
import { UsersData } from "../../Data/Data";

const Users = () => {
  return (
    <div className="Users">
      {UsersData.map((user) => {
        return (
          <div className="user">
            <img src={user.img} alt="profile" />
            <div className="noti">
              <div  style={{marginBottom: '0.5rem'}}>
                <span>{user.name}</span>
              </div>
                <span>{user.time}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
