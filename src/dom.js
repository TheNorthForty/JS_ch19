console.log("dom file");

const body = document.querySelector("body");

const styleBody = () => {
  body.style.background = "peachpuff";
};

const addTitle = text => {
  const title = document.createElement("h1");
  title.textContent = text;
  body.appendChild(title);
};

const contact = "no@whoisthis.nom";

export { styleBody, addTitle, contact };
