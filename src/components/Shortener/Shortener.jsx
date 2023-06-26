import styles from "./Shortener.module.css";
import { useState } from "react";

import { ShortenerForm } from "./ShortenerForm";
import { ShortenedLink } from "./ShortenedLink";

export const Shortener = () => {
  const [links, setLinks] = useState([]);

  const addLinks = (oriUrl, shortUrl) => {
    setLinks((prev) => {
      return [...prev, { oriUrl: oriUrl, shortUrl: shortUrl }];
    });
  };

  return (
    <>
      <div className="container-fluid" bgColor="seperator">
        <div className="container">
          <ShortenerForm addLinks={addLinks} />
        </div>
      </div>
      <div className="container-fluid" bgColor="grayish">
        <div className="container">
          <div className={styles["link-list"]}>
            {links.map((link, index) => {
              return <ShortenedLink key={index} link={link} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
