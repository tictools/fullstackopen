export default function Person({ person, rowClassName }) {
  return (
    <li className={rowClassName}>
      <p>{person.name}</p>
      <p>{person.phone}</p>
    </li>
  );
}
