import logo from "../../assets/logo.png";
import {UilSearch} from 

export default function LogoSearch() {
  return (
    <div className="logosearch">
      <img src={logo} alt="Logo" />
      <div className="search">
        <input type="text" placeholder="#Explore" />
        <div className="s-icon">
          
        </div>
      </div>
    </div>
  );
}
