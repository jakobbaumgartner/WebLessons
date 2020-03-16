import React from 'react';


export default function MainHeader(props) {
    return (
        <header id='mainHeader'>
            <table id='mainheadertable'>
                <tr id='mainheadertablerow'>
                    <td id='mainheadertablecolumn1'>
                        <img id='hamburgersmall' src='hamburgersmall.png'></img>
                        <button id='questionsbutton'>Ask!</button>
                    </td>
                    <td id='mainheadertablecolumn2'>
                        <button id='answersbutton'>Answers</button>

                    </td>
                </tr>
            </table>
        </header>
    )
}
