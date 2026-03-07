![Docker](https://img.shields.io/badge/Docker-Containerized-blue)
![Node](https://img.shields.io/badge/Node.js-Backend-green)
![Redis](https://img.shields.io/badge/Redis-Database-red)



# Dockerized URL Shortener

A containerized URL shortening service built using Node.js and Redis, deployed using Docker and Docker Compose.

---

## Tech Stack

Node.js  
Express.js  
Redis  
Docker  
Docker Compose  

---

## Architecture

Client → Node.js API → Redis Database

---

## Project Structure

Dockerimp-devpro
│
├── app
│   ├── server.js
│   └── package.json
│
├── Dockerfile
├── docker-compose.yml
└── screenshots

## Application Screenshots

Docker Build

![alt text](screenshoots/image.png)

Running Containers

![alt text](<screenshoots/Screenshot 2026-03-07 185027.png>)

API Test

![alt text](<screenshoots/Screenshot 2026-03-07 185131.png>)

How to Run the Project
git clone https://github.com/yourusername/dockerized-url-shortener.git

cd dockerized-url-shortener

docker compose up --build

Docker Hub Image
docker pull tarun08/url-shortener

Features

  - URL shortening API

  - Redis based storage

  - Containerized with Docker

  - Multi-container setup using Docker Compose# Docker-url-shortner-devpro
