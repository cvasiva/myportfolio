import React from "react";
import "./styles/Experi.css";
import { HiCheckBadge } from "react-icons/hi2";
import data from "../data/index.json";
import ScrollCarousel from "scroll-carousel-react";
const tools = [
  { name: "HTML", icon: "Rlogo1.png" },
  { name: "CSS", icon: "Rlogo2.png" },
  { name: "Bootstrap", icon: "Rlogo3.png" },
  { name: "Material UI", icon: "Rlogo4.png" },
  { name: "Tailwind CSS", icon: "Rlogo5.png" },
  { name: "Ant Design", icon: "Rlogo6.png" },
  { name: "JavaScript", icon: "Rlogo7.png" },
  { name: "TypeScript", icon: "Rlogo8.png" },
  { name: "React JS", icon: "Rlogo9.png" },
  { name: "Next JS", icon: "Rlogo10.png" },
  { name: "React Native", icon: "Rlogo9.png" },
  { name: "Express JS", icon: "Rlogo11.png" },
  { name: "MongoDB", icon: "Rlogo12.png" },
  { name: "Node JS", icon: "Rlogo13.png" },
  { name: "GIT", icon: "Rlogo14.png" },
  { name: "Visual Studio", icon: "Rlogo15.png" },
  { name: "Postman", icon: "Rlogo16.png" },
  { name: "Firebase", icon: "Rlogo17.png" },
  { name: "Android Studio", icon: "Rlogo18.png" },
  { name: "Figma", icon: "Rlogo19.png" },
];
const Experieance = () => {
  return (
    <div>
      <section className="skills--sectionex" id="experience">
        <div className="text-center w-100">
          <h2>Worked with leading companies</h2>
          <div className="serviceSuccessMobile">
            <div className="positionLogos  d-flex justify-content-center m-auto">
              <div className="wrapper">
                <img src="./img/nexgenlogo.png" className="itemLeft item1" />
                <img
                  src="./img/dailydesignlogo.png"
                  className="itemLeft item2"
                />
                <img src="./img/llogo.png" className="itemLeft item3" />
                <img src="./img/BizLabLogo.png" className="itemLeft item4" />
                <img src="./img/achieverslogo.png" className="itemLeft item5" />
                <img src="./img/tap2getlogo.png" className="itemLeft item6" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-100">
          <p className="section__text__p1">Explore My</p>
          <h2 className="title">Experience</h2>
        </div>
        <div class="experience-details-container">
          <div class="about-containers">
            <div class="details-container">
              <h2 class="experience-sub-title">Frontend Development</h2>
              <div class="article-container">
                <article>
                  <HiCheckBadge size={30} />
                  <div>
                    <h3>HTML</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <HiCheckBadge size={30} />
                  <div>
                    <h3>CSS</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <HiCheckBadge size={30} />
                  <div>
                    <h3>Bootstrap</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <HiCheckBadge size={30} />
                  <div>
                    <h3>JavaScript</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <HiCheckBadge size={30} />
                  <div>
                    <h3>TypeScript</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <HiCheckBadge size={30} />
                  <div>
                    <h3>Material UI</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <HiCheckBadge size={30} />
                  <div>
                    <h3>Tailwind CSS</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <HiCheckBadge size={30} />
                  <div>
                    <h3>React JS</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <HiCheckBadge size={30} />
                  <div>
                    <h3>Next JS</h3>
                    <p>Experienced</p>
                  </div>
                </article>
              </div>
            </div>
            <div class="details-container">
              <h2 class="experience-sub-title">Frontend Development</h2>
              <div class="article-container">
                <article>
                  <HiCheckBadge size={30} />
                  <div>
                    <h3>PostgreSQL</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <HiCheckBadge size={30} />
                  <div>
                    <h3>Node JS</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <HiCheckBadge size={30} />
                  <div>
                    <h3>Express JS</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <HiCheckBadge size={30} />
                  <div>
                    <h3>Mongodb</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <HiCheckBadge size={30} />
                  <div>
                    <h3>Git</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <HiCheckBadge size={30} />
                  <div>
                    <h3>React Native</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <HiCheckBadge size={30} />
                  <div>
                    <h3>Android Studio</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="specialization">
        <h2>My Specialization - Tools</h2>
        <p>Serving customized needs for start-ups</p>
        <div className="tools-grid">
          {tools.map((tool, index) => (
            <div>
              <div key={index} className="tool-card">
                <img
                  src={require(`/public/img/${tool.icon}`)}
                  alt={`${tool.name} icon`}
                />
              </div>
              <p className="pt-3">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experieance;
