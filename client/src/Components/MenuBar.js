import React, { useState } from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { IoMdFunnel } from "react-icons/io";

const MenuBar = ({ options }) => {
  const [activeFilter, setActiveFilter] = useState(false);
  const [activeSearch, setActiveSearch] = useState(false);

  const [activeMyCourses, setActiveMyCourses] = useState(false);
  const [activeAllCourses, setActiveAllCourses] = useState(true);

  const [active, setActive] = useState(null);

  const Li = styled.li`
    display: inline-block;
    margin: 0 0 0 1rem;
    width: 5rem;
    padding-top: 0;
    transition: all 0.2s;
    cursor: pointer;
    text-align: center;
    position: relative;
    cursor: pointer;
    text-decoration: none;
  `;

  const Ul = styled.ul`
    display: inline-block;
    margin-left: 5rem;
  `;

  const BtnWrap = styled.div`
    display: flex;
    border-radius: 2px;
    cursor: pointer;
    margin-right: 1rem;
    border: 1px solid ${(props) => props.theme.colors.lightgrey};
    background-color: ${(props) => props.theme.colors.palegrey};
  `;

  const MenuBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 6.5rem;
    height: 1.7rem;
    border: 1px solid ${(props) => props.theme.colors.lightgrey};
    cursor: pointer;
  `;

  const Wrapper = styled.nav`
    font-size: ${(props) => props.theme.fontSize.sm};
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    font-weight: normal;
  `;

  const Filter = styled(BtnWrap)`
    margin-left: 1rem;
    font-size: 1.2rem;
  `;

  const FilterBtn = styled(MenuBtn)`
    font-size: 1.2rem;
    width: 2rem;
    z-index: 100;
    background-color: ${(props) =>
      activeFilter ? props.theme.colors.lightgrey : ""};
  `;

  const SearchBtn = styled(MenuBtn)`
    font-size: 1.2rem;
    width: 2rem;
    z-index: 100;
    background-color: ${(props) =>
      activeSearch ? props.theme.colors.lightgrey : ""};
  `;

  const AllBtn = styled(MenuBtn)`
    background-color: ${(props) =>
      activeAllCourses ? props.theme.colors.lightgrey : ""};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 6.5rem;
    height: 1.7rem;
    cursor: pointer;
  `;

  const MyCourses = styled(MenuBtn)`
    background-color: ${(props) =>
      activeMyCourses ? props.theme.colors.lightgrey : ""};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 6.5rem;
    height: 1.7rem;
    cursor: pointer;
  `;

  const toggle = (position) => {
    if (active === position) {
      setActive(null);
    } else {
      setActive(position);
    }
  };

  const activeColor = (position) => {
    if (active === position) {
      return "#dd6b2d";
    } else {
      return "transparent";
    }
  };

  const activeFontWh = (position) => {
    if (active === position) {
      return "bold";
    } else {
      return "normal";
    }
  };

  return (
    <Wrapper>
      <Filter>
        <SearchBtn>
          <BsSearch
            onClick={() => {
              setActiveSearch(!activeSearch);
              setActiveFilter(false);
            }}
          />
        </SearchBtn>
        <FilterBtn>
          <IoMdFunnel
            onClick={() => {
              setActiveFilter(!activeFilter);
              setActiveSearch(false);
            }}
          />
        </FilterBtn>
      </Filter>
      <Ul>
        {options.map((item) => (
          <Li
            onClick={() => toggle(item.key)}
            style={{ fontWeight: activeFontWh(item.key) }}
          >
            {item.data}
            <div
              style={{
                borderBottom: `4px solid ${activeColor(item.key)}`,
                position: "relative",
                bottom: "-1.2rem",
              }}
            ></div>
          </Li>
        ))}
      </Ul>
      <BtnWrap>
        <AllBtn
          onClick={() => {
            setActiveAllCourses(true);
            setActiveMyCourses(false);
          }}
        >
          All{" "}
        </AllBtn>
        <MyCourses
          onClick={() => {
            setActiveMyCourses(true);
            setActiveAllCourses(false);
          }}
        >
          My Courses
        </MyCourses>
      </BtnWrap>
    </Wrapper>
  );
};

export default MenuBar;
