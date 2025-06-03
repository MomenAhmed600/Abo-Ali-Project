import React from "react";
import { SiCoffeescript } from "react-icons/si";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  return (
    <div>
      <div>
        <div>
          <div>
            <span>
              <SiCoffeescript />
            </span>
            <h1>Abo-AliCafe</h1>
          </div>

          <nav>
            <ScrollLink
              to="home"
              spy={true}
              smooth={true}
              duration={true}
              className="cursor-pointer"
            >
              Home
            </ScrollLink>
            <RouterLink to="/manu" className="cursor-pointer">
              Manu
            </RouterLink>
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              duration={true}
              className="cursor-pointer"
            >
              About Us
            </ScrollLink>
            <ScrollLink
              to="products"
              spy={true}
              smooth={true}
              duration={true}
              className="cursor-pointer"
            >
              Products
            </ScrollLink>
            <ScrollLink
              to="review"
              spy={true}
              smooth={true}
              duration={true}
              className="cursor-pointer"
            >
              Reviews
            </ScrollLink>
          </nav>

          <div>
            <button>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
