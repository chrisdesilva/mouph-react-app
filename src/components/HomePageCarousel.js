import React from 'react';
import { Button, Col, Grid, Row, Thumbnail } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Image from 'react-image-resizer';

const images = {
    height: '100px'
}


const HomePageCarousel = (props) => (
  <Grid>
  <Row>
    <Col xs={12} md={4}>
      <Thumbnail src="../../images/LIP.jpg" alt="LIP band photo">
        <h3>LIP</h3>
        <p>Description</p>
        <p>
          <NavLink to="/lip" className="navLink" activeClassName="is-active"><Button bsStyle="primary">Bio Page</Button></NavLink>
          &nbsp;
          <Button bsStyle="default">Contact</Button>
        </p>
      </Thumbnail>
    </Col>
    <Col xs={12} md={4}>
      <Thumbnail src="../../images/BanistersBus-min.jpg" alt="The Banisters band photo">
        <h3>The Banisters</h3>
        <p>Description</p>
        <p>
        <NavLink to="/thebanisters" className="navLink" activeClassName="is-active"><Button bsStyle="primary">Bio Page</Button></NavLink> 
          &nbsp;
          <Button bsStyle="default">Contact</Button>
        </p>
      </Thumbnail>
    </Col>
    <Col xs={12} md={4}>
    <div style={images}>
      <Thumbnail src="../../images/YouthBW.jpg" alt="Youth & Canvas Band Photo">
    
        <h3>Youth & Canvas</h3>
        <p>Description</p>
        <p>
        <NavLink to="/youthandcanvas" className="navLink" activeClassName="is-active"><Button bsStyle="primary">Bio Page</Button></NavLink>
          &nbsp;
          <Button bsStyle="default">Contact</Button>
        </p>
      </Thumbnail>
      </div>
    </Col>
  </Row>
</Grid>
)



export default HomePageCarousel