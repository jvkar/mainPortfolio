import '../styles/projects.css'
import cdec from '../images/cdec.jpg'
import lrdsi from '../images/LRDSI.jpg'
import pass from '../images/passcode.jpg'
import sonalgaz from '../images/Sonelgaz.jpg'
import ProjectBtn from './buttons/projectBtn'
import { Link } from 'react-router-dom'
const Projects = () => {
    return ( 
        <div className="Project-section" id='projects'>
            <h1 style={{color:"white"}}>My projects : </h1>
            <div className='Card'>
                <img src={sonalgaz} alt=""/>
                <div>
                    <h1>SONALGAZ WEBSITE</h1>
                    <span>2024</span>
                    <Link to={"https://github.com/jvkar/sonalgaz"}>
                    <ProjectBtn/>
                    </Link>
                </div>
            </div>
            <div className='Card'>
                <img src={lrdsi} alt=""/>
                <div>
                    <h1>Laboratory for Research in the Development of Computer Systems (LRDSI)</h1>
                    <span>2023</span>
                    <Link to={"https://github.com/jvkar/LaboratoireDeRechercheLRDSI"}>
                    <ProjectBtn/>
                    </Link>
                    
                </div>
            </div>
            <div className='Card'>
                <img src={cdec} alt=""/>
                <div>
                    <h1>CDEC CLUB WEBSITE</h1>
                    <span>2023</span>
                    <Link to={"https://github.com/jvkar/cdec"}>
                    <ProjectBtn/>
                    </Link>
                </div>
            </div>
            <div className='Card'>
                <img src={pass} alt=""/>
                <div>
                    <h1>Passcode generator website</h1>
                    <span>2022</span>
                    <Link to={"https://github.com/jvkar/codegenerator"}>
                    <ProjectBtn/>
                    </Link>                
                    </div>
            </div>

        </div>
     );
}
 
export default Projects;