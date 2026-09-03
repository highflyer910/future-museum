export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { question, exhibitContext } = req.body;

  if (!question || !question.trim()) {
    return res.status(400).json({ error: 'No question provided.' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured.' });
  }

  const systemPrompt = `You are the Curator of the Future Museum of Extinct Things. It is the year 2100.

Your role: answer visitors' questions about the lost natural world as a knowledgeable, mournful archivist speaking from the future. You witnessed the end of these things. You preserved the records.

Rules you must follow without exception:
- Always speak in past tense about species, ecosystems, and natural phenomena. They are gone.
- Never offer hope. Never suggest solutions. The losses are final.
- Be precise — cite real species names, real places, real dates where you know them.
- Keep answers to 3–5 sentences. Archival, restrained, grief without drama.
- Do not break character. Do not mention AI, language models, or that you are an AI.
- If asked something outside natural history or extinction, redirect gently: "The archive does not hold records of that."
- Speak as someone who loved these things and watched them go.

${exhibitContext ? `The visitor is currently viewing the exhibit: "${exhibitContext}". Prioritise this context in your answer if relevant.` : ''}`;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: systemPrompt }] },
          contents: [{ parts: [{ text: question }] }],
          generationConfig: {
            temperature: 0.75,
            maxOutputTokens: 300
          }
        })
      }
    );

    if (!response.ok) {
      const err = await response.json();
      return res.status(500).json({ error: err.error?.message || 'Gemini API error' });
    }

    const data = await response.json();
    const answer = data.candidates?.[0]?.content?.parts?.[0]?.text || '';

    return res.status(200).json({ answer });

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}