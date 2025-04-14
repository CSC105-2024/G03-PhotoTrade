/*
  Warnings:

  - You are about to drop the column `userId` on the `Picture` table. All the data in the column will be lost.
  - The primary key for the `Trade` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `pictureId` on the `Trade` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Trade` table. All the data in the column will be lost.
  - Added the required column `user_id` to the `Picture` table without a default value. This is not possible if the table is not empty.
  - Added the required column `picture_id` to the `Trade` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Trade` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Category" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Pic_Category" (
    "picture_id" INTEGER NOT NULL,
    "category_id" INTEGER NOT NULL,

    PRIMARY KEY ("picture_id", "category_id"),
    CONSTRAINT "Pic_Category_picture_id_fkey" FOREIGN KEY ("picture_id") REFERENCES "Picture" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Pic_Category_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Picture" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "thumbnail_url" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "create_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" INTEGER NOT NULL,
    CONSTRAINT "Picture_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Picture" ("create_at", "description", "id", "price", "thumbnail_url", "title") SELECT "create_at", "description", "id", "price", "thumbnail_url", "title" FROM "Picture";
DROP TABLE "Picture";
ALTER TABLE "new_Picture" RENAME TO "Picture";
CREATE TABLE "new_Trade" (
    "user_id" INTEGER NOT NULL,
    "picture_id" INTEGER NOT NULL,
    "trade_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("user_id", "picture_id"),
    CONSTRAINT "Trade_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Trade_picture_id_fkey" FOREIGN KEY ("picture_id") REFERENCES "Picture" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Trade" ("trade_at") SELECT "trade_at" FROM "Trade";
DROP TABLE "Trade";
ALTER TABLE "new_Trade" RENAME TO "Trade";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
