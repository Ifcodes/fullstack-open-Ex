const Persons = ({ filteredPersonsList }) => {
  return (
    <ul>
      {filteredPersonsList.map((person) => (
        <li key={person.name}>
          {person.name} {person.number}
        </li>
      ))}
    </ul>
  );
};

export default Persons;
