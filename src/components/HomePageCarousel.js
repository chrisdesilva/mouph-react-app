import React from 'react';
import { Button, Col, Grid, Row, Thumbnail } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../styles/homepage.css'


const HomePage = () => (
  <Grid className="fluid">
  <Row>
    <Col xs={12} md={4}>
      <Thumbnail className="homePhoto" src="../../images/LIP.jpg" alt="LIP band photo">
        <h3>LIP</h3>
        <div className="homeButtons">
          <NavLink to="/lip" className="navLink" activeClassName="is-active"><Button bsStyle="primary">Bio Page</Button></NavLink>
        </div>
      </Thumbnail>
    </Col>
    <Col xs={12} md={4}>
      <Thumbnail className="homePhoto" src="../../images/BanistersBus-min.jpg" alt="The Banisters band photo">
        <h3>The Banisters</h3>
        <div className="homeButtons">
        <NavLink to="/thebanisters" className="navLink" activeClassName="is-active"><Button bsStyle="primary">Bio Page</Button></NavLink> 
        </div>
      </Thumbnail>
    </Col>
    <Col xs={12} md={4}>
      <Thumbnail className="homePhoto" src="../../images/YouthBW.jpg" alt="Youth & Canvas Band Photo">
        <h3>Youth & Canvas</h3>
        <div className="homeButtons">
        <NavLink to="/youthandcanvas" className="navLink" activeClassName="is-active"><Button bsStyle="primary">Bio Page</Button></NavLink>
        </div>
      </Thumbnail>
    </Col>
  </Row>
  </Grid>
)



export default HomePage
