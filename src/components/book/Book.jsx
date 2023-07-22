export default function Book(props) {
  return (
    <article className="book">
      <p className="book__author">
        <strong>Book author: </strong>
        {props.author}
      </p>
      <p className="book__price">{props.price}</p>
      <img className="book__image" src={props.image} alt="book image" />
      <p className="book__title">
        <strong>Book name: </strong>
        {props.title}
      </p>
      <button className="book__button">View</button>
    </article>
  );
}
