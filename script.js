const storage = localStorage.getItem('seznam');
if (storage) {
  const items = JSON.parse(storage);
  const recentlyAdded = document.getElementById('recently-added');
  for (let i = items.length - 1; i >= items.length - 5; i--) {
    const nazev = items[i].nazev;
    const url = items[i].url;
    const popis = items[i].popis;
    const div = document.createElement('div');
    div.innerHTML = `
      <h3><a href="${url}">${nazev}</a></h3>
      <p>${popis}</p>
      <p><a href="${url}">${url}</a></p>
    `;
    recentlyAdded.appendChild(div);
  }
}
const currentTestRezim = localStorage.getItem('testRezim');
if (currentTestRezim === 'true') {
  // Použít testovací režim
} else {
  // Použít ostrý provoz
}
if (currentTestRezim === 'true') {
  const searchButton = document.getElementById('search-button');
  searchButton.addEventListener('click', function() {
    const searchInput = document.getElementById('search-input');
    const searchValue = searchInput.value;
    const storage = localStorage.getItem('seznam');
    if (storage) {
      const seznam = JSON.parse(storage);
      const searchResults = document.getElementById('search-results');
      searchResults.innerHTML = '';
      for (let i = 0; i < seznam.length; i++) {
        const nazev = seznam[i].nazev;
        const url = seznam[i].url;
        const popis = seznam[i].popis;
        if (nazev.toLowerCase().includes(searchValue.toLowerCase()) || popis.toLowerCase().includes(searchValue.toLowerCase())) {
          const div = document.createElement('div');
          div.className = 'search-result';
          div.innerHTML = `
            <h3><a href="${url}">${nazev}</a></h3>
            <p>${popis}</p>
            <p><a href="${url}">${url}</a></p>
          `;
          searchResults.appendChild(div);
        }
      }
    }
  });
}
else {
  const searchButton = document.getElementById('search-button');
  searchButton.addEventListener('click', function() {
    const searchInput = document.getElementById('search-input');
    const searchValue = searchInput.value;
    const xml = new XMLHttpRequest();
    xml.open('GET', 'seznam.xml', true);
    xml.onload = function() {
      const data = xml.responseXML;
      const seznam = data.getElementsByTagName('polozka');
      const searchResults = document.getElementById('search-results');
      searchResults.innerHTML = '';
      for (let i = 0; i < seznam.length; i++) {
        const nazev = seznam[i].getElementsByTagName('nazev')[0].textContent;
        const url = seznam[i].getElementsByTagName('url')[0].textContent;
        const popis = seznam[i].getElementsByTagName('popis')[0].textContent;
        if (nazev.toLowerCase().includes(searchValue.toLowerCase()) || popis.toLowerCase().includes(searchValue.toLowerCase())) {
          const div = document.createElement('div');
          div.className = 'search-result';
          div.innerHTML = `
            <h3><a href="${url}">${nazev}</a></h3>
            <p>${popis}</p>
            <p><a href="${url}">${url}</a></p>
          `;
          searchResults.appendChild(div);
        }
      }
    };
    xml.send();
  });
}
const currentZobrazitExplicitni = localStorage.getItem('zobrazitExplicitni');
if (currentZobrazitExplicitni === 'true') {
  // Použít zobrazit explicitní obsah
} else {
  // Nepoužít zobrazit explicitní obsah
}

const currentPocetVysledku = localStorage.getItem('pocetVysledku');
if (currentPocetVysledku) {
  // Použít počet výsledků vyhledávání
} else {
  // Nepoužít počet výsledků vyhledávání
}

const currentTema = localStorage.getItem('tema');
if (currentTema) {
  // Použít téma
} else {
  // Nepoužít téma
}

