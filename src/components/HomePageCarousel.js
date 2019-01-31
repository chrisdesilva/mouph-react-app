import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/homepage.css'
import { Parallax } from 'react-parallax';

class HomePage extends React.Component{
  render() {

    const insideStyles = {
      position: "absolute",
      top: "10%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      fontSize: "2em",
      textAlign: "center",
      color: "white",
      width: "10em"
    };

    return (
      <div>
      <Parallax
          blur={{ min: -15, max: 15 }}
          bgImage={require('../images/LIP.jpg')}
          bgImageAlt="LIP"
          strength={200}
      >
          <div style={{ height: '700px' }}>
            <NavLink style={insideStyles} to={'/lip'} className="navLink" activeClassName="is-active">LIP</NavLink>
          </div>
      </Parallax>
      <Parallax
          blur={{ min: -15, max: 15 }}
          bgImage={require('../images/BanistersBus-min.jpg')}
          bgImageAlt="The Banisters"
          strength={200}
      >
        <div style={{ height: '700px' }}>
          <NavLink style={insideStyles} to={'/thebanisters'} className="navLink" activeClassName="is-active">The Banisters</NavLink>
        </div>
      </Parallax>
      <Parallax
          blur={{ min: -15, max: 15 }}
          bgImage={require("../images/YouthColor.jpg")}
          bgImageAlt="Youth & Canvas"
          strength={300}
      >
        <div style={{ height: '700px' }}>
          <NavLink style={insideStyles} to={'/youthandcanvas'} className="navLink" activeClassName="is-active">Youth & Canvas</NavLink>
        </div>
      </Parallax>
      </div>
    )
  }
} 

export default HomePage
