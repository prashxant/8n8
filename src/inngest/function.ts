import { inngest } from "./client";
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { generateText } from 'ai';
import * as Sentry from "@sentry/nextjs";



const google  = createGoogleGenerativeAI()

export const execute = inngest.createFunction(
  { id: "execute/ai" },
  { event: "execute/ai" },
  async ({event,step})=>{
    await step.sleep("pretend","5s")

    Sentry.logger.info('User triggered test log', { log_source: 'sentry_test' })

  const {steps} = await step.ai.wrap(
    "gemini-generate-text",
      generateText,{
        model: google("gemini-1.5-pro"),
        system:"you are an good assistance",
        prompt:"what is 2+2",
        experimental_telemetry: {
          isEnabled: true,
          recordInputs: true,
          recordOutputs: true,
        },

    }
  )
  return steps
});
