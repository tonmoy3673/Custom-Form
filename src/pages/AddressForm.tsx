import React from "react";

const AddressForm: React.FC = () => {
  return (
    <>
      <label>Street</label>
      <input type="text" required autoFocus />
      <label>City</label>
      <input type="text" required />
      <label>State</label>
      <input type="text" required/>
      <label>Zip</label>
      <input type="text" required/>
    </>
  );
};

export default AddressForm;
