const service = require('../services/reviews.service');

function getAll(req, res) {
    res.json(service.getAll());
}

function getById(req, res) {
    const review = service.getById(req.params.id);
    if (!review) return res.status(404).json({ error: 'No encontrada' });
    res.json(review);
}

function create(req, res) {
    const created = service.create(req.body);
    res.status(201).json(created);
}

function update(req, res) {
    const updated = service.update(req.params.id, req.body);
    if (!updated) return res.status(404).json({ error: 'No encontrada' });
    res.json(updated);
}

function remove(req, res) {
    const success = service.remove(req.params.id);
    if (!success) return res.status(404).json({ error: 'No encontrada' });

    res.status(200).json({ message: 'Reseña eliminada exitosamente' });
}

module.exports = { getAll, getById, create, update, remove };
