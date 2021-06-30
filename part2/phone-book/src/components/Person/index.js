export default function Person({ person, rowClassName }) {
  return <li className={rowClassName}>{person.name}</li>;
}
