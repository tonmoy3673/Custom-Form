function App() {
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
            color: "GrayText",
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
              0/2
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export default App;
