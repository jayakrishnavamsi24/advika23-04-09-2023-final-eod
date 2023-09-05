import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import "../Aboutadvika/index.css";
import "./index.css";

const EventDetailPage = (props) => {
  const allCardsList = [
    {
      cardNo: 1,
      title: "IntellectCon",
      description: "(Paper Presentation)",
      aboutEvent:
        "IntellectCon stands as a flagship paper presentation event that fosters intellectual exchange and scholarly discourse. This event, hosted by Adikavi Nannaya University College of Engineering, provides a platform for individuals to showcase their innovative research, critical insights, and groundbreaking ideas. With a commitment to academic excellence, IntellectCon brings together diverse minds to discuss and explore cutting-edge topics across various disciplines. Join us in this celebration of knowledge, inquiry, and the pursuit of intellectual advancement.",
    },
    {
      cardNo: 2,
      title: "Tech Postera",
      description: "(Poster Presentation)",
      aboutEvent:
        "Tech Postera, an engaging poster presentation event, offers participants a creative platform to showcase their technical insights. Hosted by AKNUCOE, this event fosters the exchange of innovative ideas and research findings. Tech Postera encourages you to visually articulate your work, sparking discussions and expanding horizons. Join us in celebrating the synergy of visual storytelling and technological exploration.",
    },
    {
      cardNo: 3,
      title: "Tech Brainia",
      description: "(Technical Quiz)",
      aboutEvent:
        "Tech Brainia stands as a premier technical quiz event that challenges the intellect of aspiring minds. Designed to ignite curiosity and showcase technical acumen, it spans a wide spectrum of subjects, from science and engineering to innovation and technology trends. Tech Brainia promises a dynamic platform for participants to test their knowledge, quick thinking, and problem-solving prowess. Step into the realm of innovation and competition, and let your intellect shine at Tech Brainia.",
    },
    {
      cardNo: 4,
      title: "ArguTech",
      description: "(Debate)",
      aboutEvent:
        "ArguTech, a captivating debate event, challenges participants to engage in thought-provoking discussions on pressing topics. Fueled by intellect and rhetoric, ArguTech encourages critical thinking and effective communication. Through structured arguments and respectful discourse, participants navigate the complexities of contemporary issues, fostering a platform for diverse perspectives to flourish. Join us for an enlightening experience that hones skills in persuasion and diplomacy at ArguTech.",
    },
    {
      cardNo: 5,
      title: "Picture Perfect",
      description: "(Short Film Making)",
      aboutEvent:
        "Picture Perfect is an engaging Short Film Making contest that invites aspiring filmmakers to showcase their storytelling prowess in a limited timeframe. Participants are challenged to craft compelling narratives, capture emotions, and deliver impactful messages within the confines of a short film format. This contest not only celebrates creativity and cinematic expression but also offers a platform for emerging talents to shine. Picture Perfect is an opportunity to distill captivating stories into concise visual experiences, showcasing the power of storytelling through the lens of a camera.",
    },
    {
      cardNo: 6,
      title: "IdeaNova",
      description: "(Innovative idea with hypothesis)",
      aboutEvent:
        "IdeaNova, a captivating event, unveils a platform where innovative ideas with practical hypotheses take center stage. Participants showcase their visionary concepts backed by tangible solutions, fostering a space where creativity and feasibility intertwine. Join us in exploring the forefront of imagination and realization at IdeaNova, where groundbreaking ideas find their wings to revolutionize the future.",
    },
    {
      cardNo: 7,
      title: "Innovex",
      description: "(Project Expo)",
      aboutEvent:
        "Innovex, the captivating Project Expo, showcases a myriad of ingenious ideas and groundbreaking solutions. Held annually, this event gathers aspiring minds from diverse fields to present their innovative projects and prototypes. Innovex serves as a testament to the spirit of creativity and problem-solving, offering a platform to connect, learn, and be inspired by the ingenuity on display. Join us in exploring a world of innovation at Innovex, where ideas come to life and the future is unveiled.",
    },
    {
      cardNo: 8,
      title: "Photography",
      description: "(Photography)",
      aboutEvent: "/",
    },
    {
      cardNo: 9,
      title: "Chess",
      description: "(Chess)",
      aboutEvent: "/",
    },
    {
      cardNo: 10,
      title: "Flashmob",
      description: "(Flashmob)",
      aboutEvent: "/",
    },
    {
      cardNo: 11,
      title: "Culturals",
      description: "(Culturals)",
      aboutEvent: "/",
    },
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

  let eventData;

  const { id } = props.match.params;

  switch (id) {
    case "1":
      eventData = allCardsList[0];
      break;
    case "2":
      eventData = allCardsList[1];
      break;
    case "3":
      eventData = allCardsList[2];
      break;
    case "4":
      eventData = allCardsList[3];
      break;
    case "5":
      eventData = allCardsList[4];
      break;
    case "6":
      eventData = allCardsList[5];
      break;
    case "7":
      eventData = allCardsList[6];
      break;
    case "8":
      eventData = allCardsList[7];
      break;
    case "9":
      eventData = allCardsList[8];
      break;
    case "10":
      eventData = allCardsList[9];
      break;
    default:
      eventData = allCardsList[10];
      break;
  }

  const getIntellectConData = () => (
    <>
      <li className="guideline-item">
        <p>The competition is open only to registered members of the event.</p>
      </li>
      <li className="guideline-item">
        <p>
          Each presentation team should consist of a{" "}
          <span className="guideline-hightlight" style={{ display: "inline" }}>
            maximum of two (2) members.
          </span>
        </p>
      </li>
      <li className="guideline-item">
        <p>
          The{" "}
          <span className="guideline-hightlight" style={{ display: "inline" }}>
            theme
          </span>{" "}
          of the presentation must revolve around{" "}
          <span className="guideline-hightlight" style={{ display: "inline" }}>
            "Blue Eyes Technology"
          </span>
        </p>
      </li>
      <li className="guideline-item">
        <p>
          Plagiarism is strictly prohibited. All content must be original and
          properly cited.
        </p>
      </li>
      <li className="guideline-item">
        <p>
          The presentation should not exceed a duration of{" "}
          <span className="guideline-hightlight" style={{ display: "inline" }}>
            7 minutes
          </span>
          .
        </p>
      </li>
      <li className="guideline-item">
        <p>
          Presentations must be in the PowerPoint{" "}
          <span className="guideline-hightlight" style={{ display: "inline" }}>
            (PPT/PPTX) format
          </span>
          .
        </p>
      </li>
      <li className="guideline-item">
        <p>
          The{" "}
          <span className="guideline-hightlight" style={{ display: "inline" }}>
            maximum
          </span>{" "}
          number of{" "}
          <span className="guideline-hightlight" style={{ display: "inline" }}>
            12
          </span>{" "}
          slides will be allowed for the presentation.
        </p>
      </li>
      <li className="guideline-item">
        <p>
          All presentations and interactions should be conducted in the English
          language.
        </p>
      </li>
      <li className="guideline-item">
        <p>
          Participants are required to bring their presentations on a pen drive
          for technical setup.
        </p>
      </li>
    </>
  );

  const getTechPosteraData = () => (
    <>
      <li className="guideline-item">
        <p>The competition is open only to registered members of the event.</p>
      </li>
      <li className="guideline-item">
        <p>
          Each team should consist of a{" "}
          <span className="guideline-hightlight" style={{ display: "inline" }}>
            maximum of two (2) members.
          </span>
        </p>
      </li>
      <li className="guideline-item">
        <p>
          The presentation's content must adhere to the{" "}
          <span className="guideline-hightlight" style={{ display: "inline" }}>
            theme
          </span>{" "}
          of{" "}
          <span className="guideline-hightlight" style={{ display: "inline" }}>
            "Embedded Web Technology"
          </span>
          .
        </p>
      </li>
      <li className="guideline-item">
        <p>Plagiarism of any kind will result in immediate disqualification.</p>
      </li>
      <li className="guideline-item">
        <p>
          The accepted format for presentations is{" "}
          <span className="guideline-hightlight" style={{ display: "inline" }}>
            A1 size
          </span>{" "}
          with dimensions of 594 x 841 mm (or) 59.5 x 84.1 cm.
        </p>
      </li>
      <li className="guideline-item">
        <p>All presentations must be in the English language.</p>
      </li>
    </>
  );

  const getTechBrainiaData = () => (
    <>
      <li className="guideline-item">
        <p>This event is exclusively for registered members of the event.</p>
      </li>
      <li className="guideline-item">
        <p>
          Only{" "}
          <span className="guideline-hightlight" style={{ display: "inline" }}>
            individual participation
          </span>{" "}
          is allowed.
        </p>
      </li>
      <li className="guideline-item">
        <p>
          The event encompasses themes of{" "}
          <span className="guideline-hightlight" style={{ display: "inline" }}>
            Basic Concepts of Maths & Physics, Computer Basics, General Aptitude
            & Reasoning
          </span>
          .
        </p>
      </li>
      <li className="guideline-item">
        <p>
          The event comprises two rounds.{" "}
          <span className="guideline-hightlight" style={{ display: "inline" }}>
            Rounds 1
          </span>{" "}
          is{" "}
          <span className="guideline-hightlight" style={{ display: "inline" }}>
            written test
          </span>{" "}
          with a duration of{" "}
          <span className="guideline-hightlight" style={{ display: "inline" }}>
            one hour
          </span>
          . Participants scoring above the cutoff will proceed to the next
          round.
        </p>
      </li>
      <li className="guideline-item">
        <p>
          <span className="guideline-hightlight" style={{ display: "inline" }}>
            Round 2
          </span>{" "}
          involves a{" "}
          <span className="guideline-hightlight" style={{ display: "inline" }}>
            Rapid-Fire round
          </span>
          .
        </p>
      </li>
      <li className="guideline-item">
        <p>
          <span className="guideline-hightlight" style={{ display: "inline" }}>
            No electronic gadgets
          </span>{" "}
          like calculators, smart phones etc. will be allowed at any stage of
          the event.
        </p>
      </li>
    </>
  );

  const getArguTechData = () => (
    <>
      <li className="guideline-item">
        <p>Only registered members are allowed to participate in the debate.</p>
      </li>
      <li className="guideline-item">
        <p>
          Each team must consist of{" "}
          <span className="guideline-hightlight" style={{ display: "inline" }}>
            three (3) members
          </span>
          .
        </p>
      </li>
      <li className="guideline-item">
        <p>
          The debate{" "}
          <span className="guideline-hightlight" style={{ display: "inline" }}>
            theme
          </span>{" "}
          is{" "}
          <span className="guideline-hightlight" style={{ display: "inline" }}>
            "Is technology making things worse or better?"
          </span>
        </p>
      </li>
      <li className="guideline-item">
        <p>The event comprises two rounds.</p>
      </li>
      <li className="guideline-item">
        <span className="guideline-hightlight" style={{ display: "inline" }}>
          Round 1: (Written Test)
        </span>
        <li className="sub-guideline-item">
          <p>
            Participants will be given{" "}
            <span
              className="guideline-hightlight"
              style={{ display: "inline" }}
            >
              one hour{" "}
            </span>
            to{" "}
            <span
              className="guideline-hightlight"
              style={{ display: "inline" }}
            >
              write their views on the topic
            </span>
            .
          </p>
        </li>
        <li className="sub-guideline-item">
          <p>
            The written test format includes:
            <li className="sub-sub-guideline-item">
              <p>
                Opening Statement for either the Pro or Con side (as chosen by
                the participant).
              </p>
            </li>
            <li className="sub-sub-guideline-item">
              <p>Ten (10) facts to support or oppose the chosen side.</p>
            </li>
            <li className="sub-sub-guideline-item">
              <p>Conclusion summarizing their views.</p>
            </li>
          </p>
        </li>
      </li>
      <li className="guideline-item">
        <p>
          The best submissions will be selected to advance to the second round.
        </p>
      </li>
      <li className="guideline-item">
        <p>
          <span className="guideline-hightlight" style={{ display: "inline" }}>
            Second Round:
          </span>
          <li className="guideline-item margin">
            <p>
              The second round will involve one team debating against another
              team.
            </p>
          </li>
        </p>
      </li>
      <li className="guideline-item">
        <p>
          <span className="guideline-hightlight" style={{ display: "inline" }}>
            Debate Format:
          </span>
          <ul>
            <li className="numbers-list">
              <p>Team Introductions (2 minutes)</p>
            </li>
            <li className="numbers-list">
              <p>Pro Speaker (up to three (3) minutes):</p>
              <ul>
                <li className="sub-sub-guideline-item">
                  <p>All three team members must participate.</p>
                </li>
              </ul>
            </li>
            <li className="numbers-list">
              <p>Con Speaker (up to three (3) minutes):</p>
              <ul>
                <li className="sub-sub-guideline-item">
                  <p>All three team members must participate.</p>
                </li>
              </ul>
            </li>
            <li className="numbers-list">
              <p>Pro Rebuttal (up to two (2) minutes)</p>
            </li>
            <li className="numbers-list">
              <p>Con Rebuttal (up to two (2) minutes)</p>
            </li>
          </ul>
        </p>
      </li>
      <li className="guideline-item">
        <p>The debate will be conducted in English only</p>
      </li>
    </>
  );

  const getPicturePerfectData = () => (
    <>
      <li className="guideline-item">
        <p>Participation is open exclusively to registered participants.</p>
      </li>
      <li className="guideline-item">
        <p>
          The{" "}
          <span className="guideline-hightlight" style={{ display: "inline" }}>
            theme
          </span>{" "}
          and content should demonstrate {""}
          <span className="guideline-hightlight" style={{ display: "inline" }}>
            ‘Interview’
          </span>
          .
        </p>
      </li>
      <li className="guideline-item">
        <p>
          Films must adhere to the specified{" "}
          <span className="guideline-hightlight" style={{ display: "inline" }}>
            maximum
          </span>{" "}
          duration i.e.,{" "}
          <span className="guideline-hightlight" style={{ display: "inline" }}>
            5 minutes, excluding opening and closing credits
          </span>
          .
        </p>
      </li>
      <li className="guideline-item">
        <p>
          The allowed{" "}
          <span className="guideline-hightlight" style={{ display: "inline" }}>
            genre
          </span>{" "}
          is{" "}
          <span className="guideline-hightlight" style={{ display: "inline" }}>
            melodrama
          </span>
          .
        </p>
      </li>
      <li className="guideline-item">
        <p>
          Films should be in any of the specified language (Telugu, Hindi and
          English) or include subtitles if needed.
        </p>
      </li>
      <li className="guideline-item">
        <p>
          Plagiarism is strictly prohibited; all content must be original or
          properly attributed.
        </p>
      </li>
      <li className="guideline-item">
        <p>
          Submit the film in the specified{" "}
          <span className="guideline-hightlight" style={{ display: "inline" }}>
            file format
          </span>{" "}
          (e.g.,{" "}
          <span className="guideline-hightlight" style={{ display: "inline" }}>
            MP4, MOV
          </span>{" "}
          ).
        </p>
      </li>
      <li className="guideline-item">
        <p>
          Video quality should be{" "}
          <span className="guideline-hightlight" style={{ display: "inline" }}>
            720p or 1080p
          </span>
          .
        </p>
      </li>
      <li className="guideline-item">
        <p>
          The submission{" "}
          <span className="guideline-hightlight" style={{ display: "inline" }}>
            deadline is at 12:00 PM September 13, 2023
          </span>
          .
        </p>
      </li>
      <li className="guideline-item">
        <p>
          Opening and closing credits with essential details (film title,
          director, cast, crew, music credits, etc.) must be included.
        </p>
      </li>
      <li className="guideline-item">
        <p>
          The organizers have the right to screen the films during the event or
          for promotional purposes.
        </p>
      </li>
    </>
  );

  const getIdeaNovaData = () => (
    <>
      <li className="guideline-item">
        <p>Participation is open only to registered members.</p>
      </li>
      <li className="guideline-item">
        <p>
          The presentation theme must involve an innovative idea supported by a
          well-defined working hypothesis.
        </p>
      </li>
      <li className="guideline-item">
        <p>
          Plagiarism is strictly prohibited. All content must be original or
          properly cited.
        </p>
      </li>
      <li className="guideline-item">
        <p>
          The presentation should not exceed a duration of{" "}
          <span className="guideline-hightlight" style={{ display: "inline" }}>
            7 minutes
          </span>
          .
        </p>
      </li>
      <li className="guideline-item">
        <p>
          Presentations must be in the PowerPoint{" "}
          <span className="guideline-hightlight" style={{ display: "inline" }}>
            (PPT/PPTX){" "}
          </span>
          format.
        </p>
      </li>
      <li className="guideline-item">
        <p>
          The{" "}
          <span className="guideline-hightlight" style={{ display: "inline" }}>
            maximum
          </span>{" "}
          number of{" "}
          <span className="guideline-hightlight" style={{ display: "inline" }}>
            12
          </span>{" "}
          slides will be allowed.
        </p>
      </li>
      <li className="guideline-item">
        <p>The presentation must be conducted in English.</p>
      </li>
      <li className="guideline-item">
        <p>
          Participants should bring their presentation on a pen drive for
          technical setup.
        </p>
      </li>
    </>
  );

  const getInnovexData = () => (
    <>
      <li className="guideline-item">
        <p>Participation is open only to registered members.</p>
      </li>
      <li className="guideline-item">
        <p>
          Create an attractive{" "}
          <span className="guideline-hightlight" style={{ display: "inline" }}>
            visual display (Poster)
          </span>{" "}
          for your project.
        </p>
      </li>
      <li className="guideline-item">
        <p>A maximum of 4 persons per project are allowed for participation.</p>
      </li>
      <li className="guideline-item">
        <p>
          Every project will be given stipulated time to explain to judges for
          successful evaluation.
        </p>
      </li>
      <li className="guideline-item">
        <p>
          Follow all provided guidelines to ensure a successful Expo experience.
        </p>
      </li>
      <li className="guideline-item">
        <p>
          <span className="guideline-hightlight" style={{ display: "inline" }}>
            Participants
          </span>{" "}
          must{" "}
          <span className="guideline-hightlight" style={{ display: "inline" }}>
            bring their own equipment
          </span>{" "}
          for the project display, extension cords etc and ensure its
          compatibility, reliability, and safety.
        </p>
      </li>
      <li className="guideline-item">
        <p>
          Participants must label, secure, set up, and remove their equipment
          within the given time and space.
        </p>
      </li>
      <li className="guideline-item">
        <p>
          <span className="guideline-hightlight" style={{ display: "inline" }}>
            TIMINGS:
          </span>{" "}
          The project to be displayed on
          <span className="guideline-hightlight" style={{ display: "inline" }}>
            {" "}
            14.09.2023 @2:30PM
          </span>
        </p>
        <li className="guideline-item">
          <p>
            <span
              className="guideline-hightlight"
              style={{ display: "inline" }}
            >
              Judge's evaluation
            </span>{" "}
            and presentation to be conducted on
            <span
              className="guideline-hightlight"
              style={{ display: "inline" }}
            >
              {" "}
              15.09.2023 @10:00am
            </span>
          </p>
        </li>
      </li>
    </>
  );

  const getGuidelines = () => {
    switch (id) {
      case "1":
        return getIntellectConData();
      case "2":
        return getTechPosteraData();
      case "3":
        return getTechBrainiaData();
      case "4":
        return getArguTechData();
      case "5":
        return getPicturePerfectData();
      case "6":
        return getIdeaNovaData();
      case "7":
        return getInnovexData();
    }
  };

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
              <ion-icon name="calendar-outline" aria-hidden="true"></ion-icon>
            </div>

            <span className="span">September 14 & 15, 2023</span>
          </div>

          {/* <a href="tel:+11234567890" className="topbar-item link">
            <div className="icon">
              <ion-icon name="call-outline" aria-hidden="true"></ion-icon>
            </div>

            <span className="span">+1 123 456 7890</span>
          </a>

          <div className="separator"></div> */}

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
              src="https://res.cloudinary.com/die4jnqbu/image/upload/v1693833635/logo_ud5oqm.jpg"
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
                src="https://res.cloudinary.com/die4jnqbu/image/upload/v1693833635/logo_ud5oqm.jpg"
                width="160"
                height="50"
                alt="Grilli - Home"
              />
            </a>

            <ul className="navbar-list">
              <li className="navbar-item">
                <a href="/#home" className="navbar-link hover-underline active">
                  <div className="separator"></div>

                  <span className="span">Home</span>
                </a>
              </li>

              <li className="navbar-item">
                <a href="/#about" className="navbar-link hover-underline">
                  <div className="separator"></div>

                  <span className="span">About Us</span>
                </a>
              </li>

              <li className="navbar-item">
                <a href="/#about-fest" className="navbar-link hover-underline">
                  <div className="separator"></div>

                  <span className="span">About Fest</span>
                </a>
              </li>

              <li className="navbar-item">
                <a href="/#events" className="navbar-link hover-underline">
                  <div className="separator"></div>

                  <span className="span">Events</span>
                </a>
              </li>

              <li className="navbar-item">
                <a href="/#contact" className="navbar-link hover-underline">
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
            </div>
          </nav>

          <a
            href="https://forms.gle/CC4CVUb3N46Uxe9T6"
            target="_blank"
            className="btn btn-secondary"
          >
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
                  className="about-advika-title headline-1 event-detail-title"
                  style={{ color: "#dcccb5" }}
                >
                  {eventData.title}
                </h1>
                <p className="event-casual-name">{eventData.description}</p>

                <p className="about-advika-description">
                  {eventData.aboutEvent}
                </p>

                <h1
                  className="about-advika-title headline-1"
                  style={{ marginTop: "30px", color: "#dcccb5" }}
                >
                  Guidelines📝
                </h1>

                <div className="guidelines-outer-container">
                  <ul className="guidelines-container">{getGuidelines()}</ul>
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
            href="https://www.aknu.edu.in/UCE/cse.php"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Department of Computer Science and Engineering
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

export default EventDetailPage;
