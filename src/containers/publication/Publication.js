import React, { useContext } from "react";
import "./Publication.scss";
import { publicationSection } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Publication() {
  const { isDark } = useContext(StyleContext);

  if (!publicationSection.display) {
    return null;
  }

  return (
    <div className={isDark ? "dark-mode main" : "main"} id="publication">
      <div className="publication-main-div">
        <Fade right duration={1000}>
          <div className="publication-text-div">
            <h1 className={isDark ? "dark-mode publication-heading" : "publication-heading"}>
              {publicationSection.title}
            </h1>
            <p className={isDark ? "dark-mode subTitle publication-text-subtitle" : "subTitle publication-text-subtitle"}>
              {publicationSection.subTitle}
            </p>
            <ul className="publication-list">
              {publicationSection.publications.map((pub, i) => (
                <li key={i} className="publication-item">
                  <strong>
                    {pub.title}
                    {pub.link && (
                      <a href={pub.link} target="_blank" rel="noopener noreferrer" className="publication-link">
                        {" "} [Link]
                      </a>
                    )}
                  </strong>, <i>{pub.venue}</i>  
                  <br />
                  <span className="publication-authors">{pub.authors}</span>
                </li>
              ))}
            </ul>
          </div>
        </Fade>
      </div>
    </div>
  );
}
