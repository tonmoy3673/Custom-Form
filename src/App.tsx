import { useState, type FormEvent } from "react";
import useCustomForm from "./hooks/useCustomForm";
import AccountForm from "./pages/AccountForm";
import AddressForm from "./pages/AddressForm";
import UserForm from "./pages/UserForm";

interface FormDataType {
  firstName: string;
  lastName: string;
  age: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  password: string;
}
const initialFormData: FormDataType = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
};
function App() {
  const [data, setData] = useState<FormDataType>(initialFormData);
  const updatedData =(fields: Partial<FormDataType>)=>{
    setData(prev=>{
      return {...prev,...fields}
    })
  }

  const { steps, step, currentStepIndex, back, next } = useCustomForm([
    <UserForm {...data} updatedData={updatedData}/>,
    <AddressForm {...data} updatedData={updatedData}/>,
    <AccountForm {...data} updatedData={updatedData}/>,
  ]);

  // ======= onSubmit =====//
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    next();
  };
  return (
    <>
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* =========== Title ======= */}
        <header
          style={{
            paddingTop: "10px",
            fontSize: "25px",
            fontWeight: "bold",
            color: "gray",
          }}
        >
          Custom Form
        </header>
        {/* ======== Form Container ======= */}
        <div
          style={{
            position: "relative",
            background: "white",
            border: "1px solid black",
            padding: "2rem",
            margin: "1rem",
            borderRadius: "6px",
            fontFamily: "sans-serif",
            width: "700px",
          }}
        >
          {/* ========== form ======== */}
          <form onSubmit={onSubmit}>
            {/* =========== display step ===== */}
            <div style={{ position: "absolute", top: ".5rem", right: ".8rem" }}>
              {currentStepIndex}/{steps.length}
            </div>
            {/* ========== form Content ====== */}
            <div>{step}</div>
            {/* ========= step buttons container ========= */}
            <div
              style={{
                marginTop: "1rem",
                display: "flex",
                gap: ".5rem",
                justifyContent: "flex-end",
              }}
            >
              {/* ======== buttons ======= */}
              {currentStepIndex !== 0 && (
                <button type="submit" onClick={back}>
                  Back
                </button>
              )}
              <button type="submit">
                {currentStepIndex === steps.length - 1 ? "Finish" : "Next"}
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export default App;
