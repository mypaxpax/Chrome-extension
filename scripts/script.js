const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  console.log(myLeads);
});

let listItems = "";

for (let i = 0; i < myLeads.length; i++) {
  const li = document.createElement("li");
  li.textContent = myLeads[i];
  ulEl.append(li);
}
