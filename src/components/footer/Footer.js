import React, {useState} from 'react'
import { useMediaQuery } from 'react-responsive'
import classes from './footer.module.scss'
import phone from '../../img/phone.svg'
import email from '../../img/email.svg'

const Footer = () => {
    const isTablet = useMediaQuery({ maxWidth: 1024 })
    const [submitted, setSubmitted] = useState(false);
    const buttonText = submitted ? 'Отправлено' : 'Отправить';
    const submitClassName = submitted ? `${classes.form_button} ${classes.form_button_submitted}` : `${classes.form_button}`;

    const handleSubmit = event => {
        event.preventDefault();
        console.log(submitted);
        setSubmitted(true);
    }
    return (
        <footer className={classes.footer}>
            {isTablet ?
            <>
            <div className={classes.footer_form}>
            <p>Оставьте свой email и мы свяжемся с Вами</p>
            <form className={classes.footer_form__container} onSubmit={handleSubmit}> 
                <input type="email" placeholder='email'/>
            <button className={submitClassName}type="submit">{buttonText}</button>
            </form>
            </div>
            <div className={classes.footer_contacts}>
                <div className={classes.footer_phone}>
                    <img src={phone} alt="phone"/>
                    <p>+7(900)111 11 11</p>
                </div>
                <div className={classes.footer_email}>
                    <img src={email} alt="email"/>
                    <p>cogo_digital@mail.ru</p>
                </div>
            </div>
            </> :
            <>
            <div className={classes.footer_contacts}>
                <div className={classes.footer_phone}>
                    <img src={phone} alt="phone"/>
                    <p>+7(900)111 11 11</p>
                </div>
                <div className={classes.footer_email}>
                    <img src={email} alt="email"/>
                    <p>cogo_digital@mail.ru</p>
                </div>
            </div>
            <div className={classes.footer_form}>
            <p>Оставьте свой email и мы свяжемся с Вами</p>
            <form className={classes.footer_form__container} onSubmit={handleSubmit}> 
                <input type="email" placeholder='email'/>
            <button className={submitClassName}type="submit">{buttonText}</button>
            </form>
            </div>
            </>
            }
            
        </footer>
    )
}

export default Footer;