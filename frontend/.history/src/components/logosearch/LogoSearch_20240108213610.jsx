import logo from "../../assets/logo.png";
import { UilSearch } from "@iconscout/react-unicons";

export default function LogoSearch() {
  return (
    <div className="logosearch">
      <img src={logo} alt="Logo" />
      <div className="search">
        <input type="text" placeholder="#Explore" />
        <div className="s-icon">
          <UilSearch />
        </div>
      </div>
    </div>
  );
}
