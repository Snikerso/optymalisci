import './view.css';
import { Link } from "react-router-dom";

export const BartusView = ({back, title}) => {
    return <div className='bartusDiv'>
    <div className='bartusBackground'></div>
    <h1 className='bartusTitle'>{title}</h1>
    <Link to={back.toSnikers} className={'bartusLink'}>Back to {back.textSnikers}</Link><br></br>
    <Link to={back.toKanonashi} className={'bartusLink'}>Back to {back.textKanonashi}</Link><br></br>
    <Link to={back.toHome} className={'bartusLink'}>Back to {back.textHome}</Link><br></br>
    </div>
};