import React from 'react';
import { Grid, Image } from 'react-bootstrap';
import '../styles/bandPage.css'

const YouthAndCanvas = () => {
  return (
    <Grid>
      <h1 className="bandHeader">Youth & Canvas</h1>
      <Image className="bandPhoto" src="./../../images/YouthColor.jpg" responsive/>
      <main className="bandBio">
        <p>
          Youth & Canvas formed in 2016 after Cash (guitar/vocals) and Shane (drums) moved to Austin from St. Louis and St. Paul, respectively, to persue music. Cash posted an ad looking for a drummer, Shane responded, and the rest is history. Their first EP was released in May of 2017, and their debut album was wrapped up in June the following year. They’ve made a name for themselves through widespread social media promotions, touring as much as possible, and putting on lively, foot-stomping performances. Their rowdy, gritty, fuzzy, hard rock style is influenced by such bands as The White Stripes, DFA1979, The Graveltones, Black Pistol Fire, and has been described as “garage rock gut-punched by the blues.”
        </p>
      </main>
      <div className="spotifyPlayer" >
      <iframe title="Youth & Canvas Spotify player" src="https://open.spotify.com/embed/artist/3eCLCmoMffc5EdqAdOhE3Y" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
      <p className="bandWebsite"><a href="https://www.facebook.com/youthandcanvas/" target="_blank" rel="noopener noreferrer">YOUTHANDCANVAS.COM</a></p>
    </Grid>
    )
  };

export default YouthAndCanvas;