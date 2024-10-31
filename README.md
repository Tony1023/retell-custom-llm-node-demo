# retell-custom-llm-node-demo

See the original repo that this one forked from. This one only contains a toy "LLM" agent (essentially an echo service).

## Steps to run locally to test

1. Add Retell and your LLM API key (Azure OpenAI / OpenAI / OpenRouter) to ".env.development".

   - Azure OpenAI is pretty fast and stable: [guide for setup](https://docs.retellai.com/guide/azure-open-ai)
   - OpenAI is the most widely used one, although the latency can vary.
   - OpenRouter allows you to choose between tons of Open Source AI Models.

2. Install dependencies

```bash
npm install
```

3. In another bash, use ngrok to expose this port to the public network

```bash
ngrok http 8080
```

4. Start the server

```bash
npm run dev
```

You should see a fowarding address like
`https://dc14-2601-645-c57f-8670-9986-5662-2c9a-adbd.ngrok-free.app`, and you
are going to take the hostname `dc14-2601-645-c57f-8670-9986-5662-2c9a-adbd.ngrok-free.app`, prepend it with `wss://`, postpend with
`/llm-websocket` (the route setup to handle LLM websocket connection in the code) to create the url to use in the [dashboard](https://beta.retellai.com/dashboard) to create a new agent. Now
the agent you created should connect with your localhost.

The custom LLM URL would look like
`wss://dc14-2601-645-c57f-8670-9986-5662-2c9a-adbd.ngrok-free.app/llm-websocket`

## Using Echo LLM agent

You only need to setup as instructed above and set the `RETELL_API_KEY` and `AGENT_ID` (from your custom LLM agent from the Retell AI website). 
