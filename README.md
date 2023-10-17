# Clinique

Cliniqueue is a simplified app that allows patients to easily reserve appointments for medical consultations. Patients choose a convenient time based on the clinic's schedule and receive a queue number, ensuring a smooth and organized clinic experience.

## Design Pattern

On this app I implement MVC, RESTful API Design, Router Pattern, Async/Await and Error Handling Middleware

## Schema

The Entity Relationship Diagram is located at schema folder, the branches arrow meaning is One To Many relationship and the straight line meaning is One to One relationship

## Running the application on Docker

First of all make sure you make a .env file for the Docker to use, the example is on .env.example and then run these command line in order

    docker-compose up --build

    docker exec -it cliniqueue-app-1 npx sequelize db:migrate

after that you could try to hit the API

## API Documentation

[Postman API](https://api.postman.com/collections/30551856-3f74c2da-da95-43c4-8623-5b62210cc1dc?access_key=PMAT-01HCYFPS4YSVHRHPGBGNMJXPTQ)


