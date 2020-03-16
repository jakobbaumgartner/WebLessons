import React from 'react';
import '../App.css';
import Welcome from './Welcome'
import Main from './Main'

export default function Application(props) {

    if (props.page == 'welcome') {

        var show = (<Welcome
            name={props.name}
            mail={props.mail}
            setName={props.setName}
            setMail={props.setMail}
            confirmLogin={props.confirmLogin}
        />)
    }

    if (props.page == 'main') {

        var show = (<Main
            name={props.name}
            mail={props.mail}
            setName={props.setName}
            setMail={props.setMail}
            confirmLogin={props.confirmLogin}
        />)
    }

    return (
        <section id="Application">

            {show}

        </section>
    )
}