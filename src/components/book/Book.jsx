import { useNavigate } from "react-router-dom";
import imageNotFound from "../../images/specific-book/imageNotFoundVertical.png";

export default function Book({ setCurrentBook, book }) {
  const navigate = useNavigate();
  const { image, title, author, price } = book;

  const navigateBook = () => {
    setCurrentBook(book);
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
        src={image}
        alt="Book"
        onError={onErrorHandler}
      />
      <div className="book_short-info">
        <p className="book__title">
          <strong>Book name: </strong>
          {title.length > 24 ? title.substring(0, 24) + "..." : title}
        </p>
        <p className="book__author">
          <strong>Book author: </strong>
          {author}
        </p>
        <div className="book__price_view">
          <p className="book__price">${price}</p>
          <button className="book__button" onClick={navigateBook}>
            View
          </button>
        </div>
      </div>
    </article>
  );
}
