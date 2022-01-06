<template>
  <header class="header-fixed-top header-transparent z-index-fixed">
    <nav class="navbar navbar-expand-lg navbar-dark py-3">
      <div class="container position-relative">
        <a class="navbar-brand width-30" href="index.html">
          <img src="assets/img/logo/logo-a.svg" class="img-fluid" />
        </a>

        <div
          class="d-flex align-items-center navbar-no-collapse-items order-lg-last"
        >
          <div class="nav-item me-3 me-lg-0">
            <a href="#" class="btn btn-dark btn-sm">Purchase</a>
          </div>
          <div class="nav-item me-3 me-lg-0">
            <a
              data-bs-toggle="offcanvas"
              href="#offcanvasEnd"
              class="nav-link text-dark ms-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                class="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  </header>

  <!--Vertical header offcanvas-->
  <!--Offcanvas dark-->
  <div
    class="offcanvas offcanvas-end bg-shade-primary text-white"
    tabindex="-1"
    id="offcanvasEnd"
    aria-labelledby="offcanvasEnd"
  >
    <div class="border-bottom offcanvas-header">
      <button
        type="button"
        class="btn-close text-reset p-0 m-0 size-40 center-both ms-auto"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
          width="24"
          height="24"
          viewBox="0 0 128 128"
        >
          <g>
            <path
              stroke="currentColor"
              stroke-width="8"
              stroke-linecap="square"
              fill="none"
              d="M7 7l114 114m0-114l-114 114"
            />
          </g>
        </svg>
      </button>
    </div>
    <div class="offcanvas-body p-4 px-xl-5">
      <ul class="nav flex-column">
        <li class="nav-item">
          <a href="#" class="nav-link fs-2 fw-normal">Index</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link fs-2 fw-normal">About</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link fs-2 fw-normal">Portfolio</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link fs-2 fw-normal">Capabilities</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link fs-2 fw-normal">Get in touch</a>
        </li>
      </ul>
    </div>
    <div class="offcanvas-footer p-4 px-xl-5">
      <ul class="list-unstyled mb-0">
        <li class="pb-4">
          <small class="text-muted d-block">Email us:</small>
          <a href="mailto:mail@domain.com" class="link-underline fs-5"
            >mail@domain.com</a
          >
        </li>
        <li>
          <ul class="list-inline">
            <li class="list-inline-item me-3">
              <a href="#" class="fs-5 text-muted">
                <i class="bi bi-facebook"></i>
              </a>
            </li>
            <li class="list-inline-item me-3">
              <a href="#" class="fs-5 text-muted">
                <i class="bi bi-twitter"></i>
              </a>
            </li>
            <li class="list-inline-item me-3">
              <a href="#" class="fs-5 text-muted">
                <i class="bi bi-linkedin"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#" class="fs-5 text-muted">
                <i class="bi bi-instagram"></i>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {};
</script>
