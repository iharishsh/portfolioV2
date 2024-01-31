import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTransition, animated } from "react-spring";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  Autoplay,
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/modules";

import "./Projects.css";
import {
  ArrowCircleLeft,
  ArrowCircleRight,
  GithubLogo,
  LinkBreak,
  XCircle,
} from "@phosphor-icons/react";
import projectsData from "./projectsData.js";

const Projects = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const swiperRef = useRef(null);
  const [selectedSlide, setSelectedSlide] = useState(null);
  const [selectedSlideImgs, setSelectedSlideImgs] = useState([]);
  const [selectedSlideTitle, setSelectedSlideTitle] = useState(null);
  const [selectedSlideDesc, setSelectedSlideDesc] = useState(null);
  const [selectedSlideTech, setSelectedSlideTech] = useState([]);
  const [selectedSlideGithub, setSelectedSlideGithub] = useState(null);
  const [selectedSlideSite, setSelectedSlideSite] = useState(null);
  const [selectedSlideFeature, setSelectedSlideFeature] = useState([]);
  const [selectedSlideGoalsAchieved, setSelectedSlideGoalsAchieved] = useState([]);
  const [selectedSlideFuturePlans, setSelectedSlideFuturePlans] = useState([]);
  const [selectedSlideStatus, setSelectedSlideStatus] = useState([]);

  const transitions = useTransition(modalVisible, {
    from: { transform: "translateY(100%)"},
    enter: { transform: "translateY(0%)"},
    leave: { transform: "translateY(100%)"},
    onRest: () => {
      if (!modalVisible) {
        // Clean up the state after the modal has completely closed
        setSelectedSlide(null);
      }
    },
  });

  const openModal = (slide) => {
    setSelectedSlide(slide.cover);
    setSelectedSlideImgs(slide.imgs);
    setSelectedSlideTitle(slide.title);
    setSelectedSlideDesc(slide.description);
    setSelectedSlideTech(slide.tech);
    setSelectedSlideGithub(slide.githubLink);
    setSelectedSlideSite(slide.siteLink);
    setSelectedSlideFeature(slide.projectOverview.keyFeatures);
    setSelectedSlideGoalsAchieved(slide.projectOverview.goalsAchieved);
    setSelectedSlideFuturePlans(slide.projectOverview.futurePlans);
    setSelectedSlideStatus(slide.projectOverview.status);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleOverlayClick = (e) => {
    // Close the modal only if the click target is the overlay itself (not its children)
    if (e.target.classList.contains("modal-overlay")) {
      closeModal();
    }
  };

  useEffect(() => {
    const body = document.body;

    const handleEscapeKey = (e) => {
      // Close the modal on pressing the "Escape" key
      if (e.key === "Escape") {
        closeModal();
      }
    };

    if (modalVisible && swiperRef.current) {
      body.classList.add("modal-open");
      swiperRef.current.autoplay.stop();
      document.addEventListener("keydown", handleEscapeKey);
    } else {
      body.classList.remove("modal-open");
      swiperRef.current?.autoplay.start();
      document.removeEventListener("keydown", handleEscapeKey);
    }

    return () => {
      body.classList.remove("modal-open");
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [modalVisible]);

  return (
    <section id="projects" className="container">
      <h1 className="heading">Projects</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        // loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {/* Swiper slides dynamically generated from projectsData */}
        {projectsData.map((project, index) => (
          <SwiperSlide key={index} onClick={() => openModal(project)}>
            <img src={project.cover} alt={`slide_image_${index}`} />
          </SwiperSlide>
        ))}

        {/* Slider controls */}
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow icon">
            <ArrowCircleLeft
              color="black"
              name="arrow-back-outline"
            ></ArrowCircleLeft>
          </div>
          <div className="swiper-button-next slider-arrow icon">
            <ArrowCircleRight
              color="black"
              name="arrow-forward-outline"
            ></ArrowCircleRight>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>

      {/* Modal */}
      {transitions(
        (styles, item) =>
          item && (
            <animated.div
              key="modal"
              style={styles}
              onClick={handleOverlayClick}
              className="modal-overlay"
            >
              <div className="modal">
                <div className="modal-left">
                  <div className="scrollable-content">
                    <img
                      className="slide-cover"
                      src={selectedSlide}
                      alt="selected_slide_cover"
                    />
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      {selectedSlideImgs.map((techImgs, index) => (
                        <img
                          className="slide-imgs"
                          key={index}
                          src={techImgs}
                          width={30}
                          height={30}
                          alt={`selected_slide_images_${index}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="modal-right">
                  <h4>{selectedSlideTitle}</h4>
                  <p style={{ fontSize: "13px" }}>{selectedSlideDesc}</p>
                  <div style={{ textAlign: "left" }}>
                    <ul>
                      <h4 style={{ paddingTop: "10px", paddingBottom: "10px" }}>
                        Features:
                      </h4>
                      {selectedSlideFeature.map((feature, index) => (
                        <li
                          key={index}
                          dangerouslySetInnerHTML={{ __html: feature }}
                        />
                      ))}
                      <h4 style={{ paddingTop: "10px", paddingBottom: "10px" }}>
                        Goals Achieved:
                      </h4>
                      {selectedSlideGoalsAchieved.map((goalsAchieved, index) => (
                        <li
                          key={index}
                          dangerouslySetInnerHTML={{ __html: goalsAchieved }}
                        />
                      ))}
                      <h4 style={{ paddingTop: "10px", paddingBottom: "10px" }}>
                        Future Plans:
                      </h4>
                      {selectedSlideFuturePlans.map((futurePlans, index) => (
                        <li
                          key={index}
                          dangerouslySetInnerHTML={{ __html: futurePlans }}
                        />
                      ))}
                      <h4 style={{ paddingTop: "10px", paddingBottom: "10px" }}>
                        Status:
                      </h4>
                      {selectedSlideStatus.map((status, index) => (
                        <li
                          key={index}
                          dangerouslySetInnerHTML={{ __html: status }}
                        />
                      ))}
                    </ul>
                  </div>
                  <div className="tech-icons">
                    <p>Tech Stacks: </p>
                    {selectedSlideTech.map((techIcon, index) => (
                      <img
                        key={index}
                        src={techIcon}
                        width={30}
                        height={30}
                        alt={`tech_icon_${index}`}
                      />
                    ))}
                  </div>
                  <div className="link-row icon">
                    <p>Links: </p>
                    {selectedSlideGithub && (
                      <a
                        href={selectedSlideGithub}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <GithubLogo size={30} color="black" />
                      </a>
                    )}
                    {selectedSlideSite && (
                      <a
                        href={selectedSlideSite}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <LinkBreak size={30} color="black" />
                      </a>
                    )}
                  </div>
                </div>
                <XCircle
                  className="icon x-icon"
                  onClick={closeModal}
                  size={30}
                  color="black"
                />
              </div>
            </animated.div>
          )
      )}
    </section>
  );
};

export default Projects;
