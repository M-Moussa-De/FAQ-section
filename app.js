const log = console.log;

function getDomElement(cls) {
  return document.querySelector(cls);
}

function getDomElements(cls) {
  return document.querySelectorAll(cls);
}

const btns = [...getDomElements(".question button")];
const arrows = [...getDomElements(".question img")];

for (let btn of btns) {
  btn.classList.remove("expand");

  btn.addEventListener("click", (evt) => {
    for (let arrow of arrows) {
      arrow.classList.remove("active");
    }

    btn.classList.toggle("expand");

    const ans = btn.parentElement.nextElementSibling;

    if (!btn.classList.contains("expand")) {
      btn.lastElementChild.classList.remove("active");
      ans.classList.remove("show");
    } else {
      btn.lastElementChild.classList.add("active");
      ans.classList.add("show");
    }
  });
}
