import React from 'react';
import { Grid, Image } from 'react-bootstrap'

const Lip = () => {
  return (
    <Grid>
      <h1 className="bandHeader">LIP</h1>
      <Image className="bandPhoto" src="./../../images/LIP.jpg" responsive/>
      <p className="bandBio">Formed in Austin, Texas, LIP is a contemporary rock band influenced by the likes of the Beatles, Led Zeppelin, Pink Floyd, Radiohead, and many others. Austin natives Coleman Meola (drums) and Connor Tester (bass/vocals) met in 2013. A year later, Connor filled a vacancy in Coleman’s place of residence. Affectionately referred to as “The Bone Zone” or “BZ”, this house was a proverbial East Austin gem, frequented by local musicians to jam and party. Connor and Coleman focused their energy on locking in a tight rhythm section and in late 2015, were introduced to recent Philadelphia transplant and Berklee graduate Jerome Vivino (lead guitar/vocals). It didn’t take long before the three musicians knew they had something special in the works. Thus, LIP was born. After 6 months of progress, they felt as though they needed another member to round out the sound. Jerome knew the perfect friend for the job, Nashville singer-songwriter Luke Bellet (lead vocals/keys/rhythm guitar). After months of rehearsing at the BZ, the band recorded and produced their debut, self-titled EP. Shortly after, the band relocated to South Austin and the BZ was demolished for redevelopment. After releasing the EP in late 2017, LIP immediately began work on their first full-length album.</p>
      <div className="spotifyPlayer" >
        <iframe src="https://open.spotify.com/embed/artist/0KzWIBt5mAKgTCA0toB0uc" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
      <p className="bandWebsite"><a href="http://www.liptheband.com">LIPTHEBAND.COM</a></p>
    </Grid>
    )
  };

export default Lip;