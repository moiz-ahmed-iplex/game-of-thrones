import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import * as headerStyle from "./header.module.css"
import SideMenu from "./SideMenu"
import styled from "styled-components"

const IconBar = styled.div`
  width: 1.5rem;
  height: 0.3rem;
  background: white;
  border-radius: 3px;
  transform-origin: 1px;
  transition: transform 600ms, opacity 600ms;
  &:first-child {
    transform: ${({ nav }) => (nav ? "rotate(45deg)" : "rotate(0)")};
  }
  &:nth-child(2) {
    opacity: ${({ nav }) => (nav ? "0" : "1")};
  }
  &:nth-child(3) {
    transform: ${({ nav }) => (nav ? "rotate(-45deg)" : "rotate(0)")};
  }
`
const MenuIcon = styled.button`
  top: 2rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5 rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 5;
  &:hover {
    ${IconBar} {
      background: yellow;
    }
  }
`

export default function Headers() {
  const [nav, setNav] = useState(false)
  const [isHeader, setIsHeader] = useState(true)

  useEffect(() => {
    setIsHeader(!isHeader)
    if (nav) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [nav])

  const changeBackground = () => {
    if (window.scrollY >= 90) {
      setIsHeader(true)
    } else {
      setIsHeader(false)
    }
  }

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeBackground)
  }

  const handleClick = () => {
    setNav(!nav)
  }

  return (
    <div>
      <header className={isHeader ? headerStyle.headactive : headerStyle.head}>
        <div className={headerStyle.container}>
          <Link to="/">
            <div className={headerStyle.logo} />
          </Link>
          <MenuIcon onClick={handleClick}>
            <IconBar nav={nav} />
            <IconBar nav={nav} />
            <IconBar nav={nav} />
          </MenuIcon>
        </div>
      </header>
      {nav ? <SideMenu nav={nav} /> : ""}
    </div>
  )
}
