export const runtime = "edge";

export async function POST(req) {
  const { message } = await req.json();

  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "meta-llama/llama-3-8b-instruct:nitro",
      messages: [
        { role: "user", content: message },
        { role: 'system', content: 'You are a helpful assistant.' }
    ],
    }),
  });

  const data = await res.json();
  const reply = data.choices?.[0]?.message?.content || "No reply.";

  return new Response(JSON.stringify({ reply }), {
    headers: { "Content-Type": "application/json" },
  });
}
