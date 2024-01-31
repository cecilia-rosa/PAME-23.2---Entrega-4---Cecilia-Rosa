-- CreateTable
CREATE TABLE "_funcionarioToproduto" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_funcionarioToproduto_A_fkey" FOREIGN KEY ("A") REFERENCES "funcionario" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_funcionarioToproduto_B_fkey" FOREIGN KEY ("B") REFERENCES "produto" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_funcionarioTorelatorio" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_funcionarioTorelatorio_A_fkey" FOREIGN KEY ("A") REFERENCES "funcionario" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_funcionarioTorelatorio_B_fkey" FOREIGN KEY ("B") REFERENCES "relatorio" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_funcionarioToproduto_AB_unique" ON "_funcionarioToproduto"("A", "B");

-- CreateIndex
CREATE INDEX "_funcionarioToproduto_B_index" ON "_funcionarioToproduto"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_funcionarioTorelatorio_AB_unique" ON "_funcionarioTorelatorio"("A", "B");

-- CreateIndex
CREATE INDEX "_funcionarioTorelatorio_B_index" ON "_funcionarioTorelatorio"("B");
