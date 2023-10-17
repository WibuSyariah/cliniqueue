# Clinique

Cliniqueue is a simplified app that allows patients to easily reserve appointments for medical consultations. Patients choose a convenient time based on the clinic's schedule and receive a queue number, ensuring a smooth and organized clinic experience.

## Design Pattern

On this app I implement MVC, RESTful API Design, Router Pattern, Async/Await and Error Handling Middleware

## Schema

The Entity Relationship Diagram is located at schema folder, the branches arrow meaning is One To Many relationship

## Running the application on Docker

First of all make sure you make a .env file for the Docker to use, the example is on .env.example and then run these command line in order

    docker-compose up --build

    docker exec -it cliniqueue-app-1 npx sequelize db:migrate

after that you could try to hit the API

## API Documentation

[Postman API](https://www.postman.com/lunar-shadow-787443/workspace/zi-care)


