-- CreateTable
CREATE TABLE "Kategori" (
    "idKtg" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "jenisKtg" TEXT NOT NULL,
    "gambarKtg" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Produk" (
    "idProduk" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "namaProduk" TEXT NOT NULL,
    "jenisKain" TEXT NOT NULL,
    "hargaProduk" TEXT NOT NULL,
    "hargaSale" TEXT NOT NULL,
    "deskripsiProduk" TEXT NOT NULL,
    "statusProduk" TEXT NOT NULL,
    "gambar1Produk" TEXT NOT NULL,
    "keteranganGambar1" TEXT NOT NULL,
    "gambar2Produk" TEXT NOT NULL,
    "keteranganGambar2" TEXT NOT NULL,
    "kategoriProduk" TEXT NOT NULL,
    "tepiProduk" TEXT NOT NULL,
    "ukuranProduk" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Bundling" (
    "idBundling" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "namaBundling" TEXT NOT NULL,
    "gambar1Bundling" TEXT NOT NULL,
    "keteranganGambar1" TEXT NOT NULL,
    "gambar2Bundling" TEXT NOT NULL,
    "keteranganGambar2" TEXT NOT NULL,
    "hargaBundling" TEXT NOT NULL,
    "DeskripsiBundling" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Slider" (
    "idSlider" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "gambarSlider" TEXT NOT NULL,
    "keteranganSlider" TEXT NOT NULL,
    "periodeSlider" TEXT NOT NULL,
    "statusSlider" TEXT NOT NULL,
    "kategoriSlider" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Kategori_jenisKtg_key" ON "Kategori"("jenisKtg");

-- CreateIndex
CREATE UNIQUE INDEX "Produk_namaProduk_key" ON "Produk"("namaProduk");

-- CreateIndex
CREATE UNIQUE INDEX "Bundling_namaBundling_key" ON "Bundling"("namaBundling");
