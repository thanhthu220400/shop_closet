import React, { useEffect, useState } from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import sliderItems from "../../data/Slider";

const Sliderhome = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderItems.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;
  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  const prevSlive = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);
  return (
    <div className="slider">
      <ArrowLeftOutlined className="arrow prev" onClick={prevSlive} />
      <ArrowRightOutlined className="arrow next" onClick={nextSlide} />
      {sliderItems.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={index}
          >
            {index === currentSlide && (
              <>
                <div className="page-slider">
                  <div className="i-left">
                    <div className="i-left-wrapper">
                      <h2 className="i-intro">Hello, My name is</h2>
                      <h1 className="i-name">{slide.title}</h1>
                      <div className="i-title">
                        <div className="i-title-wrapper">
                          <div className="i-title-item">Web Developer</div>
                          <div className="i-title-item">UI/UX Designer</div>
                          <div className="i-title-item">Photographer</div>
                          <div className="i-title-item">Writer</div>
                          <div className="i-title-item">Content Creator</div>
                        </div>
                      </div>
                      <p className="i-desc">{slide.desc}</p>
                    </div>
                  </div>
                  <div className="i-right">
                    <div className="i-bg"></div>
                    <img src={slide.img} alt="" className="i-img" />
                  </div>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Sliderhome;
