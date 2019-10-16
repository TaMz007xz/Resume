let addSkill = document.getElementById("addSkill");
addSkill.addEventListener("click", () => {
  let listSkill = document.getElementById("listSkill");
  let skill = document.getElementById("skill").value;
  let range = document.getElementById("skillRange").value;
  let el = ` 
  <li>
    <p>${skill}</p>
    <div class="progressbar">
      <div style="width:${parseInt(range)}%"></div>
    </div>
  </li>`;
  listSkill.insertAdjacentHTML("beforeend", el);
});

let bgColor = document.getElementById("bgColor");
bgColor.addEventListener("change", () => {
  document.body.style.backgroundColor = bgColor.value;
});
