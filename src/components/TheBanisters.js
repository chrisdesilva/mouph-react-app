import React from 'react';
import { Grid, Image } from 'react-bootstrap';
import '../styles/bandPage.css'

const TheBanisters = () => {
  return (
    <Grid>
      <h1 className="bandHeader">The Banisters</h1>
      <Image className="bandPhoto" src="./../../images/BanistersBus-min.jpg" responsive/>
      <main className="bandBio">
        <p>
          The Banisters are a super decent rock band from Austin, Texas. Friends and work colleagues have described them as "actually pretty good" and "better than I expected" while promising that despite the recent string of obligatory grandparent birthday celebrations, they'd definitely come to the next show. The songwriting core started in the summer of 2015 as a mix of co-workers and mutual acquaintances. Blending punk, blues, and psych-rock influences, the fledgling band soon found themselves where most bands unfortunately find themselves- on Craigslist, seeking drums and bass. Netting lukewarm and confusing results on Tinder, the band found solace in the words of Nicholas Sparks, "Love is like the wind, you can't see it, but you can feel it."
        </p>
        <p>
          In the winter of 2016, The Banisters felt it. They successfully filled out their rhythm section and began playing shows all around Austin. They’ve since been invited to play with bands in Houston, San Antonio, San Marcos, and the DFW area. Their energetic performances and irresistible rock jams have brought them to various festivals including SXSW and Deep Ellum Arts Fest. The band has been featured on KUTX's Song of the Day and was recently awarded The Deli Magazine’s Austin Emerging Artist of the Month.
        </p>
      </main>
      <div className="spotifyPlayer" >
      <iframe title="The Banisters Spotify player" src="https://open.spotify.com/embed/user/12949512/playlist/49FtTW6xInKhHS2RFHI6q9" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
      <p className="bandWebsite"><a href="http://www.thebanistersmusic.com" target="_blank" rel="noopener noreferrer">THEBANISTERS.COM</a></p>
    </Grid>
    )
  };

export default TheBanisters;