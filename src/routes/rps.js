const express = require("express");
const router = express.Router();
let games = [];
let nextGameId = 1;
//Get operation
router.get("/:id", (req, res) => {
  const gameId = parseInt(req.params.id);
  const game = games.find((g) => g.id === gameId);
  if (!game) {
    return res.status(404).json({ error: "Game not found" });
  }
  res.json(game);
});
//Create game POST operation
router.post("/", (req, res) => {
  if (req.body.name == undefined)
    return res.status(400).json({ error: "Bad request" });
  const game = {
    id: nextGameId,
    players: [{ name: req.body.name, move: undefined }],
  };
  games.push(game);
  nextGameId++;
  res.status(201).json({ id: game.id });
});
//join Game PUT player 2 in to that game
router.put("/:gameId/join", (req, res) => {
  const { name } = req.body;
  const gameId = parseInt(req.params.gameId);
  const game = games.find((g) => g.id === gameId);
  if (name == undefined) return res.status(400).json({ error: "Bad request" });
  if (!game) return res.status(404).json({ error: "Game not found" });
  if (game.players.length >= 2)
    return res.status(400).json({ error: "Max 2 players per game" });
  if (game.players.some((player) => player.name === name))
    return res.status(400).json({ error: "Player already exists in the game" });
  game.players.push({ name });
  res.json({ message: "Successfully joined the game" });
});
// PUT player moves.
router.put("/:gameId/move", (req, res) => {
  const { name, move } = req.body;
  const gameId = parseInt(req.params.gameId);
  const game = games.find((g) => g.id === gameId);
  if (name == undefined || move == undefined)
    return res.status(400).json({ error: "Bad request" });
  if (!game) return res.status(404).json({ error: "Game not found" });
  if (game.players.some((player) => player.name === name && !player.move)) {
    game.players.find((player) => player.name === name).move = move;
    res.json({ message: "Move recorded" });
  } else {
    return res.status(400).json({ error: "Invalid player or duplicate move" });
  }
});

module.exports = router;
