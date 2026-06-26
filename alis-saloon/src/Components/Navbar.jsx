import { useState, useEffect } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-dark fixed-top ${
        scrolled ? "nav-scroll" : ""
      }`}
    >
      <div className="container">

        <a className="navbar-brand fw-bold">
          ALI'S SALOON
        </a>

        <button
          className="btn btn-gold"
        >
          Book
        </button>

      </div>
    </nav>
  );
}

export default Navbar;