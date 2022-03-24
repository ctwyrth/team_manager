const { Player } = require("../models/team_manager.model");

module.exports.findAllPlayers = (req, res) => {
   Player.find({})
      .then(allPlayers => res.json(allPlayers))
      .catch(err => res.status(400).json(err));
};

module.exports.findOneSinglePlayer = (req, res) => {
   Player.findOne({ _id: req.params.id })
      .then(oneSinglePlayer => res.json(oneSinglePlayer))
      .catch(err => res.status(400).json(err));
};

module.exports.createNewPlayer = (req, res) => {
   Player.create(req.body)
      .then(newlyCreatedPlayer => res.json(newlyCreatedPlayer))
      .catch(err => res.status(400).json(err));
};

module.exports.updateExistingPlayer = (req, res) => {
   Player.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
      .then(updatedUser => res.json(updatedUser ))
      .catch(err => res.status(400).json(err));
};

module.exports.deleteAnExistingPlayer = (req, res) => {
   Player.deleteOne({ _id: req.params.id })
      .then(result => res.json(result))
      .catch(err => res.status(400).json(err));
};

module.exports.exists = (req, res) => {
   Player.exists({name: req.body.name})
      .then(playerExists => {
      if (playerExists) {
         // Promise.reject() will activate the .catch() below.
         return Promise.reject('Error Message Goes Here');
      }
      return Player.create(req.body);
   })
   .then(saveResult => res.json(saveResult))
   .catch(err => res.status(400).json(err));
}

module.exports.index = (request, response) => {
   response.json({
      message: "Hello World"
   });
}