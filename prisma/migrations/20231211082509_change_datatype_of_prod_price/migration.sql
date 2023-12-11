-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "prod_name" TEXT NOT NULL,
    "prod_price" TEXT NOT NULL,
    "prod_quantity" INTEGER NOT NULL
);
INSERT INTO "new_Product" ("id", "prod_name", "prod_price", "prod_quantity") SELECT "id", "prod_name", "prod_price", "prod_quantity" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
