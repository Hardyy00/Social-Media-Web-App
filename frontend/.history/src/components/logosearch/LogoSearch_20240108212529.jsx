import logo from "../../assets/logo.png";

export default function LogoSearch() {
  return (
    <div className="logosearch">
      <img src={logo} alt="Logo" />
      <div className="search">
        <input type="text" placeholder="#Explore" />
      </div>
    </div>
  );
}
