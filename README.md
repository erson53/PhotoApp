# Foto App Readme

Dieses Projekt ist eine einfache Foto-Webanwendung, die es ermöglicht, Bilder hochzuladen, anzuzeigen und zu löschen. Es verwendet JavaScript für die Frontend-Logik, Express.js für den Server und Multer für die Datei-Upload-Verarbeitung.

## Funktionen

- **Bilder hochladen**: Benutzer können Bilder von ihrem Gerät auswählen und hochladen.
- **Bilder anzeigen**: Die hochgeladenen Bilder werden in einer Galerieansicht angezeigt.
- **Bilder löschen**: Benutzer können einzelne Bilder aus der Galerie löschen.
- **Bild-Großansicht**: Benutzer können Bilder in einer vergrößerten Ansicht betrachten, indem sie darauf klicken.

## Verwendung

Um das Projekt lokal auszuführen, führen Sie die folgenden Schritte aus:

1. Stellen Sie sicher, dass Node.js auf Ihrem System installiert ist.
2. Klonen Sie das Repository auf Ihren lokalen Computer.
3. Navigieren Sie im Terminal zum Projektverzeichnis und installieren Sie die Abhängigkeiten mit dem Befehl `npm install`.
4. Starten Sie den Server, indem Sie den Befehl `node server.js` ausführen. Stellen Sie sicher, dass der Server auf Port 3000 läuft.
5. Öffnen Sie den Webbrowser und navigieren Sie zu `http://localhost:3000`.

## Dateistruktur

- **app.js**: Enthält die Frontend-Logik für das Hochladen, Anzeigen und Löschen von Bildern.
- **server.js**: Der Express.js-Server, der die Backend-Logik enthält und Datei-Uploads sowie Bildlöschvorgänge verarbeitet.
- **style.css**: Die CSS-Datei für das Styling der Webanwendung.

## Abhängigkeiten

- **Express.js**: Verwendet für das Backend und das Erstellen von RESTful-API-Routen.
- **Multer**: Verwendet für die Verarbeitung von Datei-Uploads.
- **Cors**: Ermöglicht Cross-Origin-Ressourcenfreigabe, damit das Frontend mit dem Backend kommunizieren kann.
- **Node.js**: Laufzeitumgebung für das Ausführen von JavaScript-Code auf dem Server.

## Hinweise

- **Tailwind CSS**: Das Projekt verwendet Tailwind CSS für das Styling der Benutzeroberfläche. Die Styles sind in der `style.css`-Datei definiert.
- **Media Queries**: Die Anwendung ist responsiv und passt sich an verschiedene Bildschirmgrößen an.

Für weitere Informationen zur Verwendung und Anpassung des Projekts lesen Sie bitte den Code und die Kommentare in den Dateien `app.js`, `server.js` und `style.css`.
