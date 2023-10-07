import React, { useState } from "react";
import { Logo, UpArrow } from "../Resources/Svgs";
import { ButtonPrimary } from "../utils/buttons";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-scroll";

const LongMenu = (listItems) => {
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
        {listItems.objects.map((option) => (
          <MenuItem key={option.id} selected={option.title === "Home"} onClick={handleClose}>
            {option.title}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

function Navbar() {
  const isMobile = useMediaQuery("(min-width:800px)");
  // Declarations
  const [listItems, setListItems] = useState({
    activeObject: null,
    objects: [
      { title: "Home", id: 0 },
      { title: "Selectedwork", id: 1 },
      { title: "Services", id: 2 },
      { title: "Testimonials", id: 3 },
      { title: "Blog", id: 4 },
    ],
  });

  const activeClass = (id) => (id === listItems.activeObject ? "active" : "");

  const toggleActive = (index) =>
    setListItems({ ...listItems, activeObject: listItems.objects[index].id });

  return (
    <nav className="Nav flex flex-row justify-between items-center mb-10 pt-4">
      <Logo customStyle={{ paddingTop: "0.5rem" }} />
      <ul className="flex flex-row items-center h-4 p-0 space-x-5 right-40 font-modernEra not-italic">
        {isMobile ? (
          <>
            {listItems.objects.map((item, index) =>
              item.title === "Home" ? (
                <li>
                  <Link
                    className={activeClass(index)}
                    to={`App`}
                    key={index + "-id"}
                    spy={true}
                    smooth={true}
                    offset={100}
                    duration={500}
                    onClick={() => {
                      toggleActive(index);
                    }}
                  >
                    {item.title}
                  </Link>
                </li>
              ) : (
                <li>
                  <Link
                    className={activeClass(index)}
                    to={`${item.title}`}
                    key={index + "-id"}
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    onClick={() => {
                      toggleActive(index);
                    }}
                  >
                    {item.title === "Selectedwork" ? "Selected-Work" : item.title}
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
          <LongMenu listItems={listItems} />
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
