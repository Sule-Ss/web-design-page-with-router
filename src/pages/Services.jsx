import React from "react";

const Services = () => {
  return (
    <main>
      <section className="section2 section2-services">
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

      <section className="section3-services">
        <nav className="nav1">
          <h4>Services</h4>

          <nav>
            <h4>Website Design</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              adipisci ut molestias magnam veniam nemo ipsa, itaque soluta.
              Cupiditate, voluptatem!
            </p>
            <p>Pricing :$1,000-$3,000</p>
          </nav>
          <nav>
            <h4>Website Maintenance</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Provident labore delectus rem debitis assumenda modi rerum sequi
              hic accusamus? Ab!
            </p>
            <p>Pricing: $250 per month</p>
          </nav>
          <nav>
            <h4>Website Hosting</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              tempora optio architecto sint incidunt hic quidem numquam! Quia,
              tempore perferendis.
            </p>
            <p>Pricing: $25 per month</p>
          </nav>
        </nav>
        <nav className="nav2">
          <form action="#">
            <h4>Get A Quate</h4>

            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              required
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
            />
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="2"
              placeholder="Message..."
              style={{resize:"none"}}
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </nav>
      </section>
    </main>
  );
};

export default Services;
