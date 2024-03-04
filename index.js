/* eslint-disable comma-dangle */
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const port = 8070;
const host = "127.0.0.1";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(express.static(path.join(dirname, "public")));
app.use(
  "/favicon.ico",
  express.static(path.join(dirname, "public", "images", "favicon.png")),
);

/**
 * Route GET pour afficher la page d'accueil.
 * Envoie le fichier 'index.html' comme réponse.
 *
 * @param {string} path - Le chemin de la route.
 * @param {function} callback - La fonction de callback qui gère la requête et la réponse.
 */
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: path.join(dirname) }, (err) => {
    if (err) throw new Error(err);
  });
});

/**
 * Route POST pour soumettre des messages.
 * Récupère le message du corps de la requête et l'envoie en réponse sur une nouvelle page.
 *
 * @param {string} path - Le chemin de la route.
 * @param {function} callback - La fonction de callback qui gère la requête et la réponse.
 */

function escapeHTML(str) {
  // eslint-disable-next-line no-useless-escape
  return str.replaceAll(/[&<>"'`=\/]/g, (specialCharacter) => {
    switch (specialCharacter) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      case "'":
        return "&#39;";
      case "`":
        return "&#x60;";
      case "=":
        return "&#x3D;";
      case "/":
        return "&#x2F;";
      default:
        return specialCharacter;
    }
  });
}
app.post("/comment", (req, res) => {
  const comment = escapeHTML(req.body.message);
  res.send(comment);
});

app.listen(port, host, () => {
  console.info(`Server started @ http://${host}:${port}.`);
});
