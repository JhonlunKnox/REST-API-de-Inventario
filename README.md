# Inventory REST API

A RESTful API for inventory management built with Node.js, Express, and PostgreSQL. Features JWT authentication, role-based access control (admin/user), full CRUD for products, and interactive Swagger documentation.

## Live Demo
> API Docs: [https://your-api.railway.app/api/docs](https://your-api.railway.app/api/docs)

---

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express
- **Database:** PostgreSQL
- **Auth:** JWT + bcryptjs
- **Docs:** Swagger UI (OpenAPI 3.0)
- **Deploy:** Railway

---

## Features

- User registration and login with hashed passwords (bcrypt)
- JWT-protected routes with 24h expiration
- Role-based access: `admin` can create, update, and delete products
- Public read access for product listing
- Full CRUD for products
- Interactive API documentation at `/api/docs`
- Clean MVC architecture

---

## Getting Started

### Prerequisites

- Node.js v18+
- PostgreSQL

### Installation

```bash
# Clone the repo
git clone https://github.com/JhonlunKnox/inventory-api.git
cd inventory-api

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Fill in your DB credentials and JWT secret in .env

# Create tables in your PostgreSQL database
# Run the SQL in database/schema.sql using pgAdmin or psql

# Start the development server
npm run dev
```

### Environment Variables

```env
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=your_password
DB_NAME=inventory_db
JWT_SECRET=your_secret_key
```

---

## API Endpoints

### Auth

| Method | Endpoint             | Description         | Auth     |
|--------|----------------------|---------------------|----------|
| POST   | /api/auth/register   | Register a new user | Public   |
| POST   | /api/auth/login      | Login → get JWT     | Public   |

### Products

| Method | Endpoint             | Description         | Auth          |
|--------|----------------------|---------------------|---------------|
| GET    | /api/products        | List all products   | Public        |
| GET    | /api/products/:id    | Get one product     | Public        |
| POST   | /api/products        | Create a product    | Admin only    |
| PUT    | /api/products/:id    | Update a product    | Admin only    |
| DELETE | /api/products/:id    | Delete a product    | Admin only    |

---

## How to Authenticate

1. Register a user via `POST /api/auth/register`
2. Login via `POST /api/auth/login` — you'll receive a JWT token
3. Add the token to your requests as a header:
   ```
   Authorization: Bearer <your_token>
   ```

---

## Project Structure

```
src/
├── config/
│   └── db.js               # PostgreSQL connection
├── controllers/
│   ├── auth.controller.js   # Register & login logic
│   └── product.controller.js# CRUD logic
├── middlewares/
│   ├── auth.middleware.js   # JWT verification
│   └── role.middleware.js   # Admin role check
├── routes/
│   ├── auth.routes.js
│   └── product.routes.js
└── app.js                   # Express app entry point
swagger/
└── swagger.yaml             # OpenAPI 3.0 documentation
```

---

## Author

**Juan Pablo Luna Zuleta**
- Portfolio: [portafolio-dev-dls.pages.dev](https://portafolio-dev-dls.pages.dev)
- GitHub: [@JhonlunKnox](https://github.com/JhonlunKnox)
- LinkedIn: [linkedin.com/in/juan-pablo-zuleta-967277334](https://linkedin.com/in/juan-pablo-zuleta-967277334)