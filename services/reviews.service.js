const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const DATA_PATH = path.join(__dirname, '../data/reviews.json');

function readReviews() {
    const data = fs.readFileSync(DATA_PATH, 'utf-8');
    return JSON.parse(data);
}

function writeReviews(reviews) {
    fs.writeFileSync(DATA_PATH, JSON.stringify(reviews, null, 2));
}

function getAll() {
    return readReviews();
}

function getById(id) {
    return readReviews().find(r => r.id === id);
}

function create(data) {
    const reviews = readReviews();
    const newReview = { id: uuidv4(), ...data };
    reviews.push(newReview);
    writeReviews(reviews);
    return newReview;
}

function update(id, data) {
    const reviews = readReviews();
    const index = reviews.findIndex(r => r.id === id);
    if (index === -1) return null;
    reviews[index] = { ...reviews[index], ...data };
    writeReviews(reviews);
    return reviews[index];
}

function remove(id) {
    const reviews = readReviews();
    const filtered = reviews.filter(r => r.id !== id);
    if (filtered.length === reviews.length) return false;
    writeReviews(filtered);
    return true;
}

module.exports = { getAll, getById, create, update, remove };
