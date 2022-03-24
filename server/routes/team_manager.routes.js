const TeamManagerController = require('../controllers/team_manager.controller')

module.exports = (app) => {
   app.get("/api", (req, res) => {
      res.send("Our express api server is now sending this over to the browser");
   });
   app.get("/api/players", TeamManagerController.findAllPlayers);
   app.get("/api/player/:id", TeamManagerController.findOneSinglePlayer);
   app.post("/api/player/new", TeamManagerController.createNewPlayer);
   app.put("/api/player/:id/update", TeamManagerController.updateExistingPlayer);
   app.delete("/api/player/:id/delete", TeamManagerController.deleteAnExistingPlayer);
}