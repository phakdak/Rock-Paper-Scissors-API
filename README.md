# Rock Paper Scissors API

## Table of Contents

- [Introduction](#introduction)
- [Requirements](#requirements)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)

## Introduction

This is a RESTful API implementation for a Rock Paper Scissors game. The API follows best practices and is designed to be maintainable.

## Requirements

- Node.js (version 14.x or higher)
- Express.js (version 4.x or higher)

## Installation

1. Clone the repository:

```
https://github.com/phakdak/Rock-Paper-Scissors-API.git
```

2. Install dependencies:

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

#### GET /api/games/{id}

Returns the current state of a given game with included attributes. Think about what
attributes to display and when.

```json
{
"id": "some-game-id",
... other game attributes ...
}
```

#### [POST | PUT | PATCH] /api/games

Creates a new game. Enter player name in the request-body:

```json
{ "name": "Lisa" }
```

#### [POST | PUT | PATCH] /api/games/{id}/join

Connects to a game with a given ID. Enter player name in the request-body:

```json
{
  "name": "Pelle"
}
```

#### [POST | PUT | PATCH] /api/games/{id}/move

Make a move. Enter name and move in the request-body:

```json
{
  "name": "Lisa",
  "move": "Rock"
}
```
