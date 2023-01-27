import "./Footer.css";
import { contactUs } from "../static/data";
import { wantEvenMore } from "../static/data";

const Footer = () => {
  function printItems(list) {
    return list.map((element, ind) => {
      return <li key={ind}>{element}</li>;
    });
  }
  return (
    <footer>
      <ul>{printItems(contactUs)}</ul>
      <ul>{printItems(wantEvenMore)}</ul>
    </footer>
  );
};

export default Footer;
