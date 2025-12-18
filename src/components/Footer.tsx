import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <Link to="/privacy">Privacy</Link> |{" "}
      <Link to="/terms">Terms</Link>
    </footer>
  );
}
