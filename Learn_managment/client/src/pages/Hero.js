import logo from "./Hero_vector.jpg";
import "./Hero.css";
import {Link} from 'react-router-dom'
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
            <button className="btn btn-primary mt-3">
              <Link to="/register" className="Hero-link">Join For Free</Link>
            </button>
          </div>
          <div class="col-md-6 ">
            <img src={logo} class=" img-fluid" />
          </div>
        </div>
      </div>

      <section className="categories pt-5">
        <div class="container categoreies_container">
            <div class="categories_left">
                <h1>Categories</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere deserunt iste tempore soluta maxime explicabo rem, 
                    facilis beatae esse totam ab tenetur. Maxime fugit sapiente sint nostrum repellat eius similique.
                </p>
                <a href="#" class="btn">Learn More</a>
            </div>
            <div class="categories_right">
                <article class="category">
                    <span class="category_icon"><i class="uil uil-bitcoin-circle"></i></span>
                    <h5>BlockChain</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ab?</p>
                </article>

                <article class="category">
                    <span class="category_icon"><i class="uil uil-palette"></i></span>
                    <h5>Graphic Design</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ab?</p>
                </article>

                <article class="category">
                    <span class="category_icon"><i class="uil uil-brackets-curly"></i></span>
                    <h5>Programming</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ab?</p>
                </article>

                <article class="category">
                    <span class="category_icon"><i class="uil uil-megaphone"></i></span>
                    <h5>Marketing</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ab?</p>
                </article>

                <article class="category">
                    <span class="category_icon"><i class="uil uil-music"></i></span>
                    <h5>Music</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ab?</p>
                </article>

                <article class="category">
                    <span class="category_icon"><i class="uil uil-dollar-alt"></i></span>
                    <h5>Finance</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ab?</p>
                </article>
                
            </div>
        </div>
    </section>
    </>
  );
};

export default Hero;
