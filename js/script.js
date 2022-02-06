function menuToggle() {
  let toggleBtn = document.querySelector(".b-header__toggleBtn")
  let menu = document.querySelector(".b-nav")

  menu.setAttribute("data-visible", "visible-xs");
  toggleBtn.hidden === false ? toggleBtn.hidden = true : toggleBtn.hidden = false
}

function closeMenu() {
  let toggleBtn = document.querySelector(".b-header__toggleBtn")
  let menu = document.querySelector(".b-nav")

  menu.setAttribute("data-visible", "visible")
  toggleBtn.hidden = false
}