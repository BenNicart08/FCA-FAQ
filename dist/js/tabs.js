const tabs = document.querySelectorAll(".faq__tabs a");
const contents = document.querySelectorAll(".faq__details");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    removeActiveTab();
    tab.classList.add("active");
    const activeContent = document.querySelector(`#${tab.id}-contents`);
    removeActiveContent();
    activeContent.classList.add("active");
  });
});

function removeActiveTab() {
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });
}
function removeActiveContent() {
  contents.forEach((content) => {
    content.classList.remove("active");
  });
}
