import React from 'react';
import { Button, Col, Grid, Row, Thumbnail } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../styles/homepage.css'


class HomePage extends React.Component{
  render() {

    const thumbnailInfo = [
      {
        src: "../../images/LIP.jpg",
        alt: "LIP playing around in front of a wall",
        name: "LIP",
        link: "/lip"
      },
      {
        src: "../../images/BanistersBus-min.jpg",
        alt: "The Banisters band photo",
        name: "The Banisters",
        link: "/thebanisters"
      },
      {
        src: "../../images/YouthBW.jpg",
        alt: "Youth & Canvas Band Photo",
        name: "Youth & Canvas",
        link: "/youthandcanvas"
      }
    ]

    return (
      <Grid className="fluid">
        <Row>
          {thumbnailInfo.map((thumbnail) => {
            return <Col key={thumbnail.link} xs={12} md={4}>
            <Thumbnail className="homePhoto" src={thumbnail.src} alt={thumbnail.alt}>
              <h3>{thumbnail.name}</h3>
                <div className="homeButtons">
                  <NavLink to={thumbnail.link} className="navLink" activeClassName="is-active"><Button bsStyle="primary">Bio Page</Button></NavLink>
                </div>
            </Thumbnail>
            </Col>
          })}
        </Row>
      </Grid>
    )
  }
} 

export default HomePage
