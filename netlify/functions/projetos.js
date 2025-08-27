// netlify/functions/projetos.js
export async function handler() {
  try {
    const BASE_ID = process.env.AIRTABLE_BASE_ID;
    const TABLE   = process.env.AIRTABLE_TABLE || "Projetos";
    const TOKEN   = process.env.AIRTABLE_TOKEN;

    const params = new URLSearchParams({ view: "Grid view", pageSize: "100" });

    let url = `https://api.airtable.com/v0/${BASE_ID}/${encodeURIComponent(TABLE)}?${params}`;
    const items = [];

    while (url) {
      const res = await fetch(url, { headers: { Authorization: `Bearer ${TOKEN}` } });
      if (!res.ok) throw new Error(`Airtable ${res.status} - ${await res.text()}`);
      const json = await res.json();

      json.records.forEach((r) => {
        const f = r.fields || {};
        const imagem = Array.isArray(f.Imagem) ? (f.Imagem[0]?.url || null) : (f.Imagem || null);
        items.push({
          titulo:    f.Titulo || "",
          descricao: f.Descricao || "",
          imagem,
          link:      f.Link || "",
        });
      });

      url = json.offset
        ? `https://api.airtable.com/v0/${BASE_ID}/${encodeURIComponent(TABLE)}?${params}&offset=${json.offset}`
        : null;
    }

    return { statusCode: 200, headers: { "Content-Type": "application/json" }, body: JSON.stringify({ items }) };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
}
