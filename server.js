require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const reviewRoutes = require('./routes/reviews.routes');
const errorHandler = require('./middlewares/error.middleware');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.json());
app.use('/api/reviews', reviewRoutes);
app.use(errorHandler);

const jwt = require('jsonwebtoken');

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Simple autenticación ficticia
    if (username === 'admin' && password === '1234') {
        const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return res.json({ token });
    }

    res.status(401).json({ error: 'Credenciales inválidas' });
});


app.listen(PORT, () => {
    console.log(`Servidor inciado en http://localhost:${PORT}`);
});
