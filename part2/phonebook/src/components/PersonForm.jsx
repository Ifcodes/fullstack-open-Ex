const PersonForm = ({ handleSubmit, newName, newNumber, handleChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        Name: <br />{" "}
        <input
          required
          name="newName"
          value={newName}
          onChange={handleChange}
        />
      </div>
      <div>
        Number: <br />{" "}
        <input
          name="newNumber"
          type="tel"
          required
          value={newNumber}
          onChange={handleChange}
        />
      </div>
      <div className="submit-btn-container">
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
