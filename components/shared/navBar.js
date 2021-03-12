import React, { useState } from 'react';
import styled from '@emotion/styled'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import NextLink from 'next/link'
import { useRouter } from 'next/router'

const LinkToPage = [
  {
    href:"/",
    name:"TimeTable",
  },
  {
    href:"/about",
    name:"About",
  },
  {
    href:"/events",
    name:"Events",
  }
]

const currentTab = (path) => {
    const router = useRouter()
    if( router.pathname === path){
        return {color: '#F3B431' }
    }
  }

const NavBar = () => {
  const [click, setClick] = useState(false)

  if(click == true) {
    const targetElement = document.querySelector(".navbar");
    disableBodyScroll(targetElement);
  }
  else {
    clearAllBodyScrollLocks();
  }

  const NavBarContainer = () => (
    <div className='navbar shadow'>
      <NextLink href="/">
        <span className='navbar-logo' onClick={() => setClick(false)}>
            AmTim
        </span>
        </NextLink>
      
        <div className='menu-icon' onClick={() => setClick(!click)}>
        <i className={click ? 'fal fa-times' : 'fad fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>

        {LinkToPage.map((value,i) => 
          <li className='nav-item' key={i}>
            <NextLink href={value.href}>
              <a style={currentTab(value.href)} className='nav-links' onClick={() => setClick(false)}>
              {value.name}
              </a>
            </NextLink>
          </li>)}
        </ul>
      </div>
  )

  return (
    <Style>
    <NavBarContainer className="shadow-lg"/>
  </Style>
  );
}


const Style = styled.div`
.navbar {
  left: 0;
  width: 100%;
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight:600;
}
a {
  color:#000000;
}
  .NavbarItems {
    position: relative;
  }
  .nav-item {
    height: 4rem;
  }
  .nav-menu {
    display: flex;
    grid-gap: 0px;
    flex-direction: column;
    width: 100%;
    list-style: none;
    text-align: center;
    height: 100vh;
    position: absolute;
    top: 70px;
    left: -100%;
    padding-top:2rem;
    opacity: 1;
    transition: all 0.5s ease;
  }
  .nav-menu.active {
    padding-right:30px;
    align-items: center;
    left: 0px;
    opacity: 1;
    transition: all 0.5s ease;
    z-index: 999;
    background-color:rgba(0, 0, 0, 0.75);
  }
  .nav-links {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    color:white;
  }
  .nav-links:hover {
    text-decoration: none;
  }
  .navbar-logo {
    position: absolute;
    font-weight:700;
    font-size:2rem;
  }
 
  .menu-icon {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    margin-left:0.5rem;
    cursor: pointer;
    font-size:2rem;
    transform: translate(30%, 20%);
  }
`

export default NavBar