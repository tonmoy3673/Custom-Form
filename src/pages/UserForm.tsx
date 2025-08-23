import React from "react";
import FormWrapper from "./FormWrapper";

interface UserFormProps{
  firstName:string;
  lastName:string;
  age:string
}
const UserForm: React.FC <UserFormProps>= ({firstName,lastName,age}) => {
  return (
    <FormWrapper title="User Form">
        
      <label>First Name</label>
      <input type="text" required autoFocus value={firstName} />
      <label>Last Name</label>
      <input type="text" required value={lastName}/>
      <label>Age</label>
      <input type="text" min={1} required value={age}/>
    </FormWrapper>
  );
};

export default UserForm;
