// script.js

// Lista folderów z obrazami
const folders = ['auto1', 'auto2', 'auto3', 'auto4', 'auto5'];

// Wybierz losowy folder z listy
const randomFolder = folders[Math.floor(Math.random() * folders.length)];

// Funkcja pobierająca wszystkie obrazy z wybranego folderu
function getImagesFromFolder(folderPath) {
    fetch(`./img/gruzy/${folderPath}`)
        .then(response => response.json())
        .then(data => {
            const imageContainer = document.getElementById('imageContainer');

            // Wyświetl każde zdjęcie w kontenerze
            data.images.forEach(image => {
                const imgElement = document.createElement('img');
                imgElement.src = `/img/gruzy/${folderPath}/${image}`;
                imgElement.alt = image;
                imgElement.classList.add('image');
                imageContainer.appendChild(imgElement);
            });
        })
        .catch(error => {
            console.error('Błąd pobierania danych:', error);
            alert('Wystąpił błąd podczas pobierania danych.');
        });
}

// Wywołaj funkcję pobierającą obrazy z losowego folderu
getImagesFromFolder(randomFolder);