import logo from "./logo512.png";
const Home = () => {
  return (
    <>
      <div class="container mt-4">
        <h1 class="pb-1 mb-4">Latest Courses<a href="#" class="float-end">See all</a> </h1>
        
        <div class="row">
          <div class="col-md-3">
            <div class="card">
              <a href="#">
                <img src={logo} class="card-img-top" alt="..." />
              </a>
              <div class="card-body">
                <h5 class="card-title">
                  <a href="#">Course title</a>
                </h5>
              </div>
            </div>
          </div>

          <div class="col-md-3">
            <div class="card">
              <a href="#">
                <img src={logo} class="card-img-top" alt="..." />
              </a>
              <div class="card-body">
                <h5 class="card-title">
                  <a href="#">Course title</a>
                </h5>
              </div>
            </div>
          </div>

          <div class="col-md-3">
            <div class="card">
              <a href="#">
                <img src={logo} class="card-img-top" alt="..." />
              </a>
              <div class="card-body">
                <h5 class="card-title">
                  <a href="#">Course title</a>
                </h5>
              </div>
            </div>
          </div>

          <div class="col-md-3">
            <div class="card">
              <a href="#">
                <img src={logo} class="card-img-top" alt="..." />
              </a>
              <div class="card-body">
                <h5 class="card-title">
                  <a href="#">Course title</a>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Feature Courses */}
      <div class="container mt-4">
  <h1 class="pb-1 mb-4 mt-5">Populer Courses</h1>
  <div class="row">
    <div class="col-md-3">
      <div class="card">
        <a href="#">
          <img src={logo} class="card-img-top" alt="..." />
        </a>
        <div class="card-body">
          <h5 class="card-title">
            <a href="#">Course title</a>
          </h5>
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <div class="card">
        <a href="#">
          <img src={logo} class="card-img-top" alt="..." />
        </a>
        <div class="card-body">
          <h5 class="card-title">
            <a href="#">Course title</a>
          </h5>
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <div class="card">
        <a href="#">
          <img src={logo} class="card-img-top" alt="..." />
        </a>
        <div class="card-body">
          <h5 class="card-title">
            <a href="#">Course title</a>
          </h5>
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <div class="card">
        <a href="#">
          <img src={logo} class="card-img-top" alt="..." />
        </a>
        <div class="card-body">
          <h5 class="card-title">
            <a href="#">Course title</a>
          </h5>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default Home;
