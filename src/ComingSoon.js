import React, {useState} from 'react';
import { useMediaQuery } from 'react-responsive';
import {Link} from 'react-router-dom'

import Header from './components/header'
import Footer from './components/footer'

import classes from './styles/pages/ComingSoon.module.scss'

import MainPic from './img/main_pic.svg'
import Telegram from './img/telegram.svg'

function App() {
  const isTablet = useMediaQuery({ maxWidth: 1024 })
  const [toggleLanguage, setToggleLanguage] = useState(false);

  const switchLanguages = () => {
    setToggleLanguage(!toggleLanguage);
  }
  return (
    <div className={classes.container}>
      <Header onClick={switchLanguages} active={toggleLanguage}/>
      <main className={classes.main}>
        <div className={classes.main_img}>
          <img src={MainPic} alt="main_image"/>
        </div>
        <div className={classes.main_info}>
          <div className={classes.main_info__title}>
            {!isTablet ? <h1><div>Объединяем </div>компании и исполнителей в ИТ для <span>достижения общего успеха</span></h1> 
            : <h1>Объединяем компании и исполнителей в ИТ для <span>достижения общего успеха</span></h1>}
          </div>
          <div className={classes.main_info__presentation}>
            <p>Узнать более детально о нашей компании вы можете, скачав презентацию</p>
            <p>Хотите стать партнером проекта? Заполните форму по ссылке</p>
            <div className={classes.main_info__buttons}>
              <a href="/presentation.pdf" className={classes.presentation_btn} download>
                <span>Скачать презентацию</span>
                </a>
              <a href="#">Заполнить форму</a>
            </div>
          </div>
          <div className={classes.main_info__telegram}>
            <p>Наш telegram-канал c актуальными вакансиями</p>
            <a href="t.me/gocollaborate">
              <img src={Telegram} alt="telegram"/>
              <p>t.me/gocollaborate</p>
            </a>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
