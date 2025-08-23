import React from "react";
import FormWrapper from "./FormWrapper";

interface AddressFormProps{
  street: string;
  city: string;
  state: string;
  zip: string;
}

type AddressFormData = AddressFormProps &{
  updatedData:(fields:Partial<AddressFormProps>)=>void
}
const AddressForm: React.FC <AddressFormData>= ({street,state,zip,city,updatedData}) => {
  return (
    <FormWrapper title="Address Form">
      <label>Street</label>
      <input type="text" required autoFocus value={street} onChange={e=>updatedData({street:e.target.value})}/>
      <label>City</label>
      <input type="text" required value={city} onChange={e=>updatedData({city:e.target.value})}/>
      <label>State</label>
      <input type="text" required value={state} onChange={e=>updatedData({state:e.target.value})}/>
      <label>Zip</label>
      <input type="text" required value={zip} onChange={e=>updatedData({zip:e.target.value})}/>
    </FormWrapper>
  );
};

export default AddressForm;
