import "./style.css";
import { useEffect, useState } from "react";

const imageUrl1 =
  "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80";
const imageUrl2 =
  "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80";
const imageUrl3 =
  "https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80";
const imageUrl4 =
  "https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80";
const imageUrl5 =
  "https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80";

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [allImage, setAllImage] = useState([
    imageUrl1,
    imageUrl2,
    imageUrl3,
    imageUrl4,
    imageUrl5,
  ]);

  const leftSlide = ()=>{
    setActiveSlide(activeSlide > 0 ? activeSlide - 1: allImage.length-1)
  }
  const rightSlide = ()=>{
    setActiveSlide(activeSlide < allImage.length-1?activeSlide + 1:0);
  }

  // useEffect(() => {
  //   setInterval(() => {
  //     setActiveSlide(activeSlide < allImage.length - 1 ? activeSlide + 1 : 0);
  //   }, 1000);
  // }, []);
  return (
    <div className="slider-container">
      <div
        className="slide active"
        style={{
          backgroundImage: `url(${allImage[activeSlide]})
        `,
        }}
      ></div>

      <button className="arrow left-arrow" id="left" onClick={leftSlide}>
        <i className="fas fa-arrow-left"></i>
      </button>

      <button className="arrow right-arrow" id="right" onClick={rightSlide}>
        <i className="fas fa-arrow-right"></i>
      </button>
    </div>
  );
};
export default Slider;
