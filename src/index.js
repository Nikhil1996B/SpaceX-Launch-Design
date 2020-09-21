// button toggle
const year = document.querySelector("year-list");
const btns = document.querySelectorAll(".btn");

year.addEventListener("click", (e) => {
  btns.forEach((btn) => {
    if (btn.getAttribute("id") === e.target.getAttribute("id"))
      btn.classList.add("active");
    else btn.classList.remove("active");
  });
});
