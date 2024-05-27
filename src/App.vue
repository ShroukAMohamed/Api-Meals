<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <p class="navbar-brand mb-0">BISTRO</p>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
        >
          <ul class="navbar-nav justify-content-end gap-5">
            <li class="nav-item">
              <router-link
                to="/"
                class="nav-link active"
                aria-current="page"
                href="#"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'byName' }" class="nav-link" href="#"
                >Search Meals</router-link
              >
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'byLetter' }" class="nav-link" href="#"
                >Meals By Letter</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                :to="{ name: 'ingredients' }"
                class="nav-link"
                href="#"
                >Meals By Ingredients</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
nav {
  box-shadow: 0 3px 10px rgba(39, 45, 59, 0.21);
  background-color: #c48657;
  .router-link-exact-active {
    color: #d22525 !important;
  }
  .navbar-brand {
    color: #d22525;
    pointer-events: none;
  }
  .home-logo {
    img {
      width: 56px;
      height: 50px;
    }
  }
  .navbar-brand {
    font-size: 25px;
    font-weight: bold;
    letter-spacing: 1.5px;
  }
  .person-profile {
    img {
      width: 45px;
      height: 45px;
      border-radius: 50%;
    }
    span:last-child {
      color: white;
      font-size: 17px;
      font-weight: bold;
    }
  }
  .icons {
    font-size: 22px;
    span {
      cursor: pointer;
    }
  }
}
</style>
<script setup></script>
