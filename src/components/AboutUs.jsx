import React, { Component } from 'react';
import Content from './Content';
import Navb from './Navb';
import Ourteam from './Ourteam';

function AboutUs() {
    return ( 
        <div className='aboutus'>
        <Navb/>
        <Content/>
        <Ourteam/>
        </div>
     );
}

export default AboutUs;