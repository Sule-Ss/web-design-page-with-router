import React from "react";
import htmlLogo from "../assets/logo_html.png";
import cssLogo from "../assets/logo_css.png";
import brushLogo from "../assets/logo_brush.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <section className="section1">
        <h1>Professional Web Design</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          expedita odio reprehenderit quia! Harum tempora voluptates aut?
          Blanditiis eligendi sunt enim dolorem aut? Perspiciatis, dolore!
        </p>
      </section>

      <section className="section2">
        <p>Subscribe To Our Newsletter</p>

        <form action="#">
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="Enter Email..."
          />
          <button>Subscribe</button>
        </form>
      </section>

      <section className="section3">
        <nav>
          <Link to="/html">
            <img src={htmlLogo} alt="logo_html" />
          </Link>
          <h4>HTML5 Markup</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores in
            rem, corporis expedita dolorum libero.
          </p>
        </nav>

        <nav>
          <Link to="/css">
            <img src={cssLogo} alt="logo_css" />
          </Link>
          <h4>CSS3 Styling</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores in
            rem, corporis expedita dolorum libero.
          </p>
        </nav>
        <nav>
          <Link to="/Logo">
            <img src={brushLogo} alt="logo_brush" />
          </Link>
          <h4>Graphic Design</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores in
            rem, corporis expedita dolorum libero.
          </p>
        </nav>
      </section>
    </main>
  );
};

export default Home;
