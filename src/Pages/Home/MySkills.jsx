import { useState } from "react";
import data from "../../data/index.json";

export default function MySkills() {
  // State to track the read-more toggle for each skill card
  const [isReadMore, setIsReadMore] = useState({});

  // Function to toggle the "Read More" state for a specific skill card
  const toggleReadMore = (index) => {
    setIsReadMore((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const maxLength = 130;

  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <p className="section--title">My Skills</p>
        <h2 className="skills--section--heading">My Expertise</h2>
      </div>
      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              <img src={item.src} alt={item.title} />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <p className="skills--section--description">
                {isReadMore[index]
                  ? item.description
                  : `${item.description.slice(0, maxLength)}...`}
                <span
                  onClick={() => toggleReadMore(index)}
                  className="read-or-hide"
                  style={{
                    color: "blue",
                    cursor: "pointer",
                    marginLeft: "5px",
                  }}
                >
                  {isReadMore[index] ? " Show Less" : " Read More"}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
