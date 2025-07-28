const axios = require("axios");

exports.generatePost = async (req, res) => {
  const { prompt } = req.body;

  console.log("📩 Received prompt:", prompt);
 

  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions", // ✅ Make sure it's openrouter.ai
      {
        model: "openai/gpt-3.5-turbo", // ✅ Replace with your preferred model
        messages: [{ role: "user", content: prompt }],
      },
      {
        headers: {
          "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`, // ✅ This must be EXACT
          "Content-Type": "application/json",
          "HTTP-Referer": "http://localhost:3000", // Optional: for OpenRouter's policy
          "X-Title": "MyProject", // Optional: for usage display on OpenRouter
        },
      }
    );

    const aiResponse = response.data?.choices?.[0]?.message?.content;
    res.status(200).json({ post: aiResponse });
  } catch (error) {
    console.error("❌ Error while generating post:", error.response?.data || error.message);
    res.status(500).json({ error: error.response?.data || "Internal server error" });
  }
};
