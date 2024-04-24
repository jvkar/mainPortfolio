import bootstrap from './icons/bootstrap.png'
import css from './icons/css.png'
import express from './icons/express.png'
import git from './icons/git.png'
import github from './icons/github.png'
import html from './icons/html.png'
import js from './icons/js.png'
import materialui from './icons/materialUi.png'
import mongodb from './icons/mongodb.png'
import mysql from  './icons/mysql.png'
import nodejs from './icons/nodejs.png'
import react from './icons/react.png'
import tailwind from './icons/tailwind.png'
import vscode from './icons/vscode.png'
import '../styles/Skills.css'
const Skills = () => {
    return ( 
        <div className="Skills" id='skills'>
            <h1 style={{color:"white"}}>My Skills:</h1>
            <div className="Skills-icons">
                <img src={html} alt="html"/>
                <img src={css} alt="css"/>
                <img src={js} alt="js"/>
                <img src={nodejs} alt="nodejs"/>
                <img src={express} alt="express"/>
                <img src={react} alt="react"/>
                <img src={mongodb} alt="mongodb"/>
                <img src={mysql} alt="mysql"/>
                <img src={tailwind} alt="tailwind"/>
                <img src={bootstrap} alt="bootstrap"/>
                <img src={git} alt="git"/>
                <img src={github} alt="github"/>
                <img src={materialui} alt="materialui"/>
                <img src={vscode} alt="vscode"/>
            </div>
        </div>
     );
}
 
export default Skills;