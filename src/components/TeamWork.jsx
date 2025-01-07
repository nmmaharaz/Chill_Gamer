import { Fade } from "react-awesome-reveal";
import { CiYoutube } from "react-icons/ci";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const TeamWork = ({ team }) => {
  return (
    <div>
     <div className="card mx-auto glass bg-opacity-10 dark:bg-opacity-65 bg-[#633aa9] max-w-80">
        <figure>
          <img
            className="rounded-xl w-full h-[250px]"
            src={team.photo}
            alt="car!"
          />
        </figure>
        <div className="py-4 *:text-white *:text-center">
          <h2 className="text-2xl pb-2 font-bold text-center">
            <Typewriter words={[team.name]} />
          </h2>
          <p className="mb-4">{team.position}</p>

          <div className="card-actions *:text-[#633aa9] justify-center">
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
    </div>
  );
};

export default TeamWork;
