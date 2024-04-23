
let selectedCharacters = [];

fetch('https://akabab.github.io/superhero-api/api/all.json')
    .then(response => response.json())
    .then(data => {
        const superheroList = document.getElementById('superheroList');

        data.forEach(hero => {
            const superheroDiv = document.createElement('div');
            superheroDiv.classList.add('superhero');

            superheroDiv.innerHTML = `
                <img src="${hero.images.sm}" alt="${hero.name}">
                <button id=" ${hero.id}">Select:${hero.name}</button>
            `;
            superheroList.appendChild(superheroDiv);

            
            const heroButton = superheroDiv.querySelector('button');
            heroButton.addEventListener('click', function () {
                console.log('Le bouton', hero.name, 'a été cliqué !');
            });
        });
    })
    .catch(error => {
        console.error('Error fetching superheroes:', error);
    });







