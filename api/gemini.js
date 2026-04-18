export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { nomination } = req.body;

  if (!nomination || nomination.trim() === '') {
    return res.status(400).json({ error: 'Nomination is required' });
  }

  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    console.error('GEMINI_API_KEY not set in environment variables');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  const prompt = `You are the archivist of the Future Museum of Extinct Things. Your only mandate: exhibits must be grounded in REAL, SCIENTIFICALLY DOCUMENTED environmental losses or threats. No fictional species, no invented places.

Visitor nomination: "${nomination}"

Instructions:
1. Identify what real environmental concern this represents. If abstract (e.g. "smell of rain"), ground it in a documented real-world phenomenon actually under threat (petrichor → connected to soil biome loss and drought expansion → Geosmin-producing soil bacteria declining in degraded soils).
2. If nothing real maps to this nomination, pick the closest related real threatened thing.
3. Write the exhibit using real species names, real statistics, real locations where you know them. Do not invent numbers.
4. Write with restraint and grief. No calls to action. No hope. Just documentation.

Respond ONLY with valid JSON, no markdown fences, no explanation text before or after:

{
  "icon": "single most fitting emoji",
  "name": "formal exhibit name of the REAL thing",
  "era": "one of exactly: 'Lost: [year/decade]' or '~[year] projection' or 'Fading: present'",
  "status": "one of exactly: critical | endangered | lost",
  "cat": "one of exactly: ocean | land | sky | sensation",
  "shortDesc": "one factual haunting sentence, under 14 words",
  "longDesc": "3-4 sentences. Real data where possible. Archival tone. No solutions.",
  "tags": ["3 short factual tags"]
}`;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { temperature: 0.7, maxOutputTokens: 600 }
        })
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Gemini API error:', errorData);
      return res.status(response.status).json({ error: errorData.error?.message || 'Gemini API error' });
    }

    const data = await response.json();
    let rawText = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
    rawText = rawText.replace(/```json|```/g, '').trim();

    const exhibit = JSON.parse(rawText);

    return res.status(200).json({ exhibit });

  } catch (error) {
    console.error('Error in gemini handler:', error);
    return res.status(500).json({ error: error.message || 'Internal server error' });
  }
}