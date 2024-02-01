-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_funcionario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "telefone" INTEGER NOT NULL,
    "vendas" INTEGER NOT NULL,
    "data_cadastro" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "senha" TEXT NOT NULL
);
INSERT INTO "new_funcionario" ("cpf", "data_cadastro", "email", "id", "nome", "senha", "telefone", "vendas") SELECT "cpf", "data_cadastro", "email", "id", "nome", "senha", "telefone", "vendas" FROM "funcionario";
DROP TABLE "funcionario";
ALTER TABLE "new_funcionario" RENAME TO "funcionario";
CREATE UNIQUE INDEX "funcionario_id_key" ON "funcionario"("id");
CREATE UNIQUE INDEX "funcionario_email_key" ON "funcionario"("email");
CREATE UNIQUE INDEX "funcionario_cpf_key" ON "funcionario"("cpf");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
