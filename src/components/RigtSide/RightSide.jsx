import React from "react";
import CustomerReview from "../CustomerReview/CustomerReview";
import Users from "../Users/Users";
import "./RightSide.css";

const RightSide = () => {
  return (
    <div className="RightSide">
      <div>
        <h3>Users</h3>
        <Users />
      </div>
      <div>
        <h3>Customer Review</h3>
        <CustomerReview />
      </div>
    </div>
  );
};

export default RightSide;
