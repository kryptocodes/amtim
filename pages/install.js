import React, { useEffect } from 'react';
import styled from '@emotion/styled';

import Wrapper from '../components/shared/Wrapper';

const InstallationPageWindow = styled.div`
  min-height: 100vh;
  background-color: #FAFAFA;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1rem;
  div {
    max-width: 550px;
  }
  h1{
    margin-bottom: 1.5rem;
    font-weight: 900;
    font-size: calc(1.5rem + 1vw);
    color: #212121
  }
  img {
    max-width: 150px;
    box-shadow: 2px 3px 5px rgba(0,0,0,0.5);
    margin-bottom: 1rem;
    border-radius: 1rem;
    background: white;
  }
  .btn41-43 {
    padding: 10px 25px;
    font-weight: 500;
    background: black;
    outline: none !important;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
  }
  .btn-42 {
    border: 2px solid rgb(255, 255, 255);
    z-index: 1;
    color: white;
  }
  .btn-42:after {
    position: absolute;
    content: "";
    width: 100%;
    height: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    background: rgb(255, 255, 255);
    transition: all 0.3s ease;
  }
  .btn-42:hover {
    color: rgb(0, 0, 0);
  }
  .btn-42:hover:after {
    top: 0;
    height: 100%;
  }
  .btn-42:active {
    top: 2px;
  }  p {
      margin-bottom: 0;
      margin-top: 1.2rem;
      font-size: 0.9rem;
    }
`;

const Installable = () => {

    useEffect(() => {
        window.addEventListener('beforeinstallprompt', e => {
            const btn = document.querySelector('#install');
            if (window.matchMedia('(display-mode: fullscreen)').matches) {
                btn.disabled = true;
                btn.innerHTML = 'Already Installed';
                return e.preventDefault();
            } else {
                btn.onclick = _ => e.prompt();
                return e.preventDefault();
            }
        });

    }, []);

    return (
        <Wrapper>
        <InstallationPageWindow>
            <div>
                <img src={'/apple-icon.png'} alt="icon" />
                <h1>Install AmTim on your Device</h1>
                <button className="btn41-43 btn-42" aria-label="Install App" title="Install App" id="install">Install App</button>
                <p>
                    You can access AmTim conveniently from your home-screen if
                    you install our Progressive Web App. This app is light on your storage,
                    & does not require any special permissions.
                </p>
            </div>
        </InstallationPageWindow>
        </Wrapper>
 )
}



export default Installable