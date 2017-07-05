const {Message} = require('../models');

module.exports = {
  async index (req, res, next) {
    try {
      const messages = await Message.findAll({order: [['createdAt', 'DESC']]});
      res.json(messages);
    } catch (error) {
      res.json({error});
    }
  },

  async create (req, res, next) {
    const {content} = req.body;

    try {
      await Message.create({content});
      res.status(201).end();
    } catch (error) {
      res.json({error});
    }
  },

  async update (req, res, next) {
    const {id} = req.params;
    const {content} = req.body;

    try {
      const message = await Message.findById(id);
      await message.update({content});
      res.status(200).end();
    } catch (error) {
      res.json({error});
    }
  },

  async destroy (req, res, next) {
    const {id} = req.params;

    try {
      const message = await Message.findById(id);
      await message.destroy();
      res.status(200).end();
    } catch (error) {
      res.json({error});
    }
  }
};