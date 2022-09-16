import { Parallax } from "react-parallax";
import Mars from "../img/mars.jpg";

const ImageOne = () => (
  <Parallax className="image" bgImage={Mars} strength={800}>
    <div className="content">
      <span className="img-text">Seans Portfolio</span>
    </div>
  </Parallax>
);

export default ImageOne;
