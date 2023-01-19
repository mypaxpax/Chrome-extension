const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

const delBtn = document.getElementById("delete-btn");
const inputBtn = document.getElementById("input-btn");
const saveTab = document.getElementById("save-tab-btn");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
console.log(leadsFromLocalStorage);

let myLeads = [];

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `<li><a target='_blank' href='${leads[i]}'>${leads[i]}</a></li>`;
  }
  ulEl.innerHTML = listItems;
}

delBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";

  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
});

saveTab.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});
