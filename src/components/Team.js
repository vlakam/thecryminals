import classes from "./Team.module.css";
import dev1 from "../assets/dev1.png";
import dev2 from "../assets/dev2.png";
import dev3 from "../assets/dev3.png";
import dev4 from "../assets/dev4.png";
import dev5 from "../assets/dev5.png";
import insta from "../assets/insta.svg";
import wanted from "../assets/wanted.png";
const Team = () => {
  return (
    <section id="team">
      <h2>THE PARTNERS IN CRIME</h2>
      {/* <ul className={classes.gridOne}>
                <li>
                    <img src={pick}/>
                </li>
                <li>
                    <img src={pick}/>
                </li>
            </ul> */}
      <div className={classes.team}>
        <img src={wanted} className={classes.teamPreview} />
        <ul className={classes.grid}>
          <li className={classes.flex}>
            <img src={dev1} />
            <div>
              <div className={classes.socialBlock}>
                <a href="https://www.instagram.com/karas0564/" target="_blank">
                  <img src={insta} />
                </a>
              </div>
              <p className={[classes.item, classes.insta].join(" ")}>
                KARAS0564
              </p>
              <p>
                Designer
                <br />
                Tattoo artist
              </p>
            </div>
          </li>
          <li className={classes.flex}>
            <img src={dev2} />
            <div>
              <p className={classes.item}>WILD CAKE</p>
              <p>
                Developer
                <br />
                Creator of Rebel Kids
              </p>
            </div>
          </li>
          <li className={classes.flex}>
            <img src={dev3} />
            <div>
              <p className={classes.item}>LERAND94</p>
              <p>
                Concept creator
                <br />
                Web-developer
              </p>
            </div>
          </li>
        </ul>
        <ul className={[classes.grid, classes.secondGrid].join(" ")}>
          <li className={classes.flex}>
            <img src={dev4} />
            <div>
              <p className={classes.item}>XROUTX</p>
              <p>
                Project manager
                <br />
                Marketing
              </p>
            </div>
          </li>
          <li className={classes.flex}>
            <img src={dev5} />
            <div>
              <p className={classes.item}>FLOZEE</p>
              <p>UI / UX designer</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Team;
