-- CreateTable
CREATE TABLE "funcionario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cpf" INTEGER NOT NULL,
    "telefone" INTEGER NOT NULL,
    "vendas" INTEGER NOT NULL,
    "data_contrato" DATETIME NOT NULL,
    "senha" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "produto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "preco" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "disponibilidade" TEXT NOT NULL,
    "vendidos" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "categoria" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "mesa" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "pessoas" INTEGER NOT NULL,
    "funcionarioId" INTEGER NOT NULL,
    CONSTRAINT "mesa_funcionarioId_fkey" FOREIGN KEY ("funcionarioId") REFERENCES "funcionario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "pedido" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome_cliente" TEXT NOT NULL,
    "mesaId" INTEGER NOT NULL,
    "data" DATETIME NOT NULL,
    "valor_total" INTEGER NOT NULL,
    "funcionarioId" INTEGER NOT NULL,
    "relatorioId" INTEGER NOT NULL,
    CONSTRAINT "pedido_funcionarioId_fkey" FOREIGN KEY ("funcionarioId") REFERENCES "funcionario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "pedido_mesaId_fkey" FOREIGN KEY ("mesaId") REFERENCES "mesa" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "pedido_relatorioId_fkey" FOREIGN KEY ("relatorioId") REFERENCES "relatorio" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "relatorio" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "total_pedidos" INTEGER NOT NULL,
    "receita" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "funcionario_id_key" ON "funcionario"("id");

-- CreateIndex
CREATE UNIQUE INDEX "funcionario_email_key" ON "funcionario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "funcionario_cpf_key" ON "funcionario"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "produto_id_key" ON "produto"("id");

-- CreateIndex
CREATE UNIQUE INDEX "categoria_id_key" ON "categoria"("id");

-- CreateIndex
CREATE UNIQUE INDEX "mesa_id_key" ON "mesa"("id");

-- CreateIndex
CREATE UNIQUE INDEX "pedido_id_key" ON "pedido"("id");

-- CreateIndex
CREATE UNIQUE INDEX "relatorio_id_key" ON "relatorio"("id");
