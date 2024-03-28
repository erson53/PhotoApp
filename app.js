document
  .getElementById("photoUpload")
  .addEventListener("change", function (event) {
    const files = event.target.files;
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("photos", files[i]);
    }

    fetch("http://localhost:3000/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        fetchAndDisplayImages(); // Nach dem Upload die Bilder neu laden
      })
      .catch((error) => {
        console.error("Fehler beim Hochladen:", error);
      });
  });

let currentIndex = 0; // Variable für den aktuellen Index
let images = []; // Leeres Array, das später die Bilder speichert

function fetchAndDisplayImages() {
  fetch("http://localhost:3000/images")
    .then((response) => response.json())
    .then((data) => {
      images = data; // Speichert die Bilder im Array
      displayImages(); // Funktion zum Anzeigen der Bilder
    })
    .catch((error) => console.error("Fehler beim Laden der Bilder:", error));
}

function displayImages() {
  const photosContainer = document.getElementById("photosContainer");
  photosContainer.innerHTML = ""; // Leert den Container vor dem erneuten Befüllen
  images.forEach((image, index) => {
    const imgContainer = document.createElement("div");
    imgContainer.className = "inline-block relative";

    const imgElement = document.createElement("img");
    imgElement.src = image.url;
    imgElement.alt = image.name;
    imgElement.className = "w-24 h-24 object-cover m-2 cursor-pointer"; // Tailwind CSS für Styling
    imgElement.onclick = function () {
      currentIndex = index; // Setzt den aktuellen Index
      document.getElementById("imageModal").style.display = "block";
      updateModalImage(); // Aktualisiert das Bild im Modal
    };
    imgContainer.appendChild(imgElement);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Löschen";
    deleteButton.className =
      "absolute top-0 right-0 bg-red-500 text-white p-1 text-xs"; // Tailwind CSS für Styling
    deleteButton.onclick = function () {
      fetch(`http://localhost:3000/image/${encodeURIComponent(image.name)}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          fetchAndDisplayImages(); // Bilderliste neu laden, um das gelöschte Bild zu entfernen
        })
        .catch((error) => {
          console.error("Fehler beim Löschen des Bildes:", error);
        });
    };
    imgContainer.appendChild(deleteButton);

    photosContainer.appendChild(imgContainer);
  });
}

document.getElementById("closeModal").onclick = function () {
  document.getElementById("imageModal").style.display = "none";
};

window.onclick = function (event) {
  if (event.target == document.getElementById("imageModal")) {
    document.getElementById("imageModal").style.display = "none";
  }
};

document.getElementById("prevImg").onclick = function () {
  if (currentIndex > 0) {
    currentIndex--;
    updateModalImage();
  }
};

document.getElementById("nextImg").onclick = function () {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    updateModalImage();
  }
};

function updateModalImage() {
  const image = images[currentIndex];
  document.getElementById("modalImg").src = image.url;
  document.getElementById("caption").innerHTML = image.name;
}

window.onload = fetchAndDisplayImages;
