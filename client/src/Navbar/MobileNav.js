import * as React from "react";
import PropTypes from "prop-types";
import Menu, { menuClasses } from "@mui/joy/Menu";
import MenuItem from "@mui/joy/MenuItem";
import IconButton from "@mui/joy/IconButton";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import Sheet from "@mui/joy/Sheet";
import Apps from "@mui/icons-material/Apps";
import Settings from "@mui/icons-material/Settings";
import Person from "@mui/icons-material/Person";
import Dropdown from "@mui/joy/Dropdown";
import MenuButton from "@mui/joy/MenuButton";
import { Link } from "react-scroll";

// The Menu is built on top of Popper v2, so it accepts `modifiers` prop that will be passed to the Popper.
// https://popper.js.org/docs/v2/modifiers/offset/

const modifiers = [
  {
    name: "offset",
    options: {
      offset: ({ placement }) => {
        if (placement.includes("end")) {
          return [8, 20];
        }
        return [-8, 20];
      },
    },
  },
];

function NavMenuButton({ children, menu, open, onOpen, onLeaveMenu, label, ...props }) {
  const isOnButton = React.useRef(false);
  const internalOpen = React.useRef(open);

  const handleButtonKeyDown = (event) => {
    internalOpen.current = open;
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      onOpen(event);
    }
  };

  return (
    <Dropdown
      open={open}
      onOpenChange={(_, isOpen) => {
        if (isOpen) {
          onOpen?.();
        }
      }}
    >
      <MenuButton
        {...props}
        slots={{ root: IconButton }}
        slotProps={{ root: { variant: "plain", color: "neutral" } }}
        onMouseDown={() => {
          internalOpen.current = open;
        }}
        onClick={() => {
          if (!internalOpen.current) {
            onOpen();
          }
        }}
        onMouseEnter={() => {
          onOpen();
          isOnButton.current = true;
        }}
        onMouseLeave={() => {
          isOnButton.current = false;
        }}
        onKeyDown={handleButtonKeyDown}
        sx={{
          bgcolor: open ? "neutral.plainHoverBg" : undefined,
          "&:focus-visible": {
            bgcolor: "neutral.plainHoverBg",
          },
        }}
      >
        {children}
      </MenuButton>
      {React.cloneElement(menu, {
        onMouseLeave: () => {
          onLeaveMenu(() => isOnButton.current);
        },
        modifiers,
        slotProps: {
          listbox: {
            id: `nav-example-menu-${label}`,
            "aria-label": label,
          },
        },
        placement: "right-start",
        sx: {
          width: 288,
          [`& .${menuClasses.listbox}`]: {
            "--List-padding": "var(--ListDivider-gap)",
          },
        },
      })}
    </Dropdown>
  );
}

NavMenuButton.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string.isRequired,
  menu: PropTypes.element.isRequired,
  onLeaveMenu: PropTypes.func.isRequired,
  onOpen: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default function MenuIconSideNavExample() {
  const [menuIndex, setMenuIndex] = React.useState(null);
  const [listItems, setListItems] = React.useState({
    activeObject: 0,
    objects: [
      { title: "Home", id: 0 },
      { title: "Selectedwork", id: 1 },
      { title: "Services", id: 2 },
      { title: "Testimonials", id: 3 },
      { title: "Blog", id: 4 },
      { title: `Contact`, id: 5 },
    ],
  });
  const itemProps = {
    onClick: () => setMenuIndex(null),
  };
  const createHandleLeaveMenu = (index) => (getIsOnButton) => {
    setTimeout(() => {
      const isOnButton = getIsOnButton();
      if (!isOnButton) {
        setMenuIndex((latestIndex) => {
          if (index === latestIndex) {
            return null;
          }
          return latestIndex;
        });
      }
    }, 200);
  };
  return (
    <Sheet sx={{ borderRadius: "sm", py: 0, mr: 0 }}>
      <List>
        <ListItem>
          <NavMenuButton
            label="Apps"
            open={menuIndex === 0}
            onOpen={() => setMenuIndex(0)}
            onLeaveMenu={createHandleLeaveMenu(0)}
            menu={
              <Menu onClose={() => setMenuIndex(null)}>
                {listItems.objects.map((item, index) =>
                  item.title === "Home" ? (
                    <li className="font-normal cursor-pointer not-italic w-full tracking-tight flex-none text-silverLight">
                      <MenuItem {...itemProps}>
                        {" "}
                        <Link
                          to={`App`}
                          key={index + "-id"}
                          spy={true}
                          smooth={true}
                          duration={500}
                        >
                          {item.title}
                        </Link>
                      </MenuItem>
                    </li>
                  ) : (
                    <li className="font-normal cursor-pointer not-italic w-full tracking-tight flex-none text-silverLight">
                      <MenuItem {...itemProps}>
                        {" "}
                        <Link
                          to={`${item.title}`}
                          key={index + "-id"}
                          spy={true}
                          smooth={true}
                          offset={-100}
                          duration={500}
                        >
                          {item.title === "Selectedwork" ? "Selected Work" : item.title}
                          {item.component ? (
                            <item.component
                              customStyle={{
                                general: {
                                  width: "23px",
                                  height: "17px",
                                  display: "inline",
                                },
                                color: "#fff",
                              }}
                              viewBoxSetting="-7 -1 30 25"
                            />
                          ) : null}
                        </Link>{" "}
                      </MenuItem>
                    </li>
                  )
                )}
              </Menu>
            }
          >
            <Apps />
          </NavMenuButton>
        </ListItem>
        {/* <ListItem>
          <NavMenuButton
            label="Settings"
            open={menuIndex === 1}
            onOpen={() => setMenuIndex(1)}
            onLeaveMenu={createHandleLeaveMenu(1)}
            menu={
              <Menu onClose={() => setMenuIndex(null)}>
                <MenuItem {...itemProps}>Setting 1</MenuItem>
                <MenuItem {...itemProps}>Setting 2</MenuItem>
                <MenuItem {...itemProps}>Setting 3</MenuItem>
              </Menu>
            }
          >
            <Settings />
          </NavMenuButton>
        </ListItem>
        <ListItem>
          <NavMenuButton
            label="Personal"
            open={menuIndex === 2}
            onOpen={() => setMenuIndex(2)}
            onLeaveMenu={createHandleLeaveMenu(2)}
            menu={
              <Menu onClose={() => setMenuIndex(null)}>
                <MenuItem {...itemProps}>Personal 1</MenuItem>
                <MenuItem {...itemProps}>Personal 2</MenuItem>
                <MenuItem {...itemProps}>Personal 3</MenuItem>
              </Menu>
            }
          >
            <Person />
          </NavMenuButton>
        </ListItem> */}
      </List>
    </Sheet>
  );
}
