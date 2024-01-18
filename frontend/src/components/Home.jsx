import React, { useState } from 'react'
import images from "../imageImports"
import {Link, useNavigate} from "react-router-dom"
import StripePayment from '../StripePayment';
import "../App.css"

const Home = () => {
  const [formValid, setFormValid] = useState(false);
    const navigate= useNavigate();
    const handleLogin =()=>{
        navigate("/login");
    }
  return (
    <>
    <div>
        <header className="header">
          <nav>
            <div className="nav__header">
              <div className="nav__logo">
                <a href="/">
                  <img src={images.logo} alt="logo" />
                  SwasthyaSevak 
                </a>
              </div>
              <div className="nav__menu__btn" id="menu-btn">
                <span>
                  <i className="ri-menu-line"></i>
                </span>
              </div>
            </div>
            <ul className="nav__links" id="nav-links">
              <li className="link">
                <a href="#home">Home</a>
              </li>
              <li className="link">
                <a href="#about">About</a>
              </li>
              <li className="link">
                <a href="#class">Classes</a>
              </li>
              <li className="link">
                <a href="#trainer">Trainers</a>
              </li>
              <li className="link">
                <a href="#price">Pricing</a>
              </li>
              <li className="link">
                <button className="btn" onClick={handleLogin}>Login  </button>
              </li>
            </ul>
          </nav>
          <div className="section__container header__container" id="home">
            <div className="header__image">
              <img src={images.header} alt="header" />
            </div>
            <div className="header__content">
              <h4>Build Your Body &amp;</h4>
              <h1 className="section__header">Shape Yourself!</h1>
              <p>
                Unleash your potential and embark on a journey towards a
                stronger, fitter, and more confident you. Sign up for 'Make Your
                Body Shape' now and witness the incredible transformation your
                body is capable of!
              </p>
              <div className="header__btn">
                <button className="btn">Join Today</button>
              </div>
            </div>
          </div>
        </header>
        <section className="section__container about__container" id="about">
          <div className="about__image">
            <img className="about__bg" src={images.dotbg} alt="bg" />
            <img src={images.about} alt="about" />
          </div>
          <div className="about__content">
            <h2 className="section__header">Our Story</h2>
            <p className="section__description">
              Led by our team of expert and motivational instructors, "The Class
              You Will Get Here" is a high-energy, results-driven session that
              combines a perfect blend of cardio, strength training, and
              functional exercises.
            </p>
            <div className="about__grid">
              <div className="about__card">
                <span>
                  <i className="ri-open-arm-line"></i>
                </span>
                <div>
                  <h4>Open Door Policy</h4>
                  <p>
                    We believe in providing unrestricted access to all
                    individuals, regardless of their fitness level, age, or
                    background.
                  </p>
                </div>
              </div>
              <div className="about__card">
                <span>
                  <i className="ri-shield-cross-line"></i>
                </span>
                <div>
                  <h4>Fully Insured</h4>
                  <p>
                    Your peace of mind is our top priority, and our commitment
                    to your safety extends to every aspect of your fitness
                    journey.
                  </p>
                </div>
              </div>
              <div className="about__card">
                <span>
                  <i className="ri-p2p-line"></i>
                </span>
                <div>
                  <h4>Personal Trainer</h4>
                  <p>
                    With personalized workout plans tailored to your needs, we
                    will ensure that you get the most out of your gym
                    experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section__container class__container" id="class">
          <h2 className="section__header">Our Classes</h2>
          <p className="section__description">
            Discover a diverse range of exhilarating classes at our gym designed
            to cater to all fitness levels and interests. Whether you're a
            seasoned athlete or just starting your fitness journey, our classes
            offer something for everyone.
          </p>
          <div className="class__grid">
            <div className="class__card">
              <img src={images.dotbg} alt="bg" className="class__bg" />
              <img src={images.class1} alt="class" />
              <div className="class__content">
                <h4>Strength Training</h4>
                <p>Resistance Training</p>
              </div>
            </div>
            <div className="class__card">
              <img src={images.dotbg} alt="bg" className="class__bg" />
              <img src={images.class2} alt="class" />
              <div className="class__content">
                <h4>Flexibility &amp; Mobility</h4>
                <p>Yoga &amp; Pilates</p>
              </div>
            </div>
            <div className="class__card">
              <img src={images.dotbg} alt="bg" className="class__bg" />
              <img src={images.class3} alt="class" />
              <div className="class__content">
                <h4>HIIT</h4>
                <p>Circuit Training</p>
              </div>
            </div>
            <div className="class__card">
              <img src={images.dotbg} alt="bg" className="class__bg" />
              <img src={images.class4} alt="class" />
              <div className="class__content">
                <h4>Group Fitness</h4>
                <p>Zumba or Dance</p>
              </div>
            </div>
          </div>
        </section>
        <section className="section__container trainer__container" id="trainer">
      <h2 className="section__header">Our Trainers</h2>
      <p className="section__description">
        Our trainers are more than just experts in exercise; they are passionate
        about helping you achieve your health and fitness goals. Our trainers
        are equipped to tailor workout programs to meet your unique needs.
      </p>
      <div className="trainer__grid">
        <div className="trainer__card">
          <img src={images.trainer1} alt="trainer" />
        </div>
        <div className="trainer__card">
          <div className="trainer__content">
            <h4>James Rodriguez</h4>
            <h5>Strength and Conditioning</h5>
            <hr />
            <p>
              With a background in competitive sports, he's dedicated to helping
              you reach your peak physical performance.
            </p>
            <div className="trainer__socials">
              <a href="/"><i className="ri-facebook-fill"></i></a>
              <a href="/"><i className="ri-google-fill"></i></a>
              <a href="/"><i className="ri-instagram-line"></i></a>
              <a href="/"><i className="ri-twitter-fill"></i></a>
            </div>
          </div>
        </div>
        <div className="trainer__card">
          <img src={images.class4} alt="trainer" />
        </div>
        <div className="trainer__card">
          <div className="trainer__content">
            <h4>Mark Harris</h4>
            <h5>HIIT and Functional</h5>
            <hr />
            <p>
              His energetic and dynamic workouts are designed to push your
              limits, boost metabolism, and torch calories.
            </p>
            <div className="trainer__socials">
              <a href="/"><i className="ri-facebook-fill"></i></a>
              <a href="/"><i className="ri-google-fill"></i></a>
              <a href="/"><i className="ri-instagram-line"></i></a>
              <a href="/"><i className="ri-twitter-fill"></i></a>
            </div>
          </div>
        </div>
        <div className="trainer__card">
          <img src={images.class2} alt="trainer" />
        </div>
        <div className="trainer__card">
          <div className="trainer__content">
            <h4>Emily Davis</h4>
            <h5>Yoga and Mindfulness</h5>
            <hr />
            <p>
              Emily's sessions are about physical postures and also about
              cultivating inner peace and mindfulness.
            </p>
            <div className="trainer__socials">
              <a href="/"><i className="ri-facebook-fill"></i></a>
              <a href="/"><i className="ri-google-fill"></i></a>
              <a href="/"><i className="ri-instagram-line"></i></a>
              <a href="/"><i className="ri-twitter-fill"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section__container price__container" id="price">
      <h2 className="section__header">Our Pricing</h2>
      <p className="section__description">
        Our pricing plan comes with various membership tiers, each tailored to
        cater to different preferences and fitness aspirations.
      </p>
      <div className="price__grid">
        <div className="price__card">
          <div className="price__content">
            <h4>Gold Membership</h4>
            <img src={images.price1} alt="price" />
            <p>
              Our Gold Membership is the perfect starting point for individuals
              looking to kickstart their fitness journey or maintain an active
              lifestyle.
            </p>
            <hr />
            <h4>Key Features</h4>
            <p>Smart workout plan</p>
            <p>At home workouts</p>
          </div>
          {/* <button className="btn">Join Now $100/m</button> */}
          <StripePayment formValid={formValid} buttonText="Join Now $100/m" />
        </div>
        <div className="price__card">
          <div className="price__content">
            <h4>Platinum Membership</h4>
            <img src={images.price2} alt="price" />
            <p>
              Our Platinum Membership is designed to provide structure and variety to
              your workouts, ensuring you stay motivated and on track.
            </p>
            <hr />
            <h4>Key Features</h4>
            <p>PRO Gyms</p>
            <p>Smart workout plan</p>
            <p>At home workouts</p>
          </div>
          <StripePayment formValid={formValid} buttonText="Join Now $150/m" />
        </div>
        <div className="price__card">
          <div className="price__content">
            <h4>Diamond Membership</h4>
            <img src={images.price3} alt="price" />
            <p>
              With this flexible membership, you'll have access to our
              state-of-the-art gym facilities, expert trainers, and a vibrant
              fitness community
            </p>
            <hr />
            <h4>Key Features</h4>
            <p>ELITE Gyms &amp; Classes</p>
            <p>PRO Gyms</p>
            <p>Smart workout plan</p>
            <p>At home workouts</p>
            <p>Personal Training</p>
          </div>
          <StripePayment formValid={formValid} buttonText="Join Now $200/m" />
        </div>
      </div>
    </section>

    <section className="section__container client__container" id="client">
      <h2 className="section__header">What People Say About Us?</h2>
      <p className="section__description">
        These testimonials serve as a testament to our commitment to helping
        individuals achieve their fitness goals, and fostering a supportive
        environment for everyone who walks through our doors.
      </p>
    
      <div className="swiper">
      
        <div className="swiper-wrapper">
        
          <div className="swiper-slide">
            <div className="client__card">
              <img src={images.client1} alt="client" />
              <div className="client__ratings">
                <span><i className="ri-star-fill"></i></span>
                <span><i className="ri-star-fill"></i></span>
                <span><i className="ri-star-fill"></i></span>
                <span><i className="ri-star-fill"></i></span>
                <span><i className="ri-star-line"></i></span>
              </div>
              <p>
                The trainers here customized a plan that balanced my work-life
                demands, and I've seen remarkable progress in my fitness
                journey. It's not just a gym; it's my sanctuary for self-care.
              </p>
              <h4>Jane Smith</h4>
              <h5>Marketing Manager</h5>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="client__card">
              <img src={images.client2} alt="client" />
              <div className="client__ratings">
                <span><i className="ri-star-fill"></i></span>
                <span><i className="ri-star-fill"></i></span>
                <span><i className="ri-star-fill"></i></span>
                <span><i className="ri-star-fill"></i></span>
                <span><i className="ri-star-half-fill"></i></span>
              </div>
              <p>
                The trainers' expertise and the gym's commitment to cleanliness
                during these times have made it a safe haven for me to maintain
                my health and de-stress.
              </p>
              <h4>Emily Carter</h4>
              <h5>Registered Nurse</h5>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="client__card">
              <img src={images.client3} alt="client" />
              <div className="client__ratings">
                <span><i className="ri-star-fill"></i></span>
                <span><i className="ri-star-fill"></i></span>
                <span><i className="ri-star-fill"></i></span>
                <span><i className="ri-star-half-fill"></i></span>
                <span><i className="ri-star-line"></i></span>
              </div>
              <p>
                The variety of classes and the supportive community have kept me
                motivated. I've shed pounds, gained confidence, and found a new
                level of energy to inspire my students.
              </p>
              <h4>John Davis</h4>
              <h5>Teacher</h5>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="client__card">
              <img src={images.client4} alt="client" />
              <div className="client__ratings">
                <span><i className="ri-star-fill"></i></span>
                <span><i className="ri-star-fill"></i></span>
                <span><i className="ri-star-fill"></i></span>
                <span><i className="ri-star-fill"></i></span>
                <span><i className="ri-star-fill"></i></span>
              </div>
              <p>
                This gym's 24/7 access has been a lifesaver. Whether it's a
                late-night workout or an early morning session, the convenience
                here is unbeatable.
              </p>
              <h4>David Martinez</h4>
              <h5>Entrepreneur</h5>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer className="footer">
      <div className="section__container footer__container">
        <div className="footer__col">
          <div className="footer__logo">
            <a href="/"><img src={images.logo} alt="logo" />SwasthyaSevak</a>
          </div>
          <p>
            Take the first step towards a healthier, stronger you with our
            unbeatable pricing plans. Let's sweat, achieve, and conquer
            together!
          </p>
          <div className="footer__socials">
            <a href="/"><i className="ri-facebook-fill"></i></a>
            <a href="/"><i className="ri-instagram-line"></i></a>
            <a href="/"><i className="ri-twitter-fill"></i></a>
          </div>
        </div>
        <div className="footer__col">
          <h4>Company</h4>
          <div className="footer__links">
            <a href="/">Business</a>
            <a href="/">Franchise</a>
            <a href="/">Partnership</a>
            <a href="/">Network</a>
          </div>
        </div>
        <div className="footer__col">
          <h4>About Us</h4>
          <div className="footer__links">
            <a href="/">Blogs</a>
            <a href="/">Security</a>
            <a href="/">Careers</a>
          </div>
        </div>
        <div className="footer__col">
          <h4>Contact</h4>
          <div className="footer__links">
            <a href="/">Contact Us</a>
            <a href="/">Privacy Policy</a>
            <a href="/">Terms &amp; Conditions</a>
            <a href="/">BMI Calculator</a>
          </div>
        </div>
      </div>
      <div className="footer__bar">
        Copyright © 2023 Web Design Mastery. All rights reserved.
      </div>
    </footer>
      </div>
    </>
  )
}

export default Home