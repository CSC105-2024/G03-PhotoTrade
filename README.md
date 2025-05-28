# PhotoTrade

## Getting Started

Clone the repository:
```bash
git clone https://github.com/CSC105-2024/G03-PhotoTrade.git
cd G03-PhotoTrade
```

---

## Frontend - React

### Tech Stack
- React
- Axios
- React Router DOM
- Tailwind CSS
- Shadcn/ui
- Redux Toolkit
- Radix UI Components
- Lucide React Icons
- React Hook Form

### Getting Started - React Client

Install dependencies:
```bash
npm install
```

Start the development server:
```bash
npm run dev --workspace frontend
```

The client will be running on http://localhost:5173

---

## Backend - Node.js

### Tech Stack
- Node.js
- Hono.js
- SQLite
- Prisma ORM
- JWT Authentication
- Cloudinary (Image Upload)

### API Endpoints

| Method | Endpoint                          | Description                    |
|--------|-----------------------------------|--------------------------------|
| POST   | `/api/v1/user/register`          | Create user account            |
| POST   | `/api/v1/user/login`             | User login                     |
| POST   | `/api/v1/user/logout`            | User logout                    |
| GET    | `/api/v1/user/me`                | Get current user info          |
| GET    | `/api/v1/user/all`               | Get all users                  |
| GET    | `/api/v1/user/:id`               | Get user by ID                 |
| PATCH  | `/api/v1/user/updateprofile/:id` | Update user profile            |
| POST   | `/api/v1/user/like`              | Like a photo                   |
| POST   | `/api/v1/user/follow`            | Follow another user            |
| DELETE | `/api/v1/user/unfollow`          | Unfollow a user                |
| DELETE | `/api/v1/user/unlike`            | Unlike a photo                 |
| POST   | `/api/v1/photo/upload`           | Upload new photo               |
| GET    | `/api/v1/photo/all`              | Get all photos                 |
| GET    | `/api/v1/photo/:id`              | Get photo by ID                |
| GET    | `/api/v1/photo/user/:id`         | Get photos by user ID          |
| GET    | `/api/v1/photo/category`         | Get photos by category         |
| DELETE | `/api/v1/photo/:id`              | Delete photo                   |
| GET    | `/api/v1/picture/:searchword`    | Search photos by keyword       |
| PUT    | `/api/v1/picture/updateprice`    | Update price every 100 likes  |
| POST   | `/api/v1/trade/buy`              | Buy/trade photo                |
| GET    | `/api/v1/trade/history`          | Get trading history            |
| GET    | `/api/v1/category/all`           | Get all categories             |
| POST   | `/api/v1/category/add`           | Add photo to category          |
| DELETE | `/api/v1/category/:id`           | Delete photo from category     |
| GET    | `/api/v1/collection`             | Get all collections            |
| GET    | `/api/v1/collection/:userid`     | Get collections by user        |
| GET    | `/api/v1/collection/top3`        | Get top 3 collections          |
| POST   | `/api/v1/collection/`            | Create collection              |
| PATCH  | `/api/v1/collection/:id`         | Add photo to collection        |
| DELETE | `/api/v1/collection/:id`         | Delete photo from collection   |
| GET    | `/api/v1/rank/getrank`           | Get top 10 rankings            |

### Getting Started - Node.js Server

Install dependencies:
```bash
npm install
```

Create a `.env` file and configure the following variables:
```env
DATABASE_URL="file:./dev.db"
JWT_ACCESS_SECRET="my-32-character-ultra-secure-and-ultra-long-secret1"
JWT_REFRESH_SECRET="my-32-character-ultra-secure-and-ultra-long-secret2"
JWT_EXPIRES_IN="30m"
```

Start the development server:
```bash
npm run dev --workspace backend
```

The server will be running on http://localhost:3000
