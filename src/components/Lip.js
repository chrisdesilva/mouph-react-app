import React from 'react';
import { Grid, Image } from 'react-bootstrap';
import '../styles/bandPage.css';

const Lip = () => {
  return (
    <Grid>
      <h1 className="bandHeader">LIP</h1>
      <Image className="bandPhoto" src={require('../images/LIP.jpg')} responsive/>
      <main className="bandBio">
        <p>
        Multi-dimensioned and melancholy as midnight, LIP’s music weaves through an intense affair of confession booth candor and Radiohead-esque tempo. Their sound evokes a feeling of looking inward and wrestling with the truth while coming unglued. Distinctly rehearsed and constructed, each song takes you through cosmic introspection and reminds you of what it feels like to get lost in someone else.
        </p>
        <p>
        Formed in 2014 by Austin, Texas natives, Coleman Meola (drums) and Connor Tester (bass), the band molded a backdrop of pensively polished rhythm. By late 2015, Philly-bred Jerome Vivino came into the picture as the lead guitarist to shred gauzy electric waves, thus solidifying the kindred three’s feverish pursuit of rock. The band knew they had a chemistry packed with potential, so they recruited Nashville-born singer-songwriter Luke Bellet (vocals/keys/guitars) to bring shape-shifting lyrics and a voice to their sound. Honed by years of living and rehearsing in the same Austin house, LIP stays authentically rooted in the rock’s traditions while bending their musical mission with experimental arrangements.
        </p>
      </main>
      <div className="spotifyPlayer" >
        <iframe title="LIP Spotify player" src="https://open.spotify.com/embed/artist/0KzWIBt5mAKgTCA0toB0uc" width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
      <p className="bandWebsite"><a href="http://www.liptheband.com" target="_blank" rel="noopener noreferrer">LIPTHEBAND.COM</a></p>
    </Grid>
    )
  };

export default Lip;