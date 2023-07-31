import "./styles.css";

export default function PageNotFound() {
  return (
    <div className="pageNotFound">
      {/* https://www.w3schools.com/charsets/ref_emoji_smileys.asp */}
      <p className="pageNotFound__text">
        Oops, something went wrong. 404 error &#128533;
      </p>
    </div>
  );
}
