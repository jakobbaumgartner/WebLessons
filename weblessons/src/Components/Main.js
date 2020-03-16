import React from 'react';
import '../App.css';
import MainPrimary from './Main/MainPrimary'
import MainSecundary from './Main/MainSecundary'

import MainHeader from './Main/MainHeader'

export default function Main(props) {

    return (
        <div>
            <MainHeader />
            <div id="holder">
                <div id='primary'>
                    <MainPrimary />
                </div>
                <div id='secondary'>d</div>
            </div>
        </div>

    )
}