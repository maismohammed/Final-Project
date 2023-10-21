import video_1 from '../assets/videos/1.mp4';
import video_2 from '../assets/videos/pexels-tima-miroshnichenko-6700253 (2160p).mp4';
import video_3 from '../assets/videos/production_id_4058080 (2160p).mp4';
import video_4 from '../assets/videos/pexels-tima-miroshnichenko-5708833 (2160p).mp4';
import img_1 from '../assets/img/5.jpg';
import img_2 from '../assets/img/1.jpg';
import img_3 from '../assets/img/2.jpg';
import img_4 from '../assets/img/3.jpg';
import img_5 from '../assets/img/13.jpg';
import img_6 from '../assets/img/6.jpg';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import '../home.css'



export default function Home() {


   const [active, setActive] = useState(0);

   const videos = [
      {
         video: video_4,
         id: 0,
         title: 'Personal',
         span: 'Finance',

      },
      {
         video: video_1,
         id: 1,
         title: 'Business',
         span: 'Loans',

      },
      {
         video: video_2,
         id: 2,
         title: 'Money',
         span: 'Transfer',

      },
      {
         video: video_3,
         id: 3,
         title: 'Online',
         span: 'Payment',
      }
   ];



   return (
      <>

         <Header />

         <section className="homeBank">


            {videos.map(function (value, index) {
               return <video key={index} className={`video-slide ${active === value.id ? 'active' : ''}`} src={value.video} autoPlay muted loop></video>
            })}
            {videos.map(function (value, index) {
               return (

                  <div key={index} className={`content ${active === value.id ? 'active' : ''}`}>
                     <h1>{value.title} <br /><span>{value.span}</span></h1>
                     <div className="blr">
                        <p>Comprises awareness related to the Banking Institutions, banking terms and the functions and role of the banking industry in the financial system of the country. .</p>
                     </div>
                  </div>

               )
            })}




            <div className="slider-navigation">
               {videos.map(function (value, index) {
                  return <div
                     key={index}
                     className={`nav-btn ${active === value.id ? 'active' : ''}`}
                     onClick={() => setActive(index)}

                  ></div>
               })}
            </div>
         </section>
         <main className="main">


            <section className="about section" id="about">
               <div className="about__container container grid">
                  <div className="about__data">
                     <h2 className="section__title">
                        Learn More <br />
                        About banks
                     </h2>

                     <p className="about__description">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim voluptatibus obcaecati repudiandae, mollitia tenetur harum asperiores! Ipsum nihil odio, atque quam voluptates porro magni ducimus consequatur adipisci nisi, maiores a.
                     </p>

                     <NavLink to={'job'} className={' btn-primary5'}> <span>Explore Banks</span> <i className="ri-arrow-right-line"></i></NavLink>

                  </div>

                  <div className="about__image">
                     <img src={img_1} className="about__img" />
                     <div className="about__shadow"></div>
                  </div>
               </div>
            </section>

            <section className="popular section" id="popular">
               <h2 className="section__title">
                  Website Services <br />

               </h2>

               <div className="popular__container container grid">
                  <article className="popular__card">
                     <div className="popular__image">
                        <img src={img_2} alt="popular image" className="popular__img" />
                        <div className="popular__shadow"></div>
                     </div>

                     <h2 className="popular__title">
                        Fixed Maturity Calculator
                     </h2>

                     <div className="popular__location">
                        <span></span>
                     </div>
                  </article>

                  <article className="popular__card">
                     <div className="popular__image">
                        <img src={img_3} alt="popular image" className="popular__img" />
                        <div className="popular__shadow"></div>
                     </div>

                     <NavLink to={'/loan'}>
                        <h2 className="popular__title">
                           Loan Calculator
                        </h2>
                     </NavLink>

                     <div className="popular__location">
                        <span></span>
                     </div>
                  </article>

                  <NavLink to={'/currency'}>
                     <article className="popular__card">
                        <div className="popular__image">
                           <img src={img_4} className="popular__img" alt="popular image" />
                           <div className="popular__shadow"></div>
                        </div>

                        <h2 className="popular__title">
                           Currency Converter
                        </h2>

                        <div className="popular__location">
                           <span></span>
                        </div>
                     </article>
                  </NavLink>
               </div>
            </section>

            <section className="explore section" id="explore">
               <div className="explore__container">
                  <div className="explore__image">
                     <img src={img_5} alt="expore image" className="explore__img" />
                     <div className="explore__shadow"></div>
                  </div>

                  <div className="explore__content container grid">
                     <div className="explore__data">
                        <h2 className="section__title">
                           Explore The <br />
                           Best Services
                        </h2>

                        <p className="explore__description">
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut veniam, consequatur ea quis minus temporibus iure amet facere ab tenetur sunt libero nemo consequuntur, quod sint fugit ipsa provident excepturi?
                        </p>
                     </div>

                     <div className="explore__user">
                     </div>
                  </div>
               </div>
            </section>

            <section className="join section">
               <div className="join__container container grid">
                  <div className="join__data">
                     <h2 className="section__title">
                        Your Journey <br />
                        Starts Here
                     </h2>

                     <p className="join__description">
                        Get up to date with the latest
                        services and information from us.
                     </p>

                     <form action="" className="join__form">

                        <NavLink to='/register'>
                           <button className="join__button6 button">
                              <a href="../Registration Form/index.html" className="footer__link">
                                 Get the Suitable Financing <i className="ri-arrow-right-line"></i>
                              </a>
                           </button>
                        </NavLink>
                     </form>
                  </div>

                  <div className="join__image">
                     <img src={img_6} alt="join image" className="join__img" />
                     <div className="join__shadow"></div>
                  </div>
               </div>
            </section>
         </main>


         <Footer />

         <a href="#" className="scrollup" id="scroll-up">
            <i className="ri-arrow-up-line"></i>
         </a>
      </>
   )
}