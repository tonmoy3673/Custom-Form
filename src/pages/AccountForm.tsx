import React from "react";
import FormWrapper from "./FormWrapper";

interface AccountFormProps{
  email:string;
  password:string;
}

type AccountFormData = AccountFormProps &{
  updatedData:(fields:Partial<AccountFormProps>)=>void
}

const AccountForm: React.FC <AccountFormData>= ({email,password,updatedData}) => {
  return (
    <FormWrapper title="Account Form">
      <label>Email</label>
      <input type="email" required autoFocus value={email} onChange={e=>updatedData({email:e.target.value})}/>
      <label>Password</label>
      <input type="password" required value={password} onChange={e=>updatedData({password:e.target.value})}/>
    </FormWrapper>
  );
};

export default AccountForm;
