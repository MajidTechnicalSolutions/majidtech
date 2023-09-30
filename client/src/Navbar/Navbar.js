import React from "react";
import { Logo, UpArrow } from "../Resources/Svgs";
import { ButtonPrimary } from "../utils/buttons";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-scroll";

const listItems = ["Home", "Selectedwork", "Services", "Testimonials", "Blog"];

const LongMenu = () => {
  const ITEM_HEIGHT = 48;
  const [anchorEl, setAnchorEl] = (React.useState < null) | (HTMLElement > null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ textAlign: "right" }}>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon style={{ color: "#FD5A1E" }} />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {listItems.map((option) => (
          <MenuItem key={option} selected={option === "Home"} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

const activeClass = ({ isActive }) => {
  return isActive
    ? "active font-normal cursor-pointer h-4 not-italic tracking-tight text-silverLight flex-none"
    : "font-normal cursor-pointer h-4 not-italic tracking-tight text-silverLight flex-none";
};

function Navbar() {
  const isMobile = useMediaQuery("(min-width:800px)");

  return (
    <nav className="Nav flex flex-row justify-between items-center mb-10">
      <Logo customStyle={{ paddingTop: "0.5rem" }} />
      <ul className="flex flex-row items-center h-4 p-0 space-x-5 right-40 font-modernEra not-italic">
        {isMobile ? (
          <>
            {listItems.map((item, index) =>
              item === "Home" ? (
                <li className={activeClass}>
                  <Link
                    to={`App`}
                    key={index + "-id"}
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    {item}
                  </Link>
                </li>
              ) : (
                <li className={activeClass}>
                  <Link
                    to={`${item}`}
                    key={index + "-id"}
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    {item === "Selectedwork" ? "Selected-Work" : item}
                  </Link>
                </li>
              )
            )}
            <ButtonPrimary
              Arrow={UpArrow}
              customStyle={{
                general: {
                  width: 26,
                  height: 26,
                  viewBox: "-7 -1 30 25",
                },
                color: "#fff",
              }}
              text="Contact"
            />
          </>
        ) : (
          <LongMenu />
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
