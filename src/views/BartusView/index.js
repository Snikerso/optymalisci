import './view.css';
import { Link } from "react-router-dom";

export const BartusView = ({back, title}) => {
    return <div className='bartusDiv'>
    <h1>{title}</h1>
    <Link to={back.toSnikers}>Back to {back.textSnikers}</Link><br></br>
    <Link to={back.toKanonashi}>Back to {back.textKanonashi}</Link><br></br>
    <Link to={back.toHome}>Back to {back.textHome}</Link><br></br>
    </div>
};