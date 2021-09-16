import classes from "./Team.module.css";
import dev1 from "../assets/dev1.png";
import dev2 from "../assets/dev2.png";
import dev3 from "../assets/dev3.png";
import dev4 from "../assets/dev4.png";
import dev5 from "../assets/dev5.png";
import dev1Opt from "../assets/dev1.webp";
import dev2Opt from "../assets/dev2.webp";
import dev3Opt from "../assets/dev3.webp";
import dev4Opt from "../assets/dev4.webp";
import dev5Opt from "../assets/dev5.webp";
import insta from "../assets/insta.svg";
import wanted from "../assets/wanted.png";
import wantedOpt from "../assets/wanted.webp";
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
        <picture>
          <source srcSet={wantedOpt} type="image/webp" />
          <source srcSet={wanted} type="image/png" />
          <img
            src={wanted}
            className={classes.teamPreview}
            alt="team preview"
          />
        </picture>
        <ul className={classes.grid}>
          <li className={classes.flex}>
            <picture>
              <source srcSet={dev1Opt} type="image/webp" />
              <source srcSet={dev1} type="image/png" />
              <img src={dev1} alt="dev1" />
            </picture>
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
            <picture>
              <source srcSet={dev2Opt} type="image/webp" />
              <source srcSet={dev2} type="image/png" />
              <img src={dev2} alt="dev2" />
            </picture>
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
            <picture>
              <source srcSet={dev3Opt} type="image/webp" />
              <source srcSet={dev3} type="image/png" />
              <img src={dev3} alt="dev3" />
            </picture>
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
            <picture>
              <source srcSet={dev4Opt} type="image/webp" />
              <source srcSet={dev4} type="image/png" />
              <img src={dev4} alt="dev4" />
            </picture>
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
            <picture>
              <source srcSet={dev5Opt} type="image/webp" />
              <source srcSet={dev5} type="image/png" />
              <img src={dev5} alt="dev5" />
            </picture>
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
