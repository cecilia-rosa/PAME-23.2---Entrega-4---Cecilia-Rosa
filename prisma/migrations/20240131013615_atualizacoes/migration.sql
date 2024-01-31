/*
  Warnings:

  - Added the required column `categoriaId` to the `produto` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "_pedidoToproduto" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_pedidoToproduto_A_fkey" FOREIGN KEY ("A") REFERENCES "pedido" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_pedidoToproduto_B_fkey" FOREIGN KEY ("B") REFERENCES "produto" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_produto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "preco" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "disponibilidade" TEXT NOT NULL,
    "vendidos" INTEGER NOT NULL,
    "categoriaId" INTEGER NOT NULL,
    CONSTRAINT "produto_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "categoria" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_produto" ("disponibilidade", "id", "nome", "preco", "vendidos") SELECT "disponibilidade", "id", "nome", "preco", "vendidos" FROM "produto";
DROP TABLE "produto";
ALTER TABLE "new_produto" RENAME TO "produto";
CREATE UNIQUE INDEX "produto_id_key" ON "produto"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "_pedidoToproduto_AB_unique" ON "_pedidoToproduto"("A", "B");

-- CreateIndex
CREATE INDEX "_pedidoToproduto_B_index" ON "_pedidoToproduto"("B");
