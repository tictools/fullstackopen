import "./styles.css";

export default function Person({ user }) {
  return (
    <li className="numbers-list__row">
      <p className="row__item--left">{user.name}</p>
      <p className="row__item--right">{user.phone}</p>
    </li>
  );
}
