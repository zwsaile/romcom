// Create variables targetting the relevant DOM elements here 👇
var randomCoverButton = document.querySelector('.random-cover-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var makeCoverButton = document.querySelector('.make-new-button');
var homeButton = document.querySelector('.home-button');
var makeBookButton = document.querySelector('.create-new-book-button');

var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var firstDescriptor = document.querySelector('.tagline-1');
var secondDescriptor = document.querySelector('.tagline-2');

var homeView = document.querySelector('.home-view');
var formView = document.querySelector('.form-view');
var savedView = document.querySelector('.saved-view');

var coverInput = document.querySelector('#cover');
var titleInput = document.querySelector('#title');
var firstDescriptorInput = document.querySelector('#descriptor1');
var secondDescriptorInput = document.querySelector('#descriptor2');

var saveGrid = document.querySelector('.saved-covers-section');
//var miniCover = document.querySelectorAll('')
var savedRomComs = [];

var currentRomCom;

window.addEventListener('load', randomRomCom);

randomCoverButton.addEventListener('click', randomRomCom);

makeCoverButton.addEventListener('click', switchFormView);

homeButton.addEventListener('click', returnHome);

viewSavedButton.addEventListener('click', switchSavedView);

makeBookButton.addEventListener('click', submitNewRomCom);

saveCoverButton.addEventListener('click', saveRomCom);

// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function switchFormView() {
  homeView.classList.toggle('hidden');
  formView.classList.toggle('hidden');
  randomCoverButton.classList.toggle('hidden');
  saveCoverButton.classList.toggle('hidden');
  homeButton.classList.toggle("hidden");
};

function switchSavedView() {
  homeView.classList.toggle('hidden');
  savedView.classList.toggle('hidden');
  randomCoverButton.classList.toggle('hidden');
  saveCoverButton.classList.toggle('hidden');
  homeButton.classList.toggle('hidden');
};

function returnHome() {
  homeView.classList.toggle('hidden');
  savedView.classList.toggle('hidden');
  randomCoverButton.classList.toggle('hidden');
  saveCoverButton.classList.toggle('hidden');
  homeButton.classList.toggle('hidden');
};

function submitNewRomCom(event) {
  event.preventDefault();
  var submittedRomCom = new Cover(coverInput.value, titleInput.value, firstDescriptorInput.value, secondDescriptorInput.value);
  covers.push(submittedRomCom.cover);
  titles.push(submittedRomCom.title);
  descriptors.push(submittedRomCom.tagline1, submittedRomCom.tagline2);
  returnHome();
  displayNewRomCom();
};

function displayNewRomCom() {
  coverImage.src = coverInput.value;
  coverTitle.innerText = titleInput.value;
  firstDescriptor.innerText = firstDescriptorInput.value;
  secondDescriptor.innerText = secondDescriptorInput.value;
};

function saveRomCom() {
  if (!savedRomComs.includes(currentRomCom)) {
    savedRomComs.push(currentRomCom);
    displaySavedRomComs();
  }
};

function displaySavedRomComs() {
  var renderer = '';
  for (var i = 0; i < savedRomComs.length; i++) {
    renderer += `<section ondblclick='deleteRomComs(this.id)' class= "mini-cover" id="${savedRomComs[i].id}">
    <img class="cover-image" src=${savedRomComs[i].cover} >
    <h2 class="cover-title">${savedRomComs[i].title} </h2>
    <h3 class="tagline">A tale of <span class="tagline-1">${savedRomComs[i].tagline1} </span> and <span class="tagline-2">${savedRomComs[i].tagline2} </span></h3>
    <img class="price-tag" src="./assets/price.png">
    <img class="overlay" src="./assets/overlay.png">
    </section>`;
  }
  saveGrid.innerHTML = renderer;
};

function deleteRomComs(id) {
  for (var i = 0; i < savedRomComs.length; i++) {
    if (id == savedRomComs[i].id) {
      savedRomComs.splice(i, 1);
    };
    displaySavedRomComs();
  };
};

function randomRomCom() {
  currentRomCom = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)]);
  coverImage.src = currentRomCom.cover;
  coverTitle.innerText = currentRomCom.title;
  firstDescriptor.innerText = currentRomCom.tagline1;
  secondDescriptor.innerText = currentRomCom.tagline2;
};
