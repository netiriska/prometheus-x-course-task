import "./styles.css";

export default function Footer() {
  return (
    <footer>
      <p className="footerText">
        Виконано в
        <a
          className="footerText__link"
          href="https://prometheus.org.ua/"
          target="_blank"
        >
          {" "}
          Prometheus{" "}
        </a>
        © 2023
      </p>
    </footer>
  );
}
