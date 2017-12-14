'use strict';
const suljeNappi = document.querySelector('.closeBtn');
const modal = document.querySelector('#modal');
const loadJSON = (url, func) => {
  fetch(url).then((response) => {
    return response.json();
  }).then((json) => {
    func(json);
  });
};
const linkkiTapahtumat = () => {
  const linkit = document.querySelectorAll('ul a');
  // jne
  linkit.forEach((linkki) => {
    linkki.addEventListener('click', (evt) => {
      evt.preventDefault();
      document.querySelector('#modal img').setAttribute('src',linkki.href);
      modal.classList.replace('hidden', 'modal');

    })
  });
};
const templateFunction = (json) => {
  let html = '';
  json.forEach((kuva) => {
    html += `<li>
            <figure>
                <a href="img/original/${kuva.mediaUrl}"><img src="img/thumbs/${kuva.mediaThumb}"></a>
                <figcaption>
                    <h3>${kuva.mediaTitle}</h3>
                </figcaption>
            </figure>
        </li>`;
  });
  const element = document.querySelector('ul');
  element.innerHTML = html;
  // linkit voi valita vasta tämän jälkeen, eli html on nyt valmis
  linkkiTapahtumat();
};




modal.classList.replace('modal', 'hidden')

loadJSON('kuvat.json', templateFunction);

suljeNappi.addEventListener('click', (evt) => {
  evt.preventDefault();
  // vaihda modalin luokka lightboxista hiddeniin
  modal.classList.replace('modal', 'hidden')
});
