import Part from "../Part";

export default function Content({ parts }) {
  const content = parts.map((part) => {
    const { id, name, exercises } = part;
    return <Part key={id} name={name} exercises={exercises} />;
  });
  return <div>{content}</div>;
}
