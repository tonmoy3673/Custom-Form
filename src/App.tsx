import useCustomForm from "./hooks/useCustomForm";
import AccountForm from "./pages/AccountForm";
import AddressForm from "./pages/AddressForm";
import UserForm from "./pages/UserForm";

function App() {
  const { steps, step, currentStepIndex, back, next } = useCustomForm([
    <UserForm />,
    <AddressForm />,
    <AccountForm />,
  ]);
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
          <form>
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
                <button type="button" onClick={back}>
                  Back
                </button>
              )}
              <button type="button" onClick={next}>
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
