import "./VideoSection.css";

import video from "../../../assets/videos/HeroVideo.mp4";

const VideoSection = () => {
  return (
    <section className="video">
      <video autoPlay muted loop playsInline>
        <source src={video} type="video/mp4" />
      </video>
    </section>
  );
};

export default VideoSection;