const currentVelikostPisma = localStorage.getItem('velikostPisma');
if (currentVelikostPisma) {
  // Použít velikost písma
const currentZobrazitExplicitni = localStorage.getItem('zobrazitExplicitni');
if (currentZobrazitExplicitni === 'true') {
  // Použít zobrazit explicitní obsah
  const searchResults = document.getElementById('search-results');
  searchResults.addEventListener('click', function(event) {
    if (event.target.tagName === 'A') {
      const url = event.target.href;
      if (url.includes('explicit')) {
        // Použít zobrazit explicitní obsah
      }
    }
  });
} else {
  // Nepoužít zobrazit explicitní obsah
  const searchResults = document.getElementById('search-results');
  searchResults.addEventListener('click', function(event) {
    if (event.target.tagName === 'A') {
      const url = event.target.href;
      if (url.includes('explicit')) {
        // Nepoužít zobrazit explicitní obsah
        event.preventDefault();
      }
    }
  });
}

const currentPocetVysledku = localStorage.getItem('pocetVysledku');
if (currentPocetVysledku) {
  // Použít počet výsledků vyhledávání
  const searchButton = document.getElementById('search-button');
  searchButton.addEventListener('click', function() {
    const searchInput = document.getElementById('search-input');
    const searchValue = searchInput.value;
    const storage = localStorage.getItem('seznam');
    if (storage) {
      const seznam = JSON.parse(storage);
      const searchResults = document.getElementById('search-results');
      searchResults.innerHTML = '';
      for (let i = 0; i < currentPocetVysledku; i++) {
        const nazev = seznam[i].nazev;
        const url = seznam[i].url;
        const popis = seznam[i].popis;
        if (nazev.toLowerCase().includes(searchValue.toLowerCase()) || popis.toLowerCase().includes(searchValue.toLowerCase())) {
          const div = document.createElement('div');
          div.className = 'search-result';
          div.innerHTML = `
            <h3><a href="${url}">${nazev}</a></h3>
            <p>${popis}</p>
            <p><a href="${url}">${url}</a></p>
          `;
          searchResults.appendChild(div);
        }
      }
    }
  });
} else {
  // Nepoužít počet výsledků vyhledávání
  const searchButton = document.getElementById('search-button');
  searchButton.addEventListener('click', function() {
    const searchInput = document.getElementById('search-input');
    const searchValue = searchInput.value;
    const storage = localStorage.getItem('seznam');
    if (storage) {
      const seznam = JSON.parse(storage);
      const searchResults = document.getElementById('search-results');
      searchResults.innerHTML = '';
      for (let i = 0; i < seznam.length; i++) {
        const nazev = seznam[i].nazev;
        const url = seznam[i].url;
        const popis = seznam[i].popis;
        if (nazev.toLowerCase().includes(searchValue.toLowerCase()) || popis.toLowerCase().includes(searchValue.toLowerCase())) {
          const div = document.createElement('div');
          div.className = 'search-result';
          div.innerHTML = `
            <h3><a href="${url}">${nazev}</a></h3>
            <p>${popis}</p>
            <p><a href="${url}">${url}</a></p>
          `;
          searchResults.appendChild(div);
        }
      }
    }
  });
}

const currentTema = localStorage.getItem('tema');
if (currentTema) {
  // Použít téma
  const tema = document.getElementById('tema');
  tema.style.background = currentTema;
} else {
  // Nepoužít téma
  const tema = document.getElementById('tema');
  tema.style.background = 'white';
}

const currentVelikostPisma = localStorage.getItem('velikostPisma');
if (currentVelikostPisma) {
  // Použít velikost písma
  const pismo = document.getElementById('pismo');
  pismo.style.fontSize = currentVelikostPisma + 'px';
} else {
  // Nepoužít velikost písma
  const pismo = document.getElementById('pismo');
  pismo.style.fontSize = '16px';
}
const currentTypPisma = localStorage.getItem('typPisma');
if (currentTypPisma) {
  // Použít typ písma
  const pismo = document.getElementById('pismo');
  pismo.style.fontFamily = currentTypPisma;
} else {
  // Nepoužít typ písma
  const pismo = document.getElementById('pismo');
  pismo.style.fontFamily = 'Arial';
}

const currentZobrazovatNahledy = localStorage.getItem('zobrazovatNahledy');
if (currentZobrazovatNahledy === 'true') {
  // Použít zobrazovat náhledy
  const searchResults = document.getElementById('search-results');
  searchResults.addEventListener('click', function(event) {
    if (event.target.tagName === 'A') {
      const url = event.target.href;
      const img = document.createElement('img');
      img.src = url + '/thumbnail';
      event.target.appendChild(img);
    }
  });
} else {
  // Nepoužít zobrazovat náhledy
  const searchResults = document.getElementById('search-results');
  searchResults.addEventListener('click', function(event) {
    if (event.target.tagName === 'A') {
      const url = event.target.href;
      const img = document.createElement('img');
      img.src = '';
      event.target.appendChild(img);
    }
  });
}

const currentOznacovatVidea = localStorage.getItem('oznacovatVidea');
if (currentOznacovatVidea === 'true') {
  // Použít označovat videa
  const searchResults = document.getElementById('search-results');
  searchResults.addEventListener('click', function(event) {
    if (event.target.tagName === 'A') {
      const url = event.target.href;
      if (url.includes('video')) {
        const video = document.createElement('video');
        video.src = url;
        event.target.appendChild(video);
      }
    }
  });
} else {
  // Nepoužít označovat videa
  const searchResults = document.getElementById('search-results');
  searchResults.addEventListener('click', function(event) {
    if (event.target.tagName === 'A') {
      const url = event.target.href;
      if (url.includes('video')) {
        const video = document.createElement('video');
        video.src = '';
        event.target.appendChild(video);
      }
    }
  });
}

const currentDvoufaktorovaAutentizace = localStorage.getItem('dvoufaktorovaAutentizace');
if (currentDvoufaktorovaAutentizace === 'true') {
  // Použít dvoufaktorovou autentizaci
  const loginForm = document.getElementById('login-form');
  loginForm.addEventListener('submit', function(event) {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const authCode = document.getElementById('auth-code').value;
    if (username && password && authCode) {
      // Ověřit dvoufaktorovou autentizaci
    } else {
      event.preventDefault();
    }
  });
} else {
  // Nepoužít dvoufaktorovou autentizaci
  const loginForm = document.getElementById('login-form');
  loginForm.addEventListener('submit', function(event) {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username && password) {
      // Ověřit přihlášení
    } else {
      event.preventDefault();
    }
  });
}

// filtr

filterButton.addEventListener('click', function(e) {
  e.preventDefault();
  const category = filterCategory.value;
  const author = filterAuthor.value;
  const storage = localStorage.getItem('seznam');
  if (storage) {
    const seznam = JSON.parse(storage);
    const filteredResults = seznam.filter(function(item) {
      if (category !== 'all' && item.kategorie !== category) return false;
      if (author !== 'all' && item.autor !== author) return false;
      return true;
    });
    searchResults.innerHTML = '';
    filteredResults.forEach(function(item) {
      const li = document.createElement('li');
      li.innerHTML = `
        <a href="${item.url}">
          <img class="favicon" src="${item.url}/favicon.ico" alt="Favicon">
          <span class="title">${item.nazev}</span>
        </a>
        <span class="description">${item.popis}</span>
        <span class="url">${item.url}</span>
      `;
      searchResults.appendChild(li);
    });
  }
});
