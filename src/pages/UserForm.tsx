import React from "react";

const UserForm: React.FC = () => {
  return (
    <>
      <label>First Name</label>
      <input type="text" required autoFocus />
      <label>Last Name</label>
      <input type="text" required />
      <label>Age</label>
      <input type="number" min={1} required/>
    </>
  );
};

export default UserForm;
