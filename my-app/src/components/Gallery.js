import React, { useState } from "react";
import "./Gallery.css";
import CloseIcon from "@mui/icons-material/Close";

import Img1 from "../img/gallery1.png";
import Img2 from "../img/gallery2.png";
import Img3 from "../img/gallery3.png";
import Img4 from "../img/gallery4.png";
import Img5 from "../img/gallery5.png";
import Img6 from "../img/gallery6.png";

const Gallery = () => {
  let data = [
    {
      id: 1,
      imgSrc: Img1,
    },
    {
      id: 2,
      imgSrc: Img2,
    },
    {
      id: 3,
      imgSrc: Img3,
    },
    {
      id: 4,
      imgSrc: Img4,
    },
    {
      id: 5,
      imgSrc: Img5,
    },
    {
      id: 6,
      imgSrc: Img6,
    },
  ];
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState("");

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };
  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} alt="mom" />
        <CloseIcon onClick={() => setModel(false)} />
      </div>
      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div
              className="pics"
              key={index}
              onClick={() => getImg(item.imgSrc)}
            >
              <img src={item.imgSrc} style={{ width: "100%" }} alt="mom" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
