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
