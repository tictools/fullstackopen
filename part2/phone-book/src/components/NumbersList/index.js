import Person from "../Person";

export default function NumbersList({ persons }) {
  return (
    <ul>
      {persons.map((person) => (
        <Person key={person.name} person={person} />
      ))}
    </ul>
  );
}
