/*
  Warnings:

  - You are about to drop the column `pod_quantity` on the `Product` table. All the data in the column will be lost.
  - Added the required column `prod_quantity` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "prod_name" TEXT NOT NULL,
    "prod_price" REAL NOT NULL,
    "prod_quantity" INTEGER NOT NULL
);
INSERT INTO "new_Product" ("id", "prod_name", "prod_price") SELECT "id", "prod_name", "prod_price" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
