# tictactoe-backend
Tictactoe API's

## Dependencies:
- NodeJS
- ExpressJS
- PostgreSQL

## Clone the repository:
```
$ git clone https://github.com/masudcsesust04/tictactoe-backend.git
or
$ git clone git@github.com:masudcsesust04/tictactoe-backend.git
```

## DB connection and environment variable set
- Make a copy of ```.env.sample``` file and save it as ```.env```
- Create a database to your postgresql database from psql or pgadmin client.
- Then open ```.env``` file and update DB configuration based on your DB(PostgreSQL) setup.

## Install dependencies
Navigate to the cloned directory from terminal or command prompt then run:
```
$ npm install
```
## Run the backend API app
```
$ npm start
```

## List of API
Create and save a new round:
1. POST http://localhost:5000/api/rounds

Retrieve all rounds:
2. GET  http://localhost:5000/api/rounds

Find a single round with an id:
3. GET  http://localhost:5000/rounds/:id

Update a round by the id in the request:
4. PUT  http://localhost:5000/rounds/:id

Retrieve last round:
5. GET  http://localhost:5000/rounds-last

Retrieve all moves by round id:
6. GET  http://localhost:5000/rounds/:id/moves

Create and save a new move by a player:
7. POST http://localhost:5000/moves

Retrieve all moves: 
8. GET  http://localhost:5000/moves

