import classes from './Preview.module.css'
import logo from '../assets/logo.png'
import wrapper from '../assets/wrapper.png'

const Preview = () => {
    return(
        <div className={classes.wrapperImg} style={{backgroundImage : `url(${wrapper})`}}>
            <div className={classes.content}>
                <img src ={logo}/>
                <a href="#">MINT YOUR CRYMINAL</a>
            </div>
        </div>
    );
}

export default Preview