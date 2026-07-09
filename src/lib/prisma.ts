import { PrismaClient } from '@prisma/client';


// Create a new instance of the Prisma client
const prisma = new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['warn', 'error'] : ['error'],
});




// Export the Prisma client instance
export default prisma;
