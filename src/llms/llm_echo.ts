import OpenAI from "openai";
import { WebSocket } from "ws";
import {
  CustomLlmRequest,
  CustomLlmResponse,
  ReminderRequiredRequest,
  ResponseRequiredRequest,
  Utterance,
} from "../types";

// Define the greeting message of the agent. If you don't want the agent speak first, set to empty string ""
const beginSentence =
  "Hey there, I'm your personal AI therapist.";

export class EchoLlmClient {
  // First sentence requested
  BeginMessage(ws: WebSocket, prompt: string) {
    const res: CustomLlmResponse = {
      response_type: "response",
      response_id: 0,
      content: `${beginSentence} I got your prompt as: ${prompt}`,
      content_complete: true,
      end_call: false,
    };
    ws.send(JSON.stringify(res));
  }

  async DraftResponse(
    request: ResponseRequiredRequest | ReminderRequiredRequest,
    ws: WebSocket,
  ) {
    const res: CustomLlmResponse = {
      response_type: "response",
      response_id: request.response_id,
      content: `You said: ${request.transcript.at(request.transcript.length - 1).content}`,
      content_complete: false,
      end_call: false,
    };
    ws.send(JSON.stringify(res));
  }
}
