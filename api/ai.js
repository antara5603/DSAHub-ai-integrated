const fetch = (...args) => import('node-fetch').then(({default: f}) => f(...args));

module.exports = async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  try {
    const { prompt } = req.body;

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          { role: "system", content: "You are a DSA mentor. Explain clearly with steps and examples." },
          { role: "user", content: prompt }
        ]
      })
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "API error" });
  }
};