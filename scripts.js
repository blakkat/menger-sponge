const htmlValue = ` <div class="square full"></div>
    <div class="square full"></div>
    <div class="square full"></div>
    <div class="square full"></div>
    <div class="square empty"></div>
    <div class="square full"></div>
    <div class="square full"></div>
    <div class="square full"></div>
    <div class="square full"></div>`;

const addDivs = () => {
  const emptyDivs = [...document.querySelectorAll(".full:empty")];
  emptyDivs.map((div) => {
    div.innerHTML = htmlValue;
  });
};

const howDeep = (x) => (f) => {
  if (x > 0) {
    f();
    howDeep(x - 1)(f);
  }
};

howDeep(3)(() => addDivs());
