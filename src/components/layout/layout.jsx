import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "../footer/footer";
import "./styles.css";

export default function Layout(props) {
  return (
    <div>
      <Header
        setUser={props.setUser}
        setSelectedBooks={props.setSelectedBooks}
      />
      <Outlet />
      <Footer />
    </div>
  );
}
