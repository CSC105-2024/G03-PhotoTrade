# Running a command

## Run Frontend

```bash
npm run dev --workspace frontend
```

## Run Backend

```bash
npm run dev --workspace backend
```

## Run Script Both

```bash
npm run dev --workspaces
<<<<<<< HEAD
```
=======
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

## Endpoints
# Category
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
    
# Collection
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

# Photo
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

# Rank
- get
    - http://localhost:3000/api/v1/rank/getrank
    - get top 10 rank

# Trade
- post
    - http://localhost:3000/api/v1/trade/buy
    - trade photo form user 1 to user 2
- get
    - http://localhost:3000/api/v1/trade/history
    - get history of that user

# User
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
>>>>>>> develop
