import { Parallax } from "react-parallax";
import Moon from "../img/moon.jpg";

const ImageTwo = () => (
  <Parallax className="image" bgImage={Moon} strength={800}>
    <div className="content">
      <span className="img-text">About Me</span>
    </div>
  </Parallax>
);

export default ImageTwo;
