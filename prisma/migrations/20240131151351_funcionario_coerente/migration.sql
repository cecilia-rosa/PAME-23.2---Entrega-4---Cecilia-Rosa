/*
  Warnings:

  - You are about to drop the column `data_contrato` on the `funcionario` table. All the data in the column will be lost.
  - Added the required column `data_cadastro` to the `funcionario` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_funcionario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "telefone" INTEGER NOT NULL,
    "vendas" INTEGER NOT NULL,
    "data_cadastro" DATETIME NOT NULL,
    "senha" TEXT NOT NULL
);
INSERT INTO "new_funcionario" ("cpf", "email", "id", "nome", "senha", "telefone", "vendas") SELECT "cpf", "email", "id", "nome", "senha", "telefone", "vendas" FROM "funcionario";
DROP TABLE "funcionario";
ALTER TABLE "new_funcionario" RENAME TO "funcionario";
CREATE UNIQUE INDEX "funcionario_id_key" ON "funcionario"("id");
CREATE UNIQUE INDEX "funcionario_email_key" ON "funcionario"("email");
CREATE UNIQUE INDEX "funcionario_cpf_key" ON "funcionario"("cpf");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
