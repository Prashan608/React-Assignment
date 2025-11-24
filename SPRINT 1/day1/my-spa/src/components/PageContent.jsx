import "../App.css";

function PageContent({ activePage }) {
  // Conditional rendering based on which page is active
  return (
    <div
      style={{
        textAlign: "center",
        padding: "50px",
        borderRadius: "10px",
        width: "60%",
        margin: "auto",
        backgroundColor:
          activePage === "home"
            ? "#e3f2fd" // light blue
            : activePage === "about"
            ? "#e8f5e9" // light green
            : "#fff3e0", // light orange (for contact)
        transition: "0.4s",
      }}
    >
      {activePage === "home" && <h2>Welcome to the Home Page!</h2>}

      {activePage === "about" && (
        <>
          <h2>About Us</h2>
          <p>
            We’re passionate learners exploring React and building amazing user experiences.
          </p>
        </>
      )}

      {activePage === "contact" && (
        <>
          <h2>Contact Us</h2>
          <p>
            Feel free to reach out via email at <b>support@example.com</b>.
          </p>
        </>
      )}
    </div>
  );
}

export default PageContent;
