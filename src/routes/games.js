const express = require("express");
const router = express.Router();

let games = [];
let players = [];
let nextGameId = 1;

router.post("/", (req, res) => {
  const game = {
    id: nextGameId,
    player1: { name: req.body.name, isWinner: false },
    player2: null,
    move1: null,
    move2: null,
    result: null,
  };
  games.push(game);
  nextGameId++;
  res.status(201).json({ id: game.id });
});

router.get("/:id", (req, res) => {
  const gameId = parseInt(req.params.id);
  const game = games.find((g) => g.id === gameId);
  if (!game) {
    return res.status(404).json({ error: "Game not found" });
  }
  res.json(game);
});

router.post("/:gameId/join", (req, res) => {
  const { name } = req.body;
  const gameId = parseInt(req.params.gameId);
  const game = games.find((g) => g.id === gameId && !g.isWinner);
  if (!game) {
    return res.status(404).json({ error: "Game not found" });
  }

  if (game.player2 != null) {
    return res.status(400).json({ error: "Game already has players" });
  }
  game.player2 = { name, isWinner: false };
  res.json({ message: "Successfully joined the game" });
});

router.post("/:gameId/move", (req, res) => {
  const { name, move } = req.body;
  const gameId = parseInt(req.params.gameId);
  const game = games.find((g) => g.id === gameId);

  if (!game) {
    return res.status(404).json({ error: "Game not found" });
  }

  if (game.result) {
    return res.status(400).json({ error: "Game already finished" });
  }
  if (game.player1.name == name) {
    if (game.move1 == null) {
      game.move1 = move;
    } else {
      return res
        .status(400)
        .json({ error: "Player 1 has already made a move" });
    }
  } else if (game.player2.name == name) {
    if (game.move2 == null) {
      game.move2 = move;
    } else {
      return res
        .status(400)
        .json({ error: "Player 2 has already made a move" });
    }
  } else {
    return res.status(400).json({ error: "Invalid player" });
  }
  res.json({ message: "Move recorded" });
});

module.exports = router;
