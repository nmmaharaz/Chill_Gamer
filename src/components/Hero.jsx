import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "react-slideshow-image/dist/styles.css";
const Hero = () => {
    const fadeImages = [
      {
        id: 1,
        url: "https://i.ibb.co.com/GMD9T7n/man-neon-suit-sits-chair-with-neon-sign-that-says-word-it.jpg",
        caption: "First Slide"
      },
      {
        id: 2,
        url: "https://i.ibb.co.com/xC4Wr7r/gamer-sitting-chair-full-shot.jpg",
        caption: "Second Slide"
      },
      {
        id: 3,
        url: "https://i.ibb.co.com/Cn8n5tz/pro-gamer-losing-space-shooter-video-game-tournament-using-professional-equipment.jpg",
        caption: "Third Slide"
      },
      {
        id: 4,
        url: "https://i.ibb.co.com/chh5QN6/9742750.jpg",
        caption: "Fourth Slide"
      }
      ];

      
        

      
    return (
        <div>
            <div className="slide-container">
            <Fade autoplay={true}
        duration={2000}
        transitionDuration={1000} arrows={false}>
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <img className="w-10/12 mx-auto h-[600px] rounded-b-xl object-fill" src={fadeImage.url} />
          </div>
        ))}
      </Fade>
      </div>
        </div>
    );
};

export default Hero;