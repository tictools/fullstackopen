import "./styles.css";

export default function Person({ person, rowClassName }) {
  return (
    <li className="numbers-list__row">
      <p className="row__item--left">{person.name}</p>
      <p className="row__item--right">{person.phone}</p>
    </li>
  );
}
