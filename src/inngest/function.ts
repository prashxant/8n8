import { inngest } from "./client";
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { generateText } from 'ai';

const google  = createGoogleGenerativeAI()

export const execute = inngest.createFunction(
  { id: "execute/ai" },
  { event: "execute/ai" },
  async ({event,step})=>{
    await step.sleep("pretend","5s")
    
  const {steps} = await step.ai.wrap(
    "gemini-generate-text",
      generateText,{
        model: google("gemini-1.5-pro"),
        system:"you are an good assistance",
        prompt:"what is 2+2"

    }
  )
  return steps
});
