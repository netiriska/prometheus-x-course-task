export default function Book(props) {
  return (
    <div>
      <h1>
        {props.title} {props.author}
      </h1>
    </div>
  );
}
