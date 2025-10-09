export async function handler(event) {
  const params = new URLSearchParams(event.rawQuery);
  const url = params.get("url");

  if (!url) {
    return { statusCode: 400, body: "URL não fornecida" };
  }

  try {
    const response = await fetch(url);
    const html = await response.text();
    return {
      statusCode: 200,
      headers: { "Content-Type": "text/html; charset=utf-8" },
      body: html,
    };
  } catch (error) {
    return { statusCode: 500, body: "Erro ao buscar URL: " + error.message };
  }
}
