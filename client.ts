import { PrismaClient } from "@prisma/client";
declare module NodeJS {
    interface Global {
        spotConfig: any
    }
}
interface CustomNodeJSGlobal extends NodeJS.Global {
    prisma: PrismaClient;
}
declare const global: CustomNodeJSGlobal;
const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === "development") global.prisma = prisma;

export default prisma;

// import { PrismaClient } from '@prisma/client'

// let prisma

// if (process.env.NODE_ENV === 'production') {
//     prisma = new PrismaClient()
// } else {
//     if (!global.prisma) {
//         global.prisma = new PrismaClient()
//     }
//     prisma = global.prisma
// }

// export default prisma

