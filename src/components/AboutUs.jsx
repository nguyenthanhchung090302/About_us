import React, { Component } from 'react';
import Content from './Content';
import Endyou from './Endyou';
import Navb from './Navb';
import Ourteam from './Ourteam';

function AboutUs() {
    return ( 
        <div className='aboutus'>
        <Navb/>
        <Content/>
        <Ourteam/>
        <Endyou/>
        </div>
     );
}

export default AboutUs;