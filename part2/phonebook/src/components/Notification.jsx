const Notification = ({ message, type }) => {
  if (!message) return null;

  const errorStyle = {
    width: "100%",
    padding: "8px 16px",
    borderRadius: "8px",
    color: "red",
    border: "1px solid red",
    marginBottom: "1rem",
  };

  const successMessageStyle = {
    width: "100%",
    padding: "8px 16px",
    borderRadius: "8px",
    color: "green",
    border: "1px solid green",
    marginBottom: "1rem",
  };

  return (
    <div style={type === "error" ? errorStyle : successMessageStyle}>
      {message}
    </div>
  );
};

export default Notification;
