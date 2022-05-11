/*
  Warnings:

  - Made the column `name` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `image` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "users" ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "image" SET NOT NULL,
ALTER COLUMN "image" SET DEFAULT E'https://media.giphy.com/media/ayMW3eqvuP00o/giphy.gif';
