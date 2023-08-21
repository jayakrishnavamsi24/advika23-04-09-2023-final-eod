import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import "../Aboutadvika/index.css";
import "./index.css";

const EventsPage = (props) => {
  const allCardsList = [
    { cardNo: 1, title: "IntellectCon", description: "(Paper Presentation)" },
    { cardNo: 2, title: "Tech Postera", description: "(Poster Presentation)" },
    { cardNo: 3, title: "Tech Brainia", description: "(Technical Quiz)" },
    { cardNo: 4, title: "ArguTech", description: "(Debate)" },
    { cardNo: 5, title: "Picture Perfect", description: "(Short Film Making)" },
    {
      cardNo: 6,
      title: "IdeaNova",
      description: "(Innovative idea with hypothesis)",
    },
    { cardNo: 7, title: "Innovex", description: "(Project Expo)" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // add event listener on multiple elements
    const addEventOnElements = function (elements, eventType, callback) {
      for (let i = 0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(eventType, callback);
      }
    };

    // NAVBAR
    const navbar = document.querySelector("[data-navbar]");
    const navTogglers = document.querySelectorAll("[data-nav-toggler]");
    const overlay = document.querySelector("[data-overlay]");

    const toggleNavbar = function () {
      document.body.classList.toggle("nav-active");
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    };

    addEventOnElements(navTogglers, "click", toggleNavbar);
  });

  useEffect(() => {
    // HEADER & BACK TOP BTN
    const header = document.querySelector("[data-header]");
    const backTopBtn = document.querySelector("[data-back-top-btn]");

    let lastScrollPos = 0;

    const hideHeader = function () {
      const isScrollBottom = lastScrollPos < window.scrollY;
      if (isScrollBottom) {
        header.classList.add("hide");
      } else {
        header.classList.remove("hide");
      }

      lastScrollPos = window.scrollY;
    };

    window.addEventListener("scroll", function () {
      if (window.scrollY >= 50) {
        header.classList.add("active");
        backTopBtn.classList.add("active");
        hideHeader();
      } else {
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
      }
    });

    // PARALLAX EFFECT
    const parallaxItems = document.querySelectorAll("[data-parallax-item]");

    let x, y;

    window.addEventListener("mousemove", function (event) {
      x = (event.clientX / window.innerWidth) * 10 - 5;
      y = (event.clientY / window.innerHeight) * 10 - 5;

      // reverse the number eg. 20 -> -20, -5 -> 5
      x = x - x * 2;
      y = y - y * 2;

      for (let i = 0, len = parallaxItems.length; i < len; i++) {
        x = x * Number(parallaxItems[i].dataset.parallaxSpeed);
        y = y * Number(parallaxItems[i].dataset.parallaxSpeed);
        parallaxItems[i].style.transform = `translate3d(${x}px, ${y}px, 0px)`;
      }
    });
  }, []);

  let title;
  let visibleEvents = [];

  const { id } = props.match.params;
  switch (id) {
    case "technical":
      title = "Technical Events";
      visibleEvents = [allCardsList[0], allCardsList[1], allCardsList[2]];
      break;
    case "non-technical":
      title = "Non-Tech Events";
      visibleEvents = [allCardsList[3], allCardsList[4]];
      break;
    default:
      title = "Extra-curricular Events";
      visibleEvents = [allCardsList[5], allCardsList[6]];
      break;
  }

  const getCardItem = (cardNo, title, description) => (
    <Link
      to={`/eventdetails/${cardNo}`}
      className={`event-card event-card-${cardNo}`}
    >
      <div className="glass-container">
        <h1 className="event-name">{title}</h1>
        <p className="event-formal-name">{description}</p>
      </div>
    </Link>
  );

  return (
    <div className="about-advika-page-container">
      <div className="preload loaded" data-preaload>
        <div className="circle"></div>
        <p className="text">Advika 2K23</p>
      </div>
      {/* <!-- 
      - #TOP BAR
    --> */}

      <div className="topbar">
        <div className="container">
          <address className="topbar-item">
            <div className="icon">
              <ion-icon name="location-outline" aria-hidden="true"></ion-icon>
            </div>

            <span className="span"> Adikavi Nannaya University </span>
          </address>

          <div className="separator"></div>

          <div className="topbar-item item-2">
            <div className="icon">
              <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
            </div>

            <span className="span">September 14 & 15, 2023</span>
          </div>

          <a href="tel:+11234567890" className="topbar-item link">
            <div className="icon">
              <ion-icon name="call-outline" aria-hidden="true"></ion-icon>
            </div>

            <span className="span">+1 123 456 7890</span>
          </a>

          <div className="separator"></div>

          <a href="mailto:booking@restaurant.com" className="topbar-item link">
            <div className="icon">
              <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>
            </div>

            <span className="span">advika23@gmail.com</span>
          </a>
        </div>
      </div>

      {/* <!-- 
      - #HEADER
    --> */}

      <header className="header" data-header>
        <div className="container">
          <a href="/" className="logo">
            <img
              src="https://res.cloudinary.com/dxq3pj438/image/upload/v1691839571/logo-1_jbqbj0.png"
              width="160"
              height="50"
              alt="Grilli - Home"
            />
          </a>

          <nav className="navbar" data-navbar>
            <button
              className="close-btn"
              aria-label="close menu"
              data-nav-toggler
            >
              <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
            </button>

            <a href="/" className="logo">
              <img
                src="https://res.cloudinary.com/dxq3pj438/image/upload/v1691839571/logo-1_jbqbj0.png"
                width="160"
                height="50"
                alt="Grilli - Home"
              />
            </a>

            <ul className="navbar-list">
              <li className="navbar-item">
                <a href="#home" className="navbar-link hover-underline active">
                  <div className="separator"></div>

                  <span className="span">Home</span>
                </a>
              </li>

              <li className="navbar-item">
                <a href="#events" className="navbar-link hover-underline">
                  <div className="separator"></div>

                  <span className="span">Events</span>
                </a>
              </li>

              <li className="navbar-item">
                <a href="#about" className="navbar-link hover-underline">
                  <div className="separator"></div>

                  <span className="span">About Us</span>
                </a>
              </li>

              <li className="navbar-item">
                <a href="#about-fest" className="navbar-link hover-underline">
                  <div className="separator"></div>

                  <span className="span">About Fest</span>
                </a>
              </li>

              <li className="navbar-item">
                <a href="#contact" className="navbar-link hover-underline">
                  <div className="separator"></div>

                  <span className="span">Contact</span>
                </a>
              </li>
            </ul>

            <div className="text-center">
              <p className="headline-1 navbar-title">Visit Us</p>

              <address className="body-4">
                Adikavi Nannaya University, Rajahmundry
              </address>

              <p className="body-4 navbar-text">
                Starts from September 14 10:00 AM onwards.
              </p>

              <a
                href="mailto:booking@grilli.com"
                className="body-4 sidebar-link"
              >
                advika@gmail.com
              </a>

              <div className="separator"></div>

              <p className="contact-label">Register</p>

              <a
                href="tel:+88123123456"
                className="body-1 contact-number hover-underline"
              >
                +1 1234567890
              </a>
            </div>
          </nav>

          <a href="/" className="btn btn-secondary">
            <span className="text text-1">Register Here</span>

            <span className="text text-2" aria-hidden="true">
              Register Here
            </span>
          </a>

          <button
            className="nav-open-btn"
            aria-label="open menu"
            data-nav-toggler
          >
            <span className="line line-1"></span>
            <span className="line line-2"></span>
            <span className="line line-3"></span>
          </button>

          <div className="overlay" data-overlay></div>
        </div>
      </header>

      <main>
        <article>
          {/* <!-- 
          - #ABOUT
        --> */}

          <section
            className="section about text-center"
            aria-labelledby="about-label"
          >
            <div className="about-advika-data-out-cont">
              <div className="about-advika-data-container">
                <h1
                  className="about-advika-title headline-1 event-title"
                  style={{ color: "#dcccb5" }}
                >
                  {title}
                </h1>

                <div className="event-cards-container">
                  {visibleEvents.map((eachCardItem) =>
                    getCardItem(
                      eachCardItem.cardNo,
                      eachCardItem.title,
                      eachCardItem.description,
                    ),
                  )}
                </div>
              </div>
            </div>
          </section>
        </article>
      </main>

      {/* <!-- 
      - #FOOTER
    --> */}

      <footer
        style={{
          backgroundImage: `linear-gradient(
      to top,
      rgba(0, 0, 0, 0.8) 50%,
      rgba(0, 0, 0, 0.8) 50%
    ), url("https://res.cloudinary.com/dxq3pj438/image/upload/v1691836282/designecologist-5mj5jLhYWpY-unsplash_lbnd1o.jpg")`,
        }}
        className="about-advika-footer"
      >
        <p className="copyright">
          &copy; 2023 Advika. All Rights Reserved | Crafted by{" "}
          <a
            href="https://github.com/deepakramu7"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Deepak
          </a>
        </p>
      </footer>

      {/* <!-- 
      - #BACK TO TOP
    --> */}

      <a
        href="#top"
        className="back-top-btn active"
        aria-label="back to top"
        data-back-top-btn
      >
        <ion-icon name="chevron-up" aria-hidden="true"></ion-icon>
      </a>
      <Helmet>
        {/* Ionicons ES Module */}
        <script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        ></script>
        {/* Ionicons Nomodule */}
        <script
          nomodule
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
        ></script>
      </Helmet>
    </div>
  );
};

export default EventsPage;
