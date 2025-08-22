import React from "react";
import FormWrapper from "./FormWrapper";

const AddressForm: React.FC = () => {
  return (
    <FormWrapper title="Address Form">
      <label>Street</label>
      <input type="text" required autoFocus />
      <label>City</label>
      <input type="text" required />
      <label>State</label>
      <input type="text" required/>
      <label>Zip</label>
      <input type="text" required/>
    </FormWrapper>
  );
};

export default AddressForm;
