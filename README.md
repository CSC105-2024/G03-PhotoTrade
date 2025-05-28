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

<<<<<<< HEAD
## Run Script Both

```bash
npm run dev --workspaces
```

# Command run Backend

## Update your schema
1. Run a migration to create your database tables with Prisma Migrate
At this point, you have a Prisma schema but no database yet. Run the following command in your terminal to create the SQLite database and the User and Post tables represented by your models:

    ```bash
    npx prisma migrate dev
    ```
2. Reset all data in your database and re-apply migrations "For develop only".
    ```bash
    npx prisma migrate reset
    ```
3. Reset All tables in database
    ```bash
    npx prisma db push --force-reset && npx prisma db push
    ```

## test 
```bash
npx tsx script.ts
```

## Explore the data in Prisma Studio
Prisma ORM comes with a built-in GUI to view and edit the data in your database. You can open it using the following command:

```bash
npx prisma studio
```

# Endpoints
## Category
- post
    - http://localhost:3000/api/v1/category/add
    - add photo to category
- get
    - http://localhost:3000/api/v1/category/all
    - get all category
- get
    - http://localhost:3000/api/v1/category/:id
    - get category by id
- delete
    - http://localhost:3000/api/v1/category/:id
    - delete photo form category
    
## Collection
- get
    - http://localhost:3000/api/v1/collection 
    - get all collection
- get
    - http://localhost:3000/api/v1/collection/:userid
    - get all collection form that collection
- get
    - http://localhost:3000/api/v1/collection/top3
    - get top3 collection
- post
    - http://localhost:3000/api/v1/collection/
    - create collection 
- patch
    - http://localhost:3000/api/v1/collection/:id
    - add photo to category
- delete
    - http://localhost:3000/api/v1/collection/:id
    - delete photo to category

## Photo
- post
    - http://localhost:3000/api/v1/photo/upload
    - create photo
- get
    - http://localhost:3000/api/v1/photo/all
    - get all photo
- get
    - http://localhost:3000/api/v1/photo/:id
    - get photo by id
- get
    - http://localhost:3000/api/v1/photo/user/:id
    - get all photo by userid
- get
    - http://localhost:3000/api/v1/photo/category/:id
    - get all photo by category
- get
    - http://localhost:3000/api/v1/picture/:searchword
    - get all photo by keyword form search
- get
    - http://localhost:3000/api/v1/picture/user/history/:id
    - get all photo that get trade by userid
- get
    - http://localhost:3000/api/v1/picture/user/favorite/:id
    - get all photo that be like by userid 
- put
    - http://localhost:3000/api/v1/picture/updateprice
    - update price every 100 like 
- delete
    - http://localhost:3000/api/v1/photo/:id
    - delete photo by id

## Rank
- get
    - http://localhost:3000/api/v1/rank/getrank
    - get top 10 rank

## Trade
- post
    - http://localhost:3000/api/v1/trade/buy
    - trade photo form user 1 to user 2
- get
    - http://localhost:3000/api/v1/trade/history
    - get history of that user

## User
- post
    - http://localhost:3000/api/v1/user/register
    - create account user
- post
    - http://localhost:3000/api/v1/user/login
    - make user can login
- post
    - http://localhost:3000/api/v1/user/logout
    - make user can logout 
- post
    - http://localhost:3000/api/v1/user/like
    - make user can like photo
- post
    - http://localhost:3000/api/v1/user/follow
    - make user can like follow other user
- get
    - http://localhost:3000/api/v1/user/me
    - get user info
- get
    - http://localhost:3000/api/v1/user/all
    - get all user info
- get
    - http://localhost:3000/api/v1/user/:id
    - get user by userid
- get
    - http://localhost:3000/api/v1/user/follower/:id
    - get amount follower of that userid
- get
    - http://localhost:3000/api/v1/user/following/:id
    - get amount following of that userid
- patch
    - http://localhost:3000/api/v1/user/updateprofile/:id
    - update profile of that userid
- delete
    - http://localhost:3000/api/v1/user/unfollow
    - make user can unfollower other user
- delete
    - http://localhost:3000/api/v1/user/unlike
    - make user can unlike other user
=======
The server will be running on http://localhost:3000
>>>>>>> develop
