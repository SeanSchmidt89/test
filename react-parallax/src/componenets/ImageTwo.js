import { Parallax } from "react-parallax";
import Pool from "../img/pool.jpg";

const ImageTwo = () => (
  <Parallax className="image" bgImage={Pool} strength={800}>
    <div className="content">
      <span className="img-text">Projects</span>
    </div>
  </Parallax>
);

export default ImageTwo;
