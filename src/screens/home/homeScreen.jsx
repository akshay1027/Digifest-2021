import { Grid, Box, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

import { Fade } from 'react-reveal';

import dance from '../../assests/dance.jpeg';
import fashion from '../../assests/fashion.jpeg';
import heritage from '../../assests/heritage.jpeg';
import painting from '../../assests/painting.jpeg';
import picture from '../../assests/picture.jpeg';
import singing from '../../assests/singing.jpeg';
import variety from '../../assests/variety.jpeg';
import music from '../../assests/music.jpeg';

import animationData4 from '../../assests/4.json';
import Lottie from 'react-lottie';

import '../../stylesheet/homeScreen.css';

const homeScreen = () => {
    const defaultOptions4 = {
        loop: true,
        autoplay: true,
        animationData: animationData4,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <div>
            <Fade bottom duration={400}>
                <Box mt={10} py={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className='title'>
                    Digifest 2021
                </Box>
                <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className='sub-title'>
                    Presented by PTU s cultural club
                </Box>
            </Fade>
            <Fade bottom duration={400}>
                <Box py={3} className='date-event'>
                    4 August 2021 - 15 August 2021
                </Box>
            </Fade>
            <Fade bottom duration={400}>
                <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '-10px 0px' }}>
                    <Lottie
                        options={defaultOptions4}
                        height={300}
                        width={300}
                    />
                </Box>
            </Fade>
            <Fade bottom duration={400}>
                <Box pt={8} pb={7} className='title'>
                    Events
                </Box>
            </Fade>
            <Box>
                <Grid class="row">
                    <div class="card">
                        <div class="card-body">
                            <h5 style={{ marginBottom: '50px' }}>Culrural Heritage</h5>
                            <img src={heritage} alt='image' loading="lazy" style={{ objectFit: 'cover', width: '300px', height: '450px', boxShadow: '0 0 25px -10px white' }} />
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h5 style={{ marginBottom: '50px' }}>Instrumental Music & Band</h5>
                            <img src={music} alt='image' loading="lazy" style={{ objectFit: 'cover', width: '300px', height: '450px', boxShadow: '0 0 25px -10px white' }} />
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h5 style={{ marginBottom: '50px' }}>Singing (Solo & Group)</h5>
                            <img src={singing} alt='image' loading="lazy" style={{ objectFit: 'cover', width: '300px', height: '450px', boxShadow: '0 0 25px -10px white' }} />
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h5 style={{ marginBottom: '50px' }}>Painting on a Topic </h5>
                            <img src={painting} alt='image' loading="lazy" style={{ objectFit: 'cover', width: '300px', height: '450px', boxShadow: '0 0 25px -10px white' }} />
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h5 style={{ marginBottom: '50px' }}>Take a Picture </h5>
                            <img src={picture} alt='image' loading="lazy" style={{ objectFit: 'cover', width: '300px', height: '450px', boxShadow: '0 0 25px -10px white' }} />
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h5 style={{ marginBottom: '50px' }}>Variety Show</h5>
                            <img src={variety} alt='image' loading="lazy" style={{ objectFit: 'cover', width: '300px', height: '450px', boxShadow: '0 0 25px -10px white' }} />
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h5 style={{ marginBottom: '50px' }}>Fashion Parade </h5>
                            <img src={fashion} alt='image' loading="lazy" style={{ objectFit: 'cover', width: '300px', height: '450px', boxShadow: '0 0 25px -10px white' }} />
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h5 style={{ marginBottom: '50px' }}>Dance (Solo & Group)</h5>
                            <img src={dance} alt='image' loading="lazy" style={{ objectFit: 'cover', width: '300px', height: '450px', boxShadow: '0 0 25px -10px white' }} />
                        </div>
                    </div>
                </Grid>
            </Box>
            <Fade bottom duration={400}>
                <Box pt={8} className='footer-links'>
                    For event timings and more Details
                </Box>
                <Box pt={1} pb={4} className='footer'>
                    <a href='https://drive.google.com/file/d/105UHv0B8IYeCrJmF6_C3WkPL1ZGOCUEP/view?usp=sharing' target='_blank' style={{ color: 'white' }}>View Brochure</a>
                </Box>
            </Fade>
            <Fade bottom duration={400}>
                <Box pt={7} pb={7} className='footer-links' style={{ background: 'black' }}>
                    Copyright @ Digifest2021
                    <br />
                    <br />
                    Made with ❤ by <a href='https://www.instagram.com/akshay_rr10/' target='_blank' style={{ color: 'white' }}>Akshay R R</a>
                </Box>
            </Fade>
        </div>
    );
};

export default homeScreen;
