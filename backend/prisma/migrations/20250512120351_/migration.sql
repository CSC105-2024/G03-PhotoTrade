-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User_Follow" (
    "follower_id" INTEGER NOT NULL,
    "following_id" INTEGER NOT NULL,
    "is_follow" BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY ("follower_id", "following_id"),
    CONSTRAINT "User_Follow_follower_id_fkey" FOREIGN KEY ("follower_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "User_Follow_following_id_fkey" FOREIGN KEY ("following_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_User_Follow" ("follower_id", "following_id") SELECT "follower_id", "following_id" FROM "User_Follow";
DROP TABLE "User_Follow";
ALTER TABLE "new_User_Follow" RENAME TO "User_Follow";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
