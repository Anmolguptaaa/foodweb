import React from "react";
import AboutImg from "../assets/images/about-img";
const About = () => {
  return (
    <>
      <section className="about" id="about">
        <h1 className="heading">
          <span>about</span> us
        </h1>

        <div className="row">
          <div className="image">
            <img src={AboutImg} alt="" />
          </div>

          <div className="content">
            <h3>what makes our food special?</h3>
            <p>
            Welcome to our restaurant, where culinary artistry meets exceptional service. We pride ourselves on using fresh, locally-sourced ingredients to create unforgettable dining experiences. Whether you're here for a casual meal or a special occasion, we promise a feast for the senses
            </p>
            <p>
            Join us and discover the perfect blend of ambiance, flavor, and hospitality.
            </p>
            <a href="#" className="btn">
              learn more
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
