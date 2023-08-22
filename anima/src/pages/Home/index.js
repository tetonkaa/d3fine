import "./main.css";
import animaParticles from "../../components/ Particles";
export default function HomePage() {
  return (
    <>
    <animaParticles/>
    <div class="homePageContainer">
      <div class="backgroundEffect"></div>
      <a>
        Define<br></br>Yourself
      <p>A personality test generator.<br/> Create and share assessments with <br/>
         non-numerical results.</p>
      </a>
    </div>
    </>
  );
}
