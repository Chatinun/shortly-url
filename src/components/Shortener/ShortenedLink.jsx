import { useState } from "react";
import styles from "./Shortener.module.css";

export const ShortenedLink = ({ link }) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(link.shortUrl);
    setCopySuccess(true);
    console.log("Copy to Clipboard");
  };

  return (
    <div className={styles["shortened-link"]}>
      <p className={styles["ori-url"]}>{link.oriUrl}</p>
      <p className={styles["short-url"]}>{link.shortUrl}</p>
      <button
        className={copySuccess ? styles["copied"] : ""}
        onClick={copyToClipboard}
      >
        {copySuccess ? "Copied!" : "Copy"}
      </button>
    </div>
  );
};
