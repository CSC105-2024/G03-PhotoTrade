-- CreateTable
CREATE TABLE "Trade" (
    "userId" INTEGER NOT NULL,
    "pictureId" INTEGER NOT NULL,
    "trade_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("userId", "pictureId"),
    CONSTRAINT "Trade_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Trade_pictureId_fkey" FOREIGN KEY ("pictureId") REFERENCES "Picture" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
