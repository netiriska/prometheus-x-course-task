import { useNavigate } from "react-router-dom";
import imageNotFound from "../../images/specific-book/imageNotFound.png";

export default function Book(props) {
  const navigate = useNavigate();

  const navigateBook = () => {
    props.setCurrentBook(props.book);
    // 👇️ navigate to /
    navigate("/specificbook");
  };

  const onErrorHandler = (e) => {
    e.currentTarget.src = imageNotFound;
    e.currentTarget.classList.add("image__not_found");
  };
  return (
    <article className="book">
      <p className="book__author">
        <strong>Book author: </strong>
        {props.book.author}
      </p>
      <p className="book__price">{props.book.price}</p>
      <img
        className="book__image"
        src={props.book.image}
        alt="book image"
        onError={onErrorHandler}
      />
      <p className="book__title">
        <strong>Book name: </strong>
        {props.book.title}
      </p>
      <button className="book__button" onClick={navigateBook}>
        View
      </button>
    </article>
  );
}
