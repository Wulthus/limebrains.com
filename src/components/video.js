import React from 'react';
import styled from 'styled-components'
import { mobileLandscape } from './responsive';

const TextGradient = styled.div`
  color: ${({start}) => start};
  background: ${({start, end}) => `-webkit-linear-gradient(5deg, ${start || '#8db7d7'}, ${end || '#febc77'});`}
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const TextWrapper = styled.div`
  position:absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: ${({start, end}) => `-webkit-linear-gradient(5deg, ${start || 'rgba(141,183,215, 0.1)'}, ${end || 'rgba(254, 188, 119, 0.2)'});`}
  backdrop-filter: blur(4px);
  h1 {
    font-size: 76px;
    display: block;
    font-weight: 500;
    user-select: none;
    margin-bottom: 3rem;
    
    @media (max-width: ${mobileLandscape}px) {
      font-size: 30px;
    }
  }
  h3 {
    font-size: 30px;
    font-weight: 300;
    margin-bottom: 3rem;
    
    @media (max-width: 1000px) {
      font-size: 16px;
      margin-bottom: 2rem;
    }
  }
`

const VideoWrapper = styled.div`
  position: relative;
  top: 0;
  width: 100%;
  height: calc(100vh - 100px);
  line-height: 0;

  video {
    position: absolute;
    left: 50%; /* % of surrounding element */
    top: 50%;
    transform: translate(-50%, -50%); /* % of current element */
    width: 100%;
    height: 100%;
    transition: opacity 0.5s;
    object-fit: cover;
  }
`

const Logos = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.8);
  
  padding-top: 1rem;
  padding-bottom: 1rem;
  
  img {
    width: 200px;
    margin-left: 2rem;
    margin-right: 2rem;
  }
  
  @media (max-width: ${mobileLandscape}px) {
    background: rgba(255, 255, 255, 1);
    bottom: 0;
    img {
      width: 100px;
      margin-left: 1rem;
      margin-right: 1rem;
    }
  }
`

const HeaderVideo = ( ) => {
  return (

    <VideoWrapper>
      <TextWrapper
        start={'rgb(0,0,0, 0.3)'}
        end={'rgba(0, 0, 0, 0.4)'}
      >
        <TextGradient
          start={'#ffffff'}
          end={'#99c1b7'}
        >
          <h1>
            Lime Brains
          </h1>
        </TextGradient>
        <TextGradient
          start={'#99c1b7'}
          end={'#ffffff'}
        >
          <h3>
            Software house where business questions.
          </h3>
          <h3>
            Meet software answers.
          </h3>
        </TextGradient>
      </TextWrapper>

      <video
        playsInline
        muted
        loop
        preload="auto"
        poster="https://storage.cloud.google.com/static-voxm/04791ff99c7f7b0de02c6544bb66f04a.jpg"
        autoPlay="autoplay"
      >
          <source
            data-src="https://storage.cloud.google.com/static-voxm/media.io_limebrains-header.webm"
            src="https://storage.cloud.google.com/static-voxm/media.io_limebrains-header.webm"
            type="video/webm"
          />
          <source
            data-src="https://storage.cloud.google.com/static-voxm/b33bb9360a08ef81f43e7e91d0a89f0b.mp4"
            src="https://storage.cloud.google.com/static-voxm/b33bb9360a08ef81f43e7e91d0a89f0b.mp4"
            type="video/mp4"
          />
          <source
            data-src="https://storage.cloud.google.com/static-voxm/media.io_limebrains-header.ogv"
            src="https://storage.cloud.google.com/static-voxm/media.io_limebrains-header.ogv"
            type="video/mp4"
          />
          Your browser does not support the video tag.
      </video>

      <Logos>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Mazars_logo.svg/1280px-Mazars_logo.svg.png' alt=''/>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Nokia_wordmark.svg/1280px-Nokia_wordmark.svg.png' alt=''/>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Siemens-logo.svg/1280px-Siemens-logo.svg.png' alt=''/>
      </Logos>

    </VideoWrapper>
  )
}

export default HeaderVideo;
