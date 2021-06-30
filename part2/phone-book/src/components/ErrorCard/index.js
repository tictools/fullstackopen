export default function ErrorCard({ errorMessage }) {
  return (
    <div className="form-group">
      <p className="form__error">{errorMessage}</p>
    </div>
  );
}
