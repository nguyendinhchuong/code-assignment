-- CreateTable
CREATE TABLE "store_categories" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "store_categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "restaurants" (
    "id" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "rating_count" INTEGER NOT NULL,
    "category_name" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price_range" TEXT NOT NULL,
    "is_favorite" BOOLEAN NOT NULL,

    CONSTRAINT "restaurants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "images" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "restaurant_id" TEXT NOT NULL,

    CONSTRAINT "images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "featured" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "restaurant_id" TEXT NOT NULL,

    CONSTRAINT "featured_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "store_categories_name_key" ON "store_categories"("name");

-- CreateIndex
CREATE UNIQUE INDEX "featured_restaurant_id_key" ON "featured"("restaurant_id");

-- AddForeignKey
ALTER TABLE "restaurants" ADD CONSTRAINT "restaurants_category_name_fkey" FOREIGN KEY ("category_name") REFERENCES "store_categories"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "images" ADD CONSTRAINT "images_restaurant_id_fkey" FOREIGN KEY ("restaurant_id") REFERENCES "restaurants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "featured" ADD CONSTRAINT "featured_restaurant_id_fkey" FOREIGN KEY ("restaurant_id") REFERENCES "restaurants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
