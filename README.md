## Contexte du Projet

Cette application est un projet d’exercice visant à mettre en œuvre les compétences de conteneurisation d’une application full stack avec MongoDB, un backend Node.js/Express en TypeScript, et un frontend Vue.js. L'objectif principal est de prouver la maîtrise de Docker et Docker Compose pour créer un environnement de déploiement cohérent, persistant et réseau-sécurisé.

---

## Structure des Dossiers

```
nosql-docker-project/
├── backend/
│   ├── Dockerfile
│   └── src/
│       └── routes/
│           └── test.ts
├── frontend/
│   └── Dockerfile
├── docker-compose.yml
└── README.md

```

---

## Configuration du fichier `docker-compose.yml`

```yaml
services:
  mongo:
    image: mongo
    container_name: mongo
    ports:
      - "27017:27017"
    volumes:
      - mongo-data:/data/db
    networks:
      - app-network

  backend:
    build: ./backend
    container_name: backend
    ports:
      - "3000:3000"
    depends_on:
      - mongo
    environment:
      - MONGO_URL=mongodb://mongo:27017/nosql-database
    networks:
      - app-network

  frontend:
    build: ./frontend
    container_name: frontend
    ports:
      - "5173:5173"
    depends_on:
      - backend
    networks:
      - app-network

volumes:
  mongo-data:

networks:
  app-network:
    driver: bridge

```

### Composants Clés

- **Volumes**: `mongo-data` permet de persister les données de MongoDB.
- **Networks**: `app-network` crée un réseau isolé pour sécuriser les communications.
- **depends_on**: assure l’ordre de démarrage des services.

---

## Etapes pour démarrer l'application

### 1. Connexion Docker

```bash
docker login

```

(S'assurer que vous êtes connecté avec le bon compte Docker Hub.)

### 2. Build et lancement des services

```bash
docker-compose up --build

```

### 🔌 3. Vérifier les conteneurs

```bash
docker ps

```

Vérifiez que `mongo`, `backend` et `frontend` sont bien lancés.

### 🖊️ 4. Accès à l'application

- **Frontend**: [http://localhost:5173](http://localhost:5173/)
- **Backend (API)**: [http://localhost:3000](http://localhost:3000/)
- **MongoDB**: port local 27017 utilisable avec un client type Compass

---

## Publication sur Docker Hub

### Tag des images

```bash
docker tag nosql-docker-project-backend bu0ya/nosql-back:latest
docker tag nosql-docker-project-frontend bu0ya/nosql-front:latest

```

### 🚀 Push vers Docker Hub

```bash
docker push bu0ya/nosql-back:latest
docker push bu0ya/nosql-front:latest

```

- **Vérification**: Accéder à https://hub.docker.com/repositories/bu0ya

---

## Notes Supplémentaires pour le Rapport

- Tous les changements de code ont été commis sur GitHub: https://github.com/AyoubHoc/nosql-docker-project
- L’image backend contient un routeur `/` qui liste les collections MongoDB disponibles
- Le projet a été validé sur une VM Ubuntu avec Docker Engine et fonctionne en local

---

## Conclusion

Ce projet prouve la maîtrise de la conteneurisation d’une application web complète, la persistance des données via des volumes, la gestion des dépendances avec Docker Compose, et la publication d’images sur Docker Hub pour faciliter les déploiements futurs.

Réaliser par Ayoub Hocini - Leo CROFT - Ana Fernandes
