# 🎵 Application NoSQL Full Stack (Dockerized Spotify-like)

Ce projet est une application web full stack simulant un mini Spotify. Elle est construite avec :
- **Frontend** : Vite + Vue.js
- **Backend** : Express.js + TypeScript
- **Base de données** : MongoDB
- **Orchestration** : Docker + Docker Compose

---

## ✅ Objectifs pédagogiques atteints

- ✅ **Conteneurisation** complète de chaque composant (frontend, backend, MongoDB)
- ✅ Utilisation de **Docker Compose** pour tout orchestrer
- ✅ **Persistance** des données MongoDB via un volume
- ✅ **Communication réseau sécurisée** entre les conteneurs
- ✅ Déploiement local en une seule commande
- ✅ Images Docker publiées sur Docker Hub

---

## 🏗️ Architecture des conteneurs

```mermaid
graph TD
  A[Frontend (Vite)] -->|API REST| B[Backend (Express.js)]
  B -->|Mongoose| C[MongoDB]
  subgraph Docker
    A
    B
    C
  end

🚀 Lancer le projet
Prérequis :
Docker & Docker Compose installés

Commandes à exécuter :
# 1. Cloner le projet
git clone https://github.com/AyoubHoc/nosql-docker-project.git
cd nosql-docker-project

# 2. Lancer les conteneurs
docker-compose up --build

🌐 Accès à l'application
Frontend : http://localhost:5173

Backend API : http://localhost:3000

Test DB (collections MongoDB) : http://localhost:3000/test-db

🗃️ Docker Compose – explication du fichier
Le fichier docker-compose.yml orchestre 3 services :

frontend : dépend du backend, exposé sur le port 5173

backend : dépend de mongo, exposé sur le port 3000

mongo : base de données persistante avec volume mongo-data

Utilise un réseau commun (app-network) pour isoler et sécuriser les communications internes.

📦 Images Docker
Les images Docker personnalisées du front et back sont construites automatiquement à partir des Dockerfile présents dans les dossiers :

frontend/Dockerfile

backend/Dockerfile

🔐 Variables d'environnement
Le backend lit sa configuration (ex: MONGO_URL) depuis un fichier .env (copié dans l’image).

📁 Structure du projet
nosql-docker-project/
├── backend/
│   ├── Dockerfile
│   ├── src/
├── frontend/
│   ├── Dockerfile
├── docker-compose.yml
├── .env
└── README.md


📤 Démo locale
Pour une démo rapide sur votre propre machine :

git clone https://github.com/AyoubHoc/nosql-docker-project.git
cd nosql-docker-project
docker-compose up --build


👨‍💻 Auteurs
Ayoub Hocini leo CROFT Ana Fernandes – 