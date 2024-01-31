/*
  Warnings:

  - Added the required column `status` to the `mesa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `pedido` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_mesa" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "pessoas" INTEGER NOT NULL,
    "funcionarioId" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    CONSTRAINT "mesa_funcionarioId_fkey" FOREIGN KEY ("funcionarioId") REFERENCES "funcionario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_mesa" ("funcionarioId", "id", "pessoas") SELECT "funcionarioId", "id", "pessoas" FROM "mesa";
DROP TABLE "mesa";
ALTER TABLE "new_mesa" RENAME TO "mesa";
CREATE UNIQUE INDEX "mesa_id_key" ON "mesa"("id");
CREATE TABLE "new_pedido" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome_cliente" TEXT NOT NULL,
    "mesaId" INTEGER NOT NULL,
    "data" DATETIME NOT NULL,
    "valor_total" INTEGER NOT NULL,
    "funcionarioId" INTEGER NOT NULL,
    "relatorioId" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    CONSTRAINT "pedido_funcionarioId_fkey" FOREIGN KEY ("funcionarioId") REFERENCES "funcionario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "pedido_mesaId_fkey" FOREIGN KEY ("mesaId") REFERENCES "mesa" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "pedido_relatorioId_fkey" FOREIGN KEY ("relatorioId") REFERENCES "relatorio" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_pedido" ("data", "funcionarioId", "id", "mesaId", "nome_cliente", "relatorioId", "valor_total") SELECT "data", "funcionarioId", "id", "mesaId", "nome_cliente", "relatorioId", "valor_total" FROM "pedido";
DROP TABLE "pedido";
ALTER TABLE "new_pedido" RENAME TO "pedido";
CREATE UNIQUE INDEX "pedido_id_key" ON "pedido"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
