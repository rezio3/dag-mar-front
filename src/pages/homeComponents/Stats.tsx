import { useState, useEffect, useRef } from "react";
// import { useSpring, animated } from "react-spring";
import { useSpring, animated } from "@react-spring/web";
import Media from "react-media";
import "../../style/stats.scss";

const Number = ({ n }: { n: number }) => {
  const { num } = useSpring({
    from: { num: 0 },
    num: n,
    delay: 100,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return (
    <animated.div>
      {num.to((n) => n.toFixed(0))}
      {/* <span></span> */}
    </animated.div>
  );
};
const Stats = () => {
  const [scrolled, setScrolled] = useState(false);
  const myRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setScrolled(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    if (myRef.current) {
      observer.observe(myRef.current); // ✅ tylko jeśli nie null
    }
    // return () => {
    //   if (myRef.current) {
    //     observer.unobserve(myRef.current); // ✅ też tylko jeśli nie null
    //   }
    // };
  }, []);
  const date = new Date();
  const yearsOfExperience = date.getFullYear() - 2000;

  return (
    <>
      <Media query="(min-width: 992px)">
        {(matches) => {
          return matches ? (
            // desktop
            <section ref={myRef} className="stats-container" id="section1">
              <div className="first-stat stats">
                <span className="stat-number">
                  {scrolled ? <Number n={32} /> : 0}
                </span>
                <span className="stat-description">
                  <strong>tłumaczone języki</strong>
                </span>
              </div>
              <div className="second-stat stats">
                <span className="stat-number">
                  {scrolled ? <Number n={yearsOfExperience} /> : 0}
                </span>
                <span className="stat-description">lat doświadczenia</span>
              </div>
              <div className="third-stat stats">
                <span className="stat-number dflex">
                  {scrolled ? <Number n={20000} /> : 0}+
                </span>
                <span className="stat-description">zadowolonych klientów</span>
              </div>
              <div className="forth-stat stats ">
                <span className="stat-number dflex">
                  {scrolled ? <Number n={72000} /> : 0}+
                </span>
                <span className="stat-description">
                  przetłumaczonych dokumentów
                </span>
              </div>
            </section>
          ) : (
            // mobile
            <section ref={myRef} className="stats-container" id="section1">
              <div className="first-block-stats block">
                <div className="first-stat stats">
                  <span className="stat-number">
                    {" "}
                    {scrolled ? <Number n={32} /> : 0}
                  </span>
                  <span className="stat-description">
                    <strong>tłumaczone języki</strong>
                  </span>
                </div>
                <div className="second-stat stats">
                  <span className="stat-number">
                    {" "}
                    {scrolled ? <Number n={yearsOfExperience} /> : 0}
                  </span>
                  <span className="stat-description">lat doświadczenia</span>
                </div>
              </div>
              <div className="second-block-stats block">
                <div className="third-stat stats">
                  <span className="stat-number dflex">
                    {scrolled ? <Number n={20000} /> : 0}+
                  </span>
                  <span className="stat-description">
                    zadowolonych klientów
                  </span>
                </div>
                <div className="forth-stat stats">
                  <span className="stat-number dflex">
                    {scrolled ? <Number n={72000} /> : 0}+
                  </span>
                  <span className="stat-description">
                    przetłumaczonych dokumentów
                  </span>
                </div>
              </div>
            </section>
          );
        }}
      </Media>
    </>
  );
};

export default Stats;
