import { Shortener } from "../../components/Shortener/Shortener";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className={styles["hero-section"]}>
            <div className={styles["hero-info"]}>
              <h1>More than just shorter links</h1>
              <p>
                Build your brand's recognition and get detailed insights on how
                your links are performing.
              </p>
              <button>Get Started</button>
            </div>
            <img src="/images/illustration-working.svg" alt="" />
          </div>
        </div>
      </div>
      <Shortener />
      <div className="container-fluid" bgColor="grayish">
        <div className="container">
          <div className={styles["stat-wrapper"]}>
            <div className={styles["stat-info"]}>
              <h2>Advanced Statistics</h2>
              <p>
                Track how your links are performing across the web with our
                advanced statistics dashboard
              </p>
            </div>
            <div className={styles["stat-card"]}>
              <div className={styles["card"]} custom-type="brand">
                <div className={styles["card-icon"]}>
                  <img src="/images/icon-brand-recognition.svg" />
                </div>
                <h3>Brand Recognition</h3>
                <p>
                  Boost your brand recognition with each click. Generic links
                  don't mean a thing. Branded links help instil confidence in
                  your content.
                </p>
              </div>
              <div className={styles["card"]} custom-type="detail">
                <div className={styles["card-icon"]}>
                  <img src="/images/icon-detailed-records.svg" />
                </div>
                <h3>Detailed Records</h3>
                <p>
                  Gain insights into who is clicking your links. Knowing when
                  and where people engage with your content helps inform better
                  decissions.
                </p>
              </div>
              <div className={styles["card"]} custom-type="fully">
                <div className={styles["card-icon"]}>
                  <img src="/images/icon-fully-customizable.svg" />
                </div>
                <h3>Fully Customizable</h3>
                <p>
                  Improve brand awareness and content discover ability through
                  customizable links, supercharging audience engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid" bgColor="violet">
        <div className="container">
          <div className={styles["boost-section"]}>
            <h2>Boost your links today</h2>
            <button>Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};
