import "./main.css";
import animaParticles from "../../components/ Particles";
import Typewriter from "typewriter-effect";
import Background from "../../assets/d3fineBG.png"

const typeWriterData = {
  animated: {
    first: "Self",
    second: "Self",
    third: "Self",
    fourth: "Self",
    fifth: "Self",
  },
};

export default function HomePage() {
  return (
    <div class="homePageContainer">
      <a>
        <div>
        Define Your
        <span className="typeFont">
          <Typewriter
            options={{
              strings: [typeWriterData.animated.first],
              autoStart: true,
              loop: true,
              deleteSpeed: 10,
            }}
          />
        </span>
        </div>
        <p>
          A personality test generator.
          <br /> Create and share assessments with <br />
          non-numerical results.
        </p>
      </a>
      <img src={Background} />
    </div>
  );
}
