import React from 'react';
import '../App.css';
import WelcomeHeader from './Welcome/WelcomeHeader'
import WelcomePrimary from './Welcome/WelcomePrimary'

export default function Welcome(props) {
    return (
        <div>
            <WelcomeHeader />
            <WelcomePrimary 
            name = {props.name} 
            mail = {props.mail} 
            setName = {props.setName} 
            setMail = {props.setMail} 
            confirmLogin = {props.confirmLogin}
            />

        </div>
       
    )
}

