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
# Collection
- get
    - http://localhost:3000/api/v1/collection 
- get
    - http://localhost:3000/api/v1/collection/:userid
- get
    - http://localhost:3000/api/v1/collection/top3
- post
    - http://localhost:3000/api/v1/collection/
- patch
    - http://localhost:3000/api/v1/collection/:id
- delete
    - http://localhost:3000/api/v1/collection/:id
# photo
-
    -
- put
    - http://localhost:3000/api/v1/picture/updateprice
- get
    - http://localhost:3000/api/v1/picture/:searchword
- 

