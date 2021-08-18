import classes from './Team.module.css'
import pick from '../assets/pick.png'
const Team = () => {
    return(
        <section id='team'>
            <h2>The Team</h2>
            {/* <ul className={classes.gridOne}>
                <li>
                    <img src={pick}/>
                </li>
                <li>
                    <img src={pick}/>
                </li>
            </ul> */}
            <ul className={classes.grid}>
                <li className={classes.flex}>
                    <img src={pick}/>
                    <div>
                        <p>KARAS 0564</p>
                        <p>Designer, tattoo artist</p>
                    </div>
                </li>
                <li className={classes.flex}>
                    <img src={pick}/>
                    <div>
                        <p>WILD CAKE</p>
                        <p>Dev, creator of Rebel Kids</p>
                    </div>
                </li>
                <li className={classes.flex}>
                    <img src={pick}/>
                    <div>
                        <p>LERAND94</p>
                        <p>Concept creator, web-developer</p>
                    </div>
                </li>
                <li className={classes.flex}>
                    <img src={pick}/>
                    <div>
                        <p>XROUTX</p>
                        <p>Community manager, marketing</p>
                    </div>
                </li>
                <li className={classes.flex}>
                    <img src={pick}/>
                    <div>
                        <p>FLOZEE</p>
                        <p>UI / UX designer</p>
                    </div>
                </li>
            </ul>
        </section>
    );
}
export default Team;