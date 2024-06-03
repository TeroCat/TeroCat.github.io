import { Link } from "react-router-dom";
const Navbar =()=>{
      return (
        <div className="topnav">
          <a href="/home" target="_blank">Home</a>
          <a href="/about" target="_blank">About</a>
          <a href="" target="_blank">Shopping</a>
          <a href="" target="_blank">Articles</a>
        </div>
      );
}
export default Navbar;
