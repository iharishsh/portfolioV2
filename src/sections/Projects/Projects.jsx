import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

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
import projectsData from "./projectsData.js"; // Import the projects data

const Projects = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSlide, setSelectedSlide] = useState(null);
  const [selectedSlideImgs, setSelectedSlideImgs] = useState([]); 
  const [selectedSlideTitle, setSelectedSlideTitle] = useState(null);
  const [selectedSlideDesc, setSelectedSlideDesc] = useState(null);
  const [selectedSlideTech, setSelectedSlideTech] = useState([]);
  const [selectedSlideGithub, setSelectedSlideGithub] = useState(null);
  const [selectedSlideSite, setSelectedSlideSite] = useState(null);
  const [selectedSlidePara1, setSelectedSlidePara1] = useState(null);
  const [selectedSlidePara2, setSelectedSlidePara2] = useState(null);
  const [selectedSlidePara3, setSelectedSlidePara3] = useState(null);
  const [selectedSlidePara4, setSelectedSlidePara4] = useState(null);

  const openModal = (slide) => {
    setSelectedSlide(slide.cover);
    setSelectedSlideImgs(slide.imgs);
    setSelectedSlideTitle(slide.title);
    setSelectedSlideDesc(slide.description);
    setSelectedSlideTech(slide.tech);
    setSelectedSlideGithub(slide.githubLink);
    setSelectedSlideSite(slide.siteLink);
    setSelectedSlidePara1(slide.para1);
    setSelectedSlidePara2(slide.para2);
    setSelectedSlidePara3(slide.para3);
    setSelectedSlidePara4(slide.para4);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedSlide(null);
    setModalVisible(false);
  };

  return (
    <section id="projects" className="container">
      <h1 className="heading">Projects</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
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
      {modalVisible && (
        <div className="modal-overlay">
          <div className="modal">
          <div className="modal-left">
        <div className="scrollable-content">
          <img
            className="slide-cover"
            src={selectedSlide}
            alt="selected_slide_cover"
          />
          <div style={{display: 'flex', flexDirection: 'row'}}>
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
                  {/* <li style={{ padding: "10px" }}>{selectedSlidePara1}</li> */}
                  <li style={{ padding: "10px" }} dangerouslySetInnerHTML={{ __html: selectedSlidePara1 }} />
                  <li style={{ padding: "10px" }} dangerouslySetInnerHTML={{ __html: selectedSlidePara2 }} />
                  <li style={{ padding: "10px" }} dangerouslySetInnerHTML={{ __html: selectedSlidePara3 }} />
                  <li style={{ padding: "10px" }} dangerouslySetInnerHTML={{ __html: selectedSlidePara4 }} />
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
                  <a href={selectedSlideSite} target="_blank" rel="noreferrer">
                    <LinkBreak size={30} color="black" />
                  </a>
                )}
              </div>
            </div>
            <XCircle
              className="icon"
              style={{ right: 0 }}
              onClick={closeModal}
              size={30}
              color="black"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
