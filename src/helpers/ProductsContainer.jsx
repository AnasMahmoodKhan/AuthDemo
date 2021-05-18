import React from "react";

const ProductsContainer = () => {
  return (
    <main
      id="products_nav"
      className="col-md-9 ml-sm-auto col-lg-10 px-md-4 mt-4 border-left"
    >
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Products</h1>
      </div>
      <div className="row">
        <div className="col-md-4 col-sm-6  ">
          <div class="card mb-4 shadow-sm">
            <img
              src="https://storage.googleapis.com/zingchart-blog/zing-content/2016/06/react-1.png"
              alt="react-banner"
              class="bd-placeholder-img card-img-top"
            />
            <div class="card-body">
              <p class="card-text">
                React is an open-source front-end JavaScript library for
                building user interfaces or UI components. It is maintained by
                Facebook and a community of individual developers and companies.
                React can be used as a base in the development of single-page or
                mobile applications.
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    View
                  </button>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-sm-6  ">
          <div class="card mb-4 shadow-sm">
            <img
              src="https://logicalidea.co/wp-content/uploads/2020/05/Redux.jpg"
              alt="redux-banner"
              class="bd-placeholder-img card-img-top"
            />
            <div class="card-body">
              <p class="card-text">
                Redux is an open-source JavaScript library for managing
                application state. It is most commonly used with libraries such
                as React or Angular for building user interfaces. Similar to
                Facebook's Flux architecture, it was created by Dan Abramov and
                Andrew Clark.
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    View
                  </button>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-sm-6  ">
          <div class="card mb-4 shadow-sm">
            <img
              src="http://getbootstrap.com/docs/4.3/assets/brand/bootstrap-social.png"
              alt="bootstrap-banner"
              class="bd-placeholder-img card-img-top"
            />
            <div class="card-body">
              <p class="card-text">
                Bootstrap is a free and open-source CSS framework directed at
                responsive, mobile-first front-end web development. It contains
                CSS- and JavaScript-based design templates for typography,
                forms, buttons, navigation, and other interface components.
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    View
                  </button>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductsContainer;
