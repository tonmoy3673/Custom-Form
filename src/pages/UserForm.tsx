import React from "react";
import FormWrapper from "./FormWrapper";

const UserForm: React.FC = () => {
  return (
    <FormWrapper title="User Form">
        
      <label>First Name</label>
      <input type="text" required autoFocus />
      <label>Last Name</label>
      <input type="text" required />
      <label>Age</label>
      <input type="number" min={1} required/>
    </FormWrapper>
  );
};

export default UserForm;
