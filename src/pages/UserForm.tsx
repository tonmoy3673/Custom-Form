import React from "react";
import FormWrapper from "./FormWrapper";

interface UserFormProps{
  firstName:string;
  lastName:string;
  age:string,

}
type UserFormData = UserFormProps &{
  updatedData:(fields:Partial<UserFormProps>)=>void
}
const UserForm: React.FC <UserFormData>= ({firstName,lastName,age,updatedData}) => {
  return (
    <FormWrapper title="User Form">
        
      <label>First Name</label>
      <input type="text" required autoFocus value={firstName}
      onChange={(e)=> updatedData({firstName: e.target.value})} />
      <label>Last Name</label>
      <input type="text" required value={lastName} onChange={(e)=>updatedData({lastName:e.target.value})}/>
      <label>Age</label>
      <input type="text" min={1} required value={age} onChange={e=>updatedData({age: e.target.value})}/>
    </FormWrapper>
  );
};

export default UserForm;
