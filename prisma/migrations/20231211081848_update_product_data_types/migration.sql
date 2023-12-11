/*
  Warnings:

  - You are about to alter the column `prod_price` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "prod_name" TEXT NOT NULL,
    "prod_price" REAL NOT NULL,
    "pod_quantity" INTEGER NOT NULL
);
INSERT INTO "new_Product" ("id", "pod_quantity", "prod_name", "prod_price") SELECT "id", "pod_quantity", "prod_name", "prod_price" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
