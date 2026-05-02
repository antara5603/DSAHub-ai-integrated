import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/ai", async (req, res) => {
  try {
    const userPrompt = req.body.prompt;

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          {
            role: "system",
            content: "You are a DSA mentor. Explain clearly with steps and examples."
          },
          {
            role: "user",
            content: userPrompt
          }
        ]
      })
    });

    const data = await response.json();
    console.log(data);

    res.json(data);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "API error" });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});