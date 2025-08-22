import React from "react";
import FormWrapper from "./FormWrapper";

const AccountForm: React.FC = () => {
  return (
    <FormWrapper title="Account Form">
      <label>Email</label>
      <input type="email" required autoFocus />
      <label>Password</label>
      <input type="password" required />
    </FormWrapper>
  );
};

export default AccountForm;
