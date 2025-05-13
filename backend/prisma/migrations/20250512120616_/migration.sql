/*
  Warnings:

  - You are about to drop the column `is_follow` on the `Pic_Category` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Pic_Category" (
    "picture_id" INTEGER NOT NULL,
    "category_id" INTEGER NOT NULL,

    PRIMARY KEY ("picture_id", "category_id"),
    CONSTRAINT "Pic_Category_picture_id_fkey" FOREIGN KEY ("picture_id") REFERENCES "Picture" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Pic_Category_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Pic_Category" ("category_id", "picture_id") SELECT "category_id", "picture_id" FROM "Pic_Category";
DROP TABLE "Pic_Category";
ALTER TABLE "new_Pic_Category" RENAME TO "Pic_Category";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
