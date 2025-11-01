
import { inngest } from '@/inngest/client';
import { baseProcedure, createTRPCRouter, protectedProcedure } from '../init';
import prisma from '@/lib/db';

export const appRouter = createTRPCRouter({
    testAi: baseProcedure.mutation(async()=>{
      await inngest.send({
        name:"execute/ai"})
  return {success : true, message: "Job queued"}
    }),
    getUsers: protectedProcedure.query(({ctx}) => {

      return prisma.user.findMany({
        where: {
          id: ctx.auth.user.id
        }
      });
    }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
