import React from "react";
import "./styles/Experi.css";
import { HiCheckBadge } from "react-icons/hi2";

const Experieance = () => {
  return (
    <div>
      <section className="skills--sectionex" id="experience">
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
                    <h3>SASS</h3>
                    <p>Intermediate</p>
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
    </div>
  );
};

export default Experieance;
