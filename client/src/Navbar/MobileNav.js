import * as React from "react";
import PropTypes from "prop-types";
import Menu, { menuClasses } from "@mui/joy/Menu";
import MenuItem from "@mui/joy/MenuItem";
import IconButton from "@mui/joy/IconButton";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListSubheader from "@mui/joy/ListSubheader";
import Sheet from "@mui/joy/Sheet";

import Dropdown from "@mui/joy/Dropdown";
import MenuButton from "@mui/joy/MenuButton";
import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

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

function NavMenuButton({ children, menu, open, onOpen, onLeaveMenu, onClose, label, ...props }) {
  const isOnButton = React.useRef(false);
  const internalOpen = React.useRef(open);

  // Update internalOpen ref when open prop changes
  React.useEffect(() => {
    internalOpen.current = open;
  }, [open]);

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
      sx={{ zIndex: 9999 }}
    >
      <MenuButton
        {...props}
        slots={{ root: IconButton }}
        slotProps={{ root: { variant: "plain", color: "neutral" } }}
        onMouseDown={() => {
          internalOpen.current = open;
        }}
        onClick={() => {
          if (!open) {
            onOpen();
          } else {
            onClose();
          }
        }}
        onMouseEnter={() => {
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
          minWidth: "32px",
          minHeight: "32px",
          padding: "4px",
          fontSize: "18px",
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
        placement: "bottom-end",
        sx: {
          width: 288,
          maxHeight: "80vh",
          overflowY: "auto",
          zIndex: 9999,
          [`& .${menuClasses.listbox}`]: {
            "--List-padding": "var(--ListDivider-gap)",
            maxHeight: "none",
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
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default function MenuIconSideNavExample({ activeObject, toggleActive, listItems }) {
  const [menuIndex, setMenuIndex] = React.useState(null);
  const [mobileActiveObject, setMobileActiveObject] = React.useState(null);
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
            onClose={() => setMenuIndex(null)}
            onLeaveMenu={createHandleLeaveMenu(0)}
            menu={
              <Menu onClose={() => setMenuIndex(null)}>
                {listItems.flatMap((item, index) =>
                  // A menu item with children (Services) shows as a heading over its links.
                  item.children
                    ? [{ heading: item.title, id: `heading-${item.id}` }, ...item.children.map((child) => ({ ...child, index, indent: true }))]
                    : [{ ...item, index }]
                ).map((item) => {
                  if (item.heading) {
                    return (
                      <ListSubheader key={item.id} sx={{ color: "black", fontFamily: "inherit", letterSpacing: 0, textTransform: "none", fontSize: "inherit", fontWeight: 400 }}>
                        {item.heading}
                      </ListSubheader>
                    );
                  }
                  const { index } = item;
                  const isSelected = mobileActiveObject === item.id;
                  const menuItemStyle = {
                    ...(item.indent ? { pl: 4 } : {}),
                    backgroundColor: isSelected ? "#FD5A1E" : "transparent",
                    color: isSelected ? "white" : "black",
                    "&:hover": {
                      backgroundColor: "#FD5A1E !important",
                      color: "white !important",
                    },
                    "&:focus": {
                      backgroundColor: "#FD5A1E !important", 
                      color: "white !important",
                    },
                    "&:active": {
                      backgroundColor: "#FD5A1E !important",
                      color: "white !important", 
                    },
                    "@media (hover: none)": {
                      "&:active": {
                        backgroundColor: "#FD5A1E !important",
                        color: "white !important",
                      },
                    },
                  };

                  return (
                    <MenuItem
                      key={`menu-item-${item.id}`}
                      {...itemProps}
                      sx={menuItemStyle}
                    >
                      {item.type === 'route' ? (
                        <NavLink
                          className={({ isActive: active }) => (active ? 'nav-active' : '')}
                          to={item.href}
                          onClick={() => {
                            setMenuIndex(null);
                            toggleActive(index);
                            setMobileActiveObject(item.id);
                          }}
                          style={{ 
                            color: 'inherit',
                            textDecoration: 'none',
                            width: '100%',
                            display: 'block'
                          }}
                        >
                          {item.title}
                        </NavLink>
                      ) : (
                        <NavHashLink
                          className={({ isActive: active }) => (active ? 'nav-active' : '')}
                          to={item.title === "Home" ? "/#home" : `/#${item.hash || item.title}`}
                          scroll={(el) => {
                            if (item.title === 'Home') {
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                            } else if (el) {
                              const offset = item.title === 'Contact' ? 0 : 120;
                              const top = el.getBoundingClientRect().top + window.scrollY - offset;
                              const maxTop = document.documentElement.scrollHeight - window.innerHeight;
                              window.scrollTo({ top: Math.max(0, Math.min(top, maxTop)), behavior: 'smooth' });
                            }
                          }}
                          onClick={() => {
                            setMenuIndex(null);
                            toggleActive(index);
                            setMobileActiveObject(item.id);
                          }}
                          style={{ 
                            color: 'inherit',
                            textDecoration: 'none',
                            width: '100%',
                            display: 'block'
                          }}
                        >
                          {item.title === "Selectedwork" ? "Selected Work" : item.title}
                          {item.component && (
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
                          )}
                        </NavHashLink>
                      )}
                    </MenuItem>
                  );
                })}
              </Menu>
            }
          >
            <span style={{ fontSize: '18px' }}>☰</span>
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
