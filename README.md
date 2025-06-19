# 🎬 Movie Reviews API

API REST construida con **Node.js** y **Express** para gestionar reseñas de películas. Incluye validación con Joi, autenticación con JWT, manejo de errores y persistencia en archivo JSON.

## 🚀 Tecnologías utilizadas

- Node.js
- Express
- Joi
- Morgan
- JSON Web Token (JWT)
- dotenv
- uuid

---

## 📁 Estructura del proyecto

```
movie-reviews-api/
├── controllers/
├── middlewares/
├── routes/
├── services/
├── utils/
├── data/
├── .env
├── package.json
├── server.js
```

---

## ⚙️ Configuración inicial

### 1. Clona el repositorio (si aplica)

```bash
git clone https://github.com/usuario/movie-reviews-api.git
cd movie-reviews-api
```

### 2. Instala dependencias

```bash
npm install
```

### 3. Variables de entorno

Crea un archivo `.env` en la raíz con:

```env
PORT=3000
JWT_SECRET=Uem1234!
ADMIN_USER=admin
ADMIN_PASS=1234
```

---

## 📦 Scripts disponibles

```bash
npm run dev     # Ejecuta el servidor en modo desarrollo (con nodemon)
npm start       # Ejecuta el servidor en producción
```

---

## 🔐 Autenticación

Para acceder a las rutas protegidas (`POST`, `PUT`, `DELETE`) necesitas un token JWT válido. Obténlo con:

### POST `/login`

```bash
POST http://localhost:3000/login \
BODY '{"username":"admin","password":"1234"}'
```

Respuesta:

```json
{ "token": "eyJhbGciOi..." }
```

---

## 📚 Endpoints disponibles

### ✅ `GET /api/reviews`
Obtiene todas las reseñas (público)

---

### 🔍 `GET /api/reviews/:id`
Obtiene una reseña específica (público)

---

### ✍️ `POST /api/reviews`
Crea una nueva reseña (requiere token)

**Body requerido:**
```json
{
  "titulo": "Matrix",
  "descripcion": "Cyberpunk clásico.",
  "fechaEstreno": "1999-03-31",
  "puntaje": 9
}
```

---

### ✏️ `PUT /api/reviews/:id`
Actualiza una reseña existente (requiere token)

---

### ❌ `DELETE /api/reviews/:id`
Elimina una reseña por ID (requiere token)

---

## 🧪 Validaciones

- `titulo`: mínimo 3 caracteres (obligatorio)
- `fechaEstreno`: formato `YYYY-MM-DD` (obligatorio)
- `puntaje`: entre 1 y 10 (opcional)
- `descripcion`: opcional

---

## Datos

Los datos se almacenan en el archivo local: `data/reviews.json`.

---

## ✍️ Autor

- **Desarrollado por:** [Tu Nombre]
- **Curso:** Desarrollo Avanzado de Backend y APIs
- **Universidad Europea**