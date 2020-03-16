import React from 'react';
import '../App.css';
import MainPrimary from './Main/MainPrimary'

import MainHeader from './Main/MainHeader'

export default function Main (props) {

    return (
        <div>
        <MainHeader />
        <div className='primary'>
            <MainPrimary />
            <p>dsd</p>
        </div>
        <div className = 'secondary'>d</div>
        </div>
    )
}