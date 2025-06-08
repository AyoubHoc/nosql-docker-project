# 🎧 NoSQL Docker Project — Spotify Clone

Ce projet est une application full stack de type "Spotify" utilisant :
- Vue.js pour le frontend
- Node.js + Express pour le backend
- MongoDB pour la base de données

Le tout est conteneurisé via Docker 🐳.

---

## 📁 Structure du projet
nosql-docker-project/
├── backend/ # API Node.js
│ ├── Dockerfile
│ └── ...
├── frontend/ # Interface utilisateur Vue.js
│ ├── Dockerfile
│ └── ...
├── docker-compose.yml # Orchestration multi-conteneurs
└── README.md

## 🚀 Lancer l'application

1. Cloner le projet

git clone https://github.com/AyoubHoc/nosql-docker-project
cd nosql-docker-project

2. Lancer les conteneurs

docker compose up --build -d

3. Accéder à l'application
🎨 Frontend : http://<IP_VM>:5173

🧠 Backend : http://<IP_VM>:3000

🛢️ MongoDB : sur le port 27017

Remplace <IP_VM> par l'adresse IP de ta VM (ex. 192.168.126.141)

⚙️ Variables d'environnement
📦 backend/.env
PORT=3000
DB_URL=mongodb://mongo:27017/nosql
🎨 frontend/.env
VITE_API_URL=http://backend:3000

🐳 Images Docker
Tu peux retrouver les images Docker sur Docker Hub (si push réussi) :

https://hub.docker.com/r/bu0ya/nosql-frontend

https://hub.docker.com/r/bu0ya/nosql-backend

📚 Auteurs
Projet adapté depuis Hitoyu22

Repris, modifié et documenté par @AyoubHoc
