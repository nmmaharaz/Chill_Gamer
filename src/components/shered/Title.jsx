import Typewriter from 'typewriter-effect';
import "../../../src/App.css";

const Title = ({ title }) => {
  return (
    <div className="roboto-serif w-10/12 mx-auto ">
      <p className="dark:text-[#633aa9] text-white tracking-wide text-center font-extrabold text-4xl">
      {title}
      </p>
    </div>
  );
};

export default Title;
