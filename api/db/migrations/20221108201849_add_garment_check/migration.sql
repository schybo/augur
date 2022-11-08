-- CreateTable
CREATE TABLE "garmentCheck" (
    "id" SERIAL NOT NULL,
    "message" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "garmentType" TEXT NOT NULL,
    "numberOfResults" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "garmentCheck_pkey" PRIMARY KEY ("id")
);
