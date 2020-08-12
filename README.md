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
1. Create and save a new round: POST http://localhost:5000/api/rounds
2. Retrieve all rounds: GET  http://localhost:5000/api/rounds
3. Find a single round with an id: GET  http://localhost:5000/rounds/:id
4. Update a round by the id in the request: PUT  http://localhost:5000/rounds/:id
5. Retrieve last round: GET  http://localhost:5000/rounds-last
6. Retrieve all moves by round id: GET  http://localhost:5000/rounds/:id/moves
7. Create and save a new move by a player: POST http://localhost:5000/moves
8. Retrieve all moves: GET  http://localhost:5000/moves

