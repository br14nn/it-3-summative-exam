-- CreateTable
CREATE TABLE "Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "prod_name" TEXT NOT NULL,
    "prod_currency" TEXT NOT NULL DEFAULT '$',
    "prod_price" REAL NOT NULL,
    "prod_quantity" INTEGER NOT NULL
);
