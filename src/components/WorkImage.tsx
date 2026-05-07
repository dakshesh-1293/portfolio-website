import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  image: string;
  alt?: string;
  video?: string;
  link?: string;
}

const WorkImage = (props: Props) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="work-image">
      <a
        className="work-image-in"
        href={props.link}
        target="_blank"
        data-cursor="disable"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {props.link && (
          <div className="work-link">
            <MdArrowOutward />
          </div>
        )}

        {/* IMAGE */}
        <img src={props.image} alt={props.alt} />

        {/* VIDEO */}
        {isHover && props.video && (
          <video
            src={`/videos/${props.video}`}
            autoPlay
            muted
            loop
            playsInline
          />
        )}
      </a>
    </div>
  );
};

export default WorkImage;