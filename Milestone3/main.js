//Array che include tutte le icone
const icons = [
  {
    name: 'cat',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas'
  },
  {
    name: 'crow',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas'
  },
  {
    name: 'dog',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas'
  },
  {
    name: 'dove',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas'
  },
  {
    name: 'dragon',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas'
  },
  {
    name: 'horse',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas'
  },
  {
    name: 'hippo',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas'
  },
  {
    name: 'fish',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas'
  },
  {
    name: 'carrot',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas'
  },
  {
    name: 'apple-alt',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas'
  },
  {
    name: 'lemon',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas'
  },
  {
    name: 'pepper-hot',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas'
  },
  {
    name: 'user-astronaut',
    prefix: 'fa-',
    type: 'user',
    family: 'fas'
  },
  {
    name: 'user-graduate',
    prefix: 'fa-',
    type: 'user',
    family: 'fas'
  },
  {
    name: 'user-ninja',
    prefix: 'fa-',
    type: 'user',
    family: 'fas'
  },
  {
    name: 'user-secret',
    prefix: 'fa-',
    type: 'user',
    family: 'fas'
  }
];

// Dichiarazione 
const container = document.querySelector('.container')
const row = document.querySelector('.row');
const iconType = document.getElementById('iconType');


function genIcons() {
  row.innerHTML = '';

  icons.forEach(icon => {

    if (iconType.value == icon.type || iconType.value == 'all') {

      row.innerHTML += genCard(icon);
    }
  })
}

function genCard(icon) {
  return `
  <div class="col">
  <div class="bg-light rounded text-center">
  <i class="${icon.family} ${icon.prefix}${icon.name} fa-5x pt-4   ${icon.type}"></i>
  <p class="fs-3"><strong>${icon.name}</strong></p>
  </div>
  </div>
  `
}

iconType.addEventListener('change', genIcons)