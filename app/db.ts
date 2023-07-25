// Import the PrismaClient from the @prisma/client package
import { PrismaClient } from '@prisma/client';

// Create a global object to store the Prisma client instance
const GlobalforPrisma = global as unknown as { 
    prisma: PrismaClient | undefined;
}

// Export a variable named "db" that represents the Prisma client
export const db = GlobalforPrisma.prisma ?? new PrismaClient();

// Check if the environment is not in production
if (process.env.NODE_ENV !== 'production') {
    // If in development, set the Prisma client globally
    GlobalforPrisma.prisma = db;
}

/*
    Explanation:

    1 Importing PrismaClient: The code imports the PrismaClient from the @prisma/client package. The PrismaClient is a client that allows you to interact with your database using Prisma.

    2 Creating a Global Object: The code creates a global object named GlobalforPrisma. In Node.js, the global object provides access to global variables. This object will be used to store the instance of the Prisma client so that it can be accessed throughout the application.

    3 Casting Global Object: The line global as unknown as { prisma: PrismaClient | undefined; } is used to cast the global object to a specific type that includes a property named prisma. This step ensures that the TypeScript compiler recognizes the presence of the prisma property and its type.

    4 Exporting the Prisma Client Instance: The code exports a variable named db, which represents the Prisma client instance. This variable can be imported in other files to perform database operations.

    5 Initializing the Prisma Client: The line GlobalforPrisma.prisma ?? new PrismaClient() initializes the Prisma client and assigns it to the db variable. The nullish coalescing operator (??) checks if GlobalforPrisma.prisma is null or undefined. If it is, it creates a new instance of the PrismaClient and assigns it to db. This ensures that there's always a valid Prisma client instance available.

    6 Setting the Prisma Client Globally (Development Only): The code checks if the environment is not in production (process.env.NODE_ENV !== 'production'). If it's not in production, it means the application is in development mode. In development, the PrismaClient instance (db) is set to GlobalforPrisma.prisma. This step is likely done to reuse the same Prisma client instance across multiple requests during development, reducing the overhead of creating a new client instance for each request.

    Remember that this code sets up a global Prisma client instance (db) to be used for database interactions throughout the application. Using global variables should be done with caution, as it can lead to unintended side effects and may not be the best practice in all cases. Make sure to thoroughly test and understand the implications of using global variables in your specific use case.
*/