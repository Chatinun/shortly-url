import styles from "./Shortener.module.css";
import { useRef, useState } from "react";
import axios from "axios";

export const ShortenerForm = (props) => {
  const linkRef = useRef();

  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`https://api.shrtco.de/v2/shorten?url=${linkRef.current.value}`)
      .then((res) => {
        const shortenLink = res.data.result.full_short_link;
        props.addLinks(linkRef.current.value, shortenLink);
        linkRef.current.value = "";
        setIsError(false);
      })
      .catch((err) => {
        setIsError(true);
        console.log(err.message);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={styles["shortener-form"]}>
          <input
            placeholder="Shorten a link here..."
            className={isError ? styles["input-error"] : ""}
            ref={linkRef}
          />
          <button type="submit">Shorten it!</button>
        </div>
        <p className={styles["error-message"]}>
          {isError && "Something went wrong :("}
        </p>
      </form>
    </>
  );
};
