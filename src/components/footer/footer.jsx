import "./styles.css";

export default function Footer() {
  return (
    <footer>
      <p className="footerText">
        Виконано в
        <a href="https://prometheus.org.ua/" target="_blank">
          {" "}
          Prometheus{" "}
        </a>
        © 2023
      </p>
    </footer>
  );
}
