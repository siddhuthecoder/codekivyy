import "./Footer.css";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
const Footer=()=>{
    return(
     <>
         <hr/>
     <footer class="footer">
    {/* <div class="waves">
      <div class="wave" id="wave1"></div>
      <div class="wave" id="wave2"></div>
      <div class="wave" id="wave3"></div>
      <div class="wave" id="wave4"></div>
    </div> */}
    <ul class="social-icon">
      <li class="social-icon__item"><a class="social-icon__link" href="#">
      <FaFacebookSquare />
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="#">
      <FaTwitter></FaTwitter>
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="#">
      <FaLinkedin />
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="#">
      <FaInstagram></FaInstagram>
        </a></li>
    </ul>
    <ul class="menu">
      <li class="menu__item"><a class="menu__link" href="#">Home</a></li>
      <li class="menu__item"><a class="menu__link" href="#">About</a></li>
      <li class="menu__item"><a class="menu__link" href="#">Services</a></li>
      <li class="menu__item"><a class="menu__link" href="#">Team</a></li>
      <li class="menu__item"><a class="menu__link" href="#">Contact</a></li>

    </ul>
    <p>&copy;2021 Nadine Coelho | All Rights Reserved</p>
  </footer>
     </>

    );
}
export default Footer;