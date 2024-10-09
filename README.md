# Rock Paper Scissors API

## Table of Contents

- [Introduction](#introduction)
- [Requirements](#requirements)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)

## Introduction

This is a RESTful API implementation for a Rock Paper Scissors game.

## Requirements

- [Node.js (version 14.x or higher)](https://nodejs.org/)
- [Express.js (version 4.x or higher)](https://expressjs.com/)

## Installation

Install dependencies:

```
   npm install
```

## Running the Application

Start the server:

```
npm start
```

The server will start on port 3000 by default. You can change the port by setting the PORT environment variable.

## API Endpoints

There

#### GET /api/games/{id}

Returns the current state of a given game with included attributes. If no valid id is given 404 will be returned with messsage: "Game not found"

```json
{
"id": "some-game-id",
... other game attributes ...
}
```

#### POST /api/games

Creates a new game. if the object key name is missing in the body error 400 will be returned with message "bad request".

Enter player name in the request-body:

```json
{ "name": "Lisa" }
```

#### PUT /api/games/{id}/join

Connects to a game with a given ID. If no valid id is given 404 will be returned with messsage: "Game not found". If name of is the same as the other player error 400 will be returned with message "player already exists". If there are already 2 players in a game error 400 will be returned with message: "Max 2 players per game". if the object key name is missing in the body error 400 will be returned with message "bad request".

Enter player name in the request-body:

```json
{
  "name": "Pelle"
}
```

#### PUT /api/games/{id}/move

Make a move. If no valid id is given 404 will be returned with messsage: "Game not found". If player name is not in game or have already mad their move error 400 will be returned with message: "Invalid player or duplicate move". if the object keys name or move is missing in the body error 400 will be returned with message "bad request".

Enter name and move in the request-body:

```json
{
  "name": "Lisa",
  "move": "Rock"
}
```
