import React from 'react';

function buttonRedDown() {
    console.log('buttonDOWN')
    document.getElementById('welcomeSubmit').style.backgroundColor = 'rgb(204, 21, 21)'
}

function buttonRedUp() {
    console.log('buttonUP')
    document.getElementById('welcomeSubmit').style.backgroundColor = 'rgba(223, 63, 63, 1)'
}

export default function WelcomePrimary(props) {
    return (
        <section id = 'welcomePrimary'>
            <h1>Dobrodošel na predavanju. Prosim vpiši se.</h1>
            <form>
                <input type="text" name="name" className="welcomeInput" onChange = {props.setName} placeholder="Ime za prikaz."></input>
                <br></br>
                <input type="email" name="name" className="welcomeInput" onChange = {props.setMail} placeholder="Univerzitetni email."></input>
                <br></br>
                <input type="button" id="welcomeSubmit" value ="POTRDI" onClick = {props.confirmLogin} onMouseEnter = {buttonRedDown} onMouseLeave = {buttonRedUp}></input>
            </form>


        </section>
    )

}