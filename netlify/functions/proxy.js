export async function handler(event) {
  const url = event.queryStringParameters.url;

  if (!url) {
    return { statusCode: 400, body: "URL ausente." };
  }

  try {
    const resposta = await fetch(url);
    const html = await resposta.text();

    return {
      statusCode: 200,
      headers: { 
        "Content-Type": "text/html; charset=utf-8",
        "Access-Control-Allow-Origin": "*" 
      },
      body: html
    };
  } catch (err) {
    return { statusCode: 500, body: "Erro: " + err.message };
  }
}
