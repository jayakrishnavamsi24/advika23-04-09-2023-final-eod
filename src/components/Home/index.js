import React, { useEffect, useState } from "react";
import "./index.css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { saveAs } from 'file-saver';
import Slider from 'react-slick';
import EventTimer from '../EventTimer'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HomeContent = () => {
  const [currentSlidePos, setCurrentSlidePos] = useState(0);

  useEffect(() => {
    //pre loader
    const preloader = document.querySelector("[data-preaload]");
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
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

  useEffect(() => {
    //Hero Slider
    const heroSliderItems = document.querySelectorAll(
      "[data-hero-slider-item]",
    );
    const heroSliderPrevBtn = document.querySelector("[data-prev-btn]");
    const heroSliderNextBtn = document.querySelector("[data-next-btn]");

    const updateSliderPos = () => {
      for (let i = 0; i < heroSliderItems.length; i++) {
        if (i === currentSlidePos) {
          heroSliderItems[i].classList.add("active");
        } else {
          heroSliderItems[i].classList.remove("active");
        }
      }
    };

    const slideNext = () => {
      if (currentSlidePos >= heroSliderItems.length - 1) {
        setCurrentSlidePos(0);
      } else {
        setCurrentSlidePos(currentSlidePos + 1);
      }
      updateSliderPos();
    };

    heroSliderNextBtn.addEventListener("click", slideNext);

    const slidePrev = () => {
      if (currentSlidePos <= 0) {
        setCurrentSlidePos(heroSliderItems.length - 1);
      } else {
        setCurrentSlidePos(currentSlidePos - 1);
      }
      updateSliderPos();
    };

    heroSliderPrevBtn.addEventListener("click", slidePrev);

    const autoSlideInterval = setInterval(() => {
      slideNext();
    }, 7000);

    return () => {
      clearInterval(autoSlideInterval);
    };
  }, [currentSlidePos]);

  const downloadBrochure = (event) => {
    event.preventDefault();
    const pdfFileName = 'advika-brochure-2k23.pdf';
    const pdfUrl = process.env.PUBLIC_URL + '/' + pdfFileName;
    saveAs(pdfUrl, pdfFileName);
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,        
    autoplaySpeed: 3000,  
  };

  return (
    <div className="home-page-container">
      <div className="preload" data-preaload>
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
            <ion-icon name="calendar-outline" aria-hidden="true"></ion-icon>
            </div>

            <span className="span">September 14 & 15, 2023</span>
          </div>

          {/* <a href="tel:+11234567890" className="topbar-item link">
            <div className="icon">
              <ion-icon name="call-outline" aria-hidden="true"></ion-icon>
            </div>

            <span className="span">+1 123 456 7890</span>
          </a> */}

          {/* <div className="separator"></div> */}

          <a href="mailto:advika2k23@aknu.edu.in" className="topbar-item link">
            <div className="icon">
              <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>
            </div>

            <span className="span">advika2k23@aknu.edu.in</span>
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
              src="https://res.cloudinary.com/jayakrishnavamsi/image/upload/v1693133777/Advika_Logo-cropped_ptohco.png"
              className="advika-logo-img"
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
                src="https://res.cloudinary.com/jayakrishnavamsi/image/upload/v1693133540/Advika_Logo_fade9x.png"
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
                <a href="#events" className="navbar-link hover-underline">
                  <div className="separator"></div>

                  <span className="span">Events</span>
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
        - #HERO
      --> */}

          <section className="hero text-center" aria-label="home" id="home">
            <ul className="hero-slider" data-hero-slider>
              <li className="slider-item active" data-hero-slider-item>
                <div className="slider-bg">
                  {/* <div className="hero-overlay"></div> */}
                  <img
                    src="https://res.cloudinary.com/dxq3pj438/image/upload/v1691831944/vishnu-r-nair-m1WZS5ye404-unsplash_k98ww1.jpg"
                    width="1880"
                    height="950"
                    alt=""
                    className="img-cover"
                  />
                </div>

                <h1 className="display-1 hero-title slider-reveal">
                  Advika'23
                </h1>

                <p className="body-2 hero-text slider-reveal">
                  Where curiosity meets innovation
                </p>

                <a onClick={downloadBrochure} href="#" className="btn btn-primary slider-reveal">
                  <span className="text text-1">Download Brochure</span>

                  <span className="text text-2" aria-hidden="true">
                    Download Brochure
                  </span>
                </a>
              </li>

              <li className="slider-item" data-hero-slider-item>
                <div className="slider-bg">
                  {/* <div className="hero-overlay"></div> */}
                  <img
                    src="https://res.cloudinary.com/dxq3pj438/image/upload/v1691830067/ojgavfnetoczsiytozxv.jpg"
                    width="1880"
                    height="950"
                    alt=""
                    className="img-cover"
                  />
                </div>

                <h1 className="display-1 hero-title slider-reveal">
                  Advika'23
                </h1>

                <p className="body-2 hero-text slider-reveal">
                  The journey of a thousand miles begins with a single click
                </p>

                <a onClick={downloadBrochure} href="#" className="btn btn-primary slider-reveal">
                  <span className="text text-1">Download Brochure</span>

                  <span className="text text-2" aria-hidden="true">
                    Download Brochure
                  </span>
                </a>
              </li>

              <li className="slider-item" data-hero-slider-item>
                <div className="slider-bg">
                  {/* <div className="hero-overlay"></div> */}
                  <img
                    src="https://res.cloudinary.com/dxq3pj438/image/upload/v1691832069/nainoa-shizuru-NcdG9mK3PBY-unsplash_tdwym0.jpg"
                    width="1880"
                    height="950"
                    alt=""
                    className="img-cover"
                  />
                </div>

                <h1 className="display-1 hero-title slider-reveal">
                  Advika'23
                </h1>

                <p className="body-2 hero-text slider-reveal">
                  Education is not the filling of a pail, but the lighting of a fire
                </p>

                <a onClick={downloadBrochure} href="#" className="btn btn-primary slider-reveal">
                  <span className="text text-1" style={{ color: "white" }}>
                    Download Brochure
                  </span>

                  <span className="text text-2" aria-hidden="true">
                    Download Brochure
                  </span>
                </a>
              </li>
            </ul>

            <button
              className="slider-btn prev"
              aria-label="slide to previous"
              data-prev-btn
            >
              <ion-icon name="chevron-back"></ion-icon>
            </button>

            <button
              className="slider-btn next"
              aria-label="slide to next"
              data-next-btn
            >
              <ion-icon name="chevron-forward"></ion-icon>
            </button>

            <a href="/" className="hero-btn has-after">
              <img
                src="https://res.cloudinary.com/jayakrishnavamsi/image/upload/v1692448346/hero-icon_xlnstj.png"
                width="48"
                height="48"
                alt="booking icon"
              />

              <span className="label-2 text-center span">Register Now</span>
            </a>
          </section>

          {/* <!-- 
        - #ABOUT
      --> */}

          <section
          className="about-aknu-section text-center"
          aria-labelledby="about-label"
            id="about"
          >
            <div className="about-aknu">
                <p className="label-2 section-subtitle" id="about-label">
                  About Us
                </p>

                <h2 className="headline-1 section-title">
                  Adikavi Nannaya University
                </h2>

                <p className="section-text small-screen-display-none">
                  Established in 2006, Adikavi Nannaya University caters to East
                  & West Godavari districts of Andhra Pradesh. Committed to
                  holistic education, it blends cultural values with modernity.
                  With four main colleges, extension campuses, and affiliations
                  with nearly 450 colleges, the university focuses on academic
                  excellence, innovative research, and industry integration.
                </p>

                <a href="https://aknu.edu.in/" target="_blank" rel="noopener noreferrer" className="btn btn-primary pding small-screen-display-none">
                  <span className="text text-1">Visit Site</span>

                  <span className="text text-2" aria-hidden="true">
                  Visit Site
                  </span>
                </a>
                
            </div>
            <div className="carousel-college">
              <Slider {...settings}>
                <div>
                  <img className="carousel-img" src="https://res.cloudinary.com/jayakrishnavamsi/image/upload/v1693135296/University_Gate_fiedri.png" alt="Slide 1" />
                </div>
                <div>
                  <img className="carousel-img" src="https://res.cloudinary.com/jayakrishnavamsi/image/upload/v1693134638/AKNU_Library_jjqdiq.jpg" alt="Slide 2" />
                </div>
                <div>
                  <img className="carousel-img" src="https://res.cloudinary.com/jayakrishnavamsi/image/upload/v1693134641/AKNU_N-Block_jrh4yg.jpg" alt="Slide 3" />
                </div>
                <div>
                  <img className="carousel-img" src="https://res.cloudinary.com/jayakrishnavamsi/image/upload/v1693134638/AKNU_Convention_Center_wcuz3q.jpg" alt="Slide 4" />
                </div>
              </Slider>
            </div>
            <div className="about-aknu big-screen-display-none">
                <p className="section-text">
                  Established in 2006, Adikavi Nannaya University caters to East
                  & West Godavari districts of Andhra Pradesh. Committed to
                  holistic education, it blends cultural values with modernity.
                  With four main colleges, extension campuses, and affiliations
                  with nearly 450 colleges, the university focuses on academic
                  excellence, innovative research, and industry integration.
                </p>

                <a href="https://aknu.edu.in/" target="_blank" rel="noopener noreferrer" className="btn btn-primary pding">
                  <span className="text text-1">Visit Site</span>

                  <span className="text text-2" aria-hidden="true">
                    Visit Site
                  </span>
                </a>
            </div>
          </section>

          {/* <!-- 
        - #SPECIAL DISH
      --> */}

          <section
            className="special-dish text-center"
            aria-labelledby="dish-label"
            id="about-fest"
          >
            <div className="special-dish-banner">
              <img
                src="https://res.cloudinary.com/jayakrishnavamsi/image/upload/v1693499882/pablo-heimplatz-ZODcBkEohk8-unsplash_rnf1ul.jpg"
                width="940"
                height="900"
                loading="lazy"
                alt="special dish"
                className="img-cover"
              />
            </div>

            <div className="special-dish-content bg-black-10">
              <div className="container">
                <img
                  src="https://res.cloudinary.com/dxq3pj438/image/upload/v1691836053/badge-1_mpxmvi.png"
                  width="28"
                  height="41"
                  loading="lazy"
                  alt="badge"
                  className="abs-img"
                />

                <p className="section-subtitle label-2">About Fest</p>

                <h2 className="headline-1 section-title">Advika</h2>

                <p className="section-text">
                      ADVIKA, an annual technical fest held by Adikavi Nannaya University, honors the legacy of Bharat
                  Ratna Shri Mokshagundam Visweswarayya on Engineer's Day. It serves as a platform for innovation,
                  collaboration, and knowledge exchange. With its diverse events and workshops, ADVIKA inspires
                  young minds to explore the realms of technology and engineering. Join us in celebrating the spirit of
                  ingenuity and progress at this remarkable event.
                </p>

                {/* <Link to="/about-advika" className="btn btn-primary">
                  <span className="text text-1">View More</span>

                  <span className="text text-2" aria-hidden="true">
                    View more
                  </span>
                </Link> */}
              </div>
            </div>
          </section>

          {/* <!-- 
        - #SERVICE
      --> */}

          <section
            className="section service bg-black-10 text-center"
            aria-label="service"
            id="events"
          >
            <div className="container margin-top-events-section">
              <p className="section-subtitle label-2">Advika 2K23</p>

              <h2 className="events-underline headline-1 section-title">
                Events
              </h2>

              {/* <p className="section-text">
                Dive into a world of excitement with our diverse event
                categories: Technical Prowess, Creative Expression, and Beyond
                Academics. Unleash your talents, engage your curiosity, and
                experience the thrill of innovation.
              </p> */}

              <ul className="grid-listt events-container-all">
                <li>
                  <Link to="/eventslist/technical">
                    <div className="service-card">
                      <a href="/" className="has-before hover:shine">
                        <figure
                          className="card-banner img-holder"
                          style={{ width: "285px", height: "336px" }}
                        >
                          <img
                            src="https://res.cloudinary.com/dxq3pj438/image/upload/v1691833580/dose-media-DiTiYQx0mh4-unsplash_exztqc.jpg"
                            width="285"
                            height="336"
                            loading="lazy"
                            alt="Technical"
                            className="img-cover"
                          />
                        </figure>
                      </a>

                      <div className="card-content">
                        <h3 className="title-4 card-title">
                          <a href="/">Technical</a>
                        </h3>

                        <a
                          href="/"
                          className="btn-text hover-underline label-2"
                        >
                          View Events
                        </a>
                      </div>
                    </div>
                  </Link>
                </li>

                <li>
                  <Link to="/eventslist/non-technical">
                    <div className="service-card">
                      <a href="/" className="has-before hover:shine">
                        <figure
                          className="card-banner img-holder"
                          style={{ width: "285px", height: "336px" }}
                        >
                          <img
                            src="https://res.cloudinary.com/dxq3pj438/image/upload/v1691833583/sigmund-vPtbBNlKRBw-unsplash_x05fed.jpg"
                            width="285"
                            height="336"
                            loading="lazy"
                            alt="Appetizers"
                            className="img-cover"
                          />
                        </figure>
                      </a>

                      <div className="card-content">
                        <h3 className="title-4 card-title">
                          <a href="/">Non-Tech</a>
                        </h3>

                        <a
                          href="/"
                          className="btn-text hover-underline label-2"
                        >
                          View Events
                        </a>
                      </div>
                    </div>
                  </Link>
                </li>

                <li>
                  <Link to="/eventslist/extra-curricular">
                    <div className="service-card">
                      <a href="/" className="has-before hover:shine">
                        <figure
                          className="card-banner img-holder"
                          style={{ width: "285px", height: "336px" }}
                        >
                          <img
                            src="https://res.cloudinary.com/dxq3pj438/image/upload/v1691833650/anthony-delanoix-hzgs56Ze49s-unsplash_qddd9w.jpg"
                            width="285"
                            height="336"
                            loading="lazy"
                            alt="Drinks"
                            className="img-cover"
                          />
                        </figure>
                      </a>

                      <div className="card-content">
                        <h3 className="title-4 card-title">
                          <a href="/">Extra-curriculars</a>
                        </h3>

                        <a
                          href="/"
                          className="btn-text hover-underline label-2"
                        >
                          View Events
                        </a>
                      </div>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </section>

          {/* <!-- 
        - #MENU
      --> */}
        </article>
      </main>

      {/* <!-- 
    - #FOOTER
  --> */}

<footer
        id="contact"
        className="footer section has-bg-image text-center"
        style={{
          backgroundImage: `linear-gradient(
        to top,
        rgba(0, 0, 0, 0.8) 50%,
        rgba(0, 0, 0, 0.8) 50%
      ), url("https://res.cloudinary.com/dxq3pj438/image/upload/v1691836282/designecologist-5mj5jLhYWpY-unsplash_lbnd1o.jpg")`,
        }}
      >
        <div className="container">
          <div className="footer-top grid-list">
            <div className="footer-brand has-before has-after">
              <a href="/" className="logo">
                <img
                  src="https://res.cloudinary.com/jayakrishnavamsi/image/upload/v1693133777/Advika_Logo-cropped_ptohco.png"
                  width="80"
                  height="50"
                  loading="lazy"
                  alt="grilli home"
                />
              </a>

              <address className="body-4">Advika 2K23</address>

              <a
                href="mailto:advika2k23@aknu.edu.in"
                className="body-4 contact-link"
              >
                advika2k23@aknu.edu.in
              </a>

              {/* <a href="tel:+88123123456" className="body-4 contact-link">
                Contact support : +1234567890
              </a> */}

              {/* <!-- <p className="body-4">
                        We heartly welcoming you
                    </p> --> */}

              <div className="wrapper">
                <div className="separator"></div>
                <div className="separator"></div>
                <div className="separator"></div>
              </div>

              <p className="title-1 margin-btm-register">Register to participate</p>

              <p className="label-1">
                Come and make this event{" "}
                <span className="span">memorable.</span>
              </p>
            </div>

            <ul className="footer-list">
              <li>
                <a href="#home" className="label-2 footer-link hover-underline">
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#events"
                  className="label-2 footer-link hover-underline"
                >
                  Events
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="label-2 footer-link hover-underline"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#about-fest"
                  className="label-2 footer-link hover-underline"
                >
                  About Advika
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="label-2 footer-link hover-underline"
                >
                  Contact Us
                </a>
              </li>
            </ul>

            <ul className="footer-list">
              <li>
                <a
                  href="/"
                  className="label-2 footer-link hover-underline"
                  target="_blank"
                >
                  Facebook
                </a>
              </li>

              <li>
                <a
                  href="https://instagram.com/advika2k23?igshid=NTc4MTIwNjQ2YQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label-2 footer-link hover-underline"
                >
                  Instagram
                </a>
              </li>

              <li>
                <a
                  href="/"
                  className="label-2 footer-link hover-underline"
                  target="_blank"
                >
                  Twitter
                </a>
              </li>

              <li>
                <a
                  href="/"
                  className="label-2 footer-link hover-underline"
                  target="_blank"
                >
                  Youtube
                </a>
              </li>

              <li>
                <a
                  href="/"
                  className="label-2 footer-link hover-underline"
                  target="_blank"
                >
                  Google Map
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-bottom">
            <p className="copyright">
              &copy; 2023 Advika. All Rights Reserved | Crafted by{" "}
              <a
                href="https://www.aknu.edu.in/UCE/cse.php"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                Department of Computer Science and Engineering
              </a>
            </p>
          </div>
        </div>
      </footer>

      {<EventTimer/>}

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

export default HomeContent;
