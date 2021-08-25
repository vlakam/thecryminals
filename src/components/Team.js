import classes from "./Team.module.css";
import pick from "../assets/pick.png";
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
            <img src={pick} />
            <div>
              <p className={classes.item}>KARAS0564</p>
              <p>
                Designer
                <br />
                Tattoo artist
              </p>
            </div>
          </li>
          <li className={classes.flex}>
            <img src={pick} />
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
            <img src={pick} />
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
            <img src={pick} />
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
            <img src={pick} />
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
