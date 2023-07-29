import { useNavigate } from "react-router-dom";
import imageNotFound from "../../images/specific-book/imageNotFoundVertical.png";

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
      <img
        className="book__image"
        src={props.book.image}
        alt="book image"
        onError={onErrorHandler}
      />
      <div className="book_short-info">
        <p className="book__title">
          <strong>Book name: </strong>
          {props.book.title.length >
          24 /*https://dirask.com/questions/React-limit-string-to-display-only-10-characters-of-it-in-component-pON75D*/
            ? props.book.title.substring(0, 24) + "..."
            : props.book.title}
        </p>
        <p className="book__author">
          <strong>Book author: </strong>
          {props.book.author}
        </p>
        <div className="book__price_view">
          <p className="book__price">{props.book.price}</p>
          <button className="book__button" onClick={navigateBook}>
            View
          </button>
        </div>
      </div>
    </article>
  );
}
