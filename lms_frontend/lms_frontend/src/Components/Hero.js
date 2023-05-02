import logo from "./Hero_vector.jpg";
import "./Hero.css";
const Hero = () => {
  return (
    <>
      <div class="container-fluid hero-container ">
        <div class="row">
          <div class="col-md-6 p-5">
            <h1>Responsive left hero-aligned hero with image</h1>
            <p>
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
            </p>
            <button class="btn btn-primary m-3">Primary</button>
            <span>
              <button class="btn btn-outline-secondary"> Default</button>
            </span>
          </div>
          <div class="col-md-6 ">
            <img src={logo} class=" img-fluid" />
          </div>
        </div>
      </div>

      <div class="container-fluid after-hero-section ">
        <div class="row text-center">
          <div class="col-md-4">
            <div class="container row">
              <div class="col-md-4 p-4">Hello</div>
              <div class="col-md-8  p-4">
                <h6 class="h-sec">14345 Learners</h6>
                <p class="p-sec ">We are proud to say that</p>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="container row">
              <div class="col-md-4  p-4">Hello</div>
              <div class="col-md-8  p-4">
                <h6 class="h-sec">14345 Learners</h6>
                <p class="p-sec ">We are proud to say that</p>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="container row">
              <div class="col-md-4  p-4">Hello</div>
              <div class="col-md-8  p-4">
                <h6 class="h-sec">14345 Learners</h6>
                <p class="p-sec ">We are proud to say that</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
