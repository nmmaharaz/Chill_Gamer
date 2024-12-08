import { Fade } from "react-awesome-reveal";
import { CiYoutube } from "react-icons/ci";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const TeamWork = ({ team }) => {
  return (
    <div>
     <Fade direction={"up"}>
     <div className="card mx-auto glass bg-base-300 max-w-80">
        <figure>
          <img
            className="rounded-xl w-full h-[300px]"
            src={team.photo}
            alt="car!"
          />
        </figure>
        <div className="py-4 *:text-center">
          <h2 className="text-2xl pb-2 font-bold text-center">
            <Typewriter words={[team.name]} />
          </h2>
          <p>{team.position}</p>

          <div className="card-actions justify-center">
            <Link
              target="_blank"
              to={team.facebook}
              className=" flex items-center justify-center text-3xl bg-base-200 w-12 h-12 rounded-full"
            >
              <FaFacebookF />
            </Link>
            <Link
              to={team.linkdIn}
              target="_blank"
              className="flex items-center justify-center mx-4 text-3xl bg-base-200 w-12 h-12 rounded-full"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              to={team.youtube}
              target="_blank"
              className="flex items-center justify-center text-3xl bg-base-200 w-12 h-12 rounded-full"
            >
              <CiYoutube />
            </Link>
          </div>
        </div>
      </div>
     </Fade>
    </div>
  );
};

export default TeamWork;
