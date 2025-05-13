-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "bio" TEXT,
    "profile_url" TEXT,
    "create_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME
);

-- CreateTable
CREATE TABLE "Picture" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "thumbnail_url" TEXT,
    "price" INTEGER NOT NULL,
    "create_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" INTEGER NOT NULL,
    CONSTRAINT "Picture_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Trade" (
    "user_id" INTEGER NOT NULL,
    "picture_id" INTEGER NOT NULL,
    "trade_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("user_id", "picture_id"),
    CONSTRAINT "Trade_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Trade_picture_id_fkey" FOREIGN KEY ("picture_id") REFERENCES "Picture" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Category" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "category_url" TEXT
);

-- CreateTable
CREATE TABLE "Pic_Category" (
    "picture_id" INTEGER NOT NULL,
    "category_id" INTEGER NOT NULL,
    "is_follow" BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY ("picture_id", "category_id"),
    CONSTRAINT "Pic_Category_picture_id_fkey" FOREIGN KEY ("picture_id") REFERENCES "Picture" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Pic_Category_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "User_Like" (
    "user_id" INTEGER NOT NULL,
    "picture_id" INTEGER NOT NULL,

    PRIMARY KEY ("user_id", "picture_id"),
    CONSTRAINT "User_Like_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "User_Like_picture_id_fkey" FOREIGN KEY ("picture_id") REFERENCES "Picture" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "User_Follow" (
    "follower_id" INTEGER NOT NULL,
    "following_id" INTEGER NOT NULL,

    PRIMARY KEY ("follower_id", "following_id"),
    CONSTRAINT "User_Follow_follower_id_fkey" FOREIGN KEY ("follower_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "User_Follow_following_id_fkey" FOREIGN KEY ("following_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Collection" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "create_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Collection_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Collection_Picture" (
    "collection_id" INTEGER NOT NULL,
    "picture_id" INTEGER NOT NULL,

    PRIMARY KEY ("collection_id", "picture_id"),
    CONSTRAINT "Collection_Picture_collection_id_fkey" FOREIGN KEY ("collection_id") REFERENCES "Collection" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Collection_Picture_picture_id_fkey" FOREIGN KEY ("picture_id") REFERENCES "Picture" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
