import { Link } from "react-router-dom";

export function Logo() {
  return (
    <Link className="logo" to="/" aria-label="Luxe Realty home">
      <span className="logo__mark" />
      LUXE REALTY
    </Link>
  );
}
