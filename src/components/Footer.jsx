import logo from "../assets/ChillGame.png"
const Footer = () => {
  return (
    <div className="bg-[#16234d]">
      <footer className="flex flex-col items-center lg:flex-row w-10/12 mx-auto *:text-white justify-around p-10">
        <nav className="flex *:text-center *:lg:text-left flex-col *:mb-2">
          <h6 className="link link-hover">Home</h6>
          <a className="link link-hover">All Review</a>
          <a className="link link-hover">Add Review</a>
          <a className="link link-hover">My Wishlist</a>
        </nav>
        <nav className="my-7 lg:my-0">
          <div className="w-24">
            <img src={logo} alt="" />
          </div>
        </nav>
        <nav className="flex flex-col *:text-center *:lg:text-left *:mb-2">
          <h6 className="link link-hover">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
