import React from "react"
import "./Home.css"
// import hero from "../pic/hero.png"
// import skill1 from "../pic/skill1.png"
import skilll2 from "../pic/skilll2.png"
import skill3 from "../pic/skill3.png"
import foto from "../pic/foto.png"
import skill4 from "../pic/skill4.png"
import skill5 from "../pic/skill5.png"
import instagram from "../pic/instagram.png"
import twitter from "../pic/twitter.png"
import linkedin from "../pic/linkedin.png"
import css from "../pic/css.png"
import laravel from "../pic/laravel.png"
import wordpress from "../pic/wordpress.png"
import whatsapp from "../pic/whatsapp.png"
import php from "../pic/php.png"
// import php from "..pic/php.png"


import { Typewriter } from "react-simple-typewriter"

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME TO MY SITE</h3>
            <h1>
              Hi, I'm <span>Muhammad Rifqi Akhdan</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter words={[" Web Developer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>

            <p>Hi, introduce my name is muhammad rifqi akhdan adhie, i am an undergraduate student at Mercu Buana University, and i come from the Informatics Engineering Department. I have an interest and talent in website development. have experience in frontend development using html css and java script.</p>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND WITH ME</h4>
                <div className='button'>
                <a href="https://www.instagram.com/mmuhmmdrifqiidhn/">
                  <button className='btn_shadow'>
                    <img src={instagram} alt='' />
                  </button>
                </a>
                <a href="www.linkedin.com/in/mhmmdrifqiakhdan20/">
                <button className='btn_shadow'>
                  <img src={twitter} alt='' />
                </button>
                </a>
                <a href="https://www.linkedin.com/in/mhmmdrifqiakhdan20/">
                <button className='btn_shadow'>
                  <img src={linkedin} alt='' />
                </button>
                </a>
                <button className='btn_shadow'>
                  <img src={whatsapp} alt='' />
                </button>
                </div>
              </div>
              <div className='col_1'>
                <h4>BEST SKILL ON</h4>
                <button className='btn_shadow'>
                  <img src={skill4} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skilll2} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill3} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill5} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={wordpress} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={css} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={laravel} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={php} alt='' />
                </button>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={foto} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Home
