import { prisma } from "../index.ts";

export const getcollection = async () => {
  return prisma.collection.findMany();
};
