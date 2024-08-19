export default async function handler(req, res) {
  const { id } = JSON.parse(req.body);

  const url = `https://statsvlr.n0step.xyz/api/v1/teams/${id}`;

  const options = {
    method: "GET",
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    res.status(200).json({ result });
  } catch (error) {
    res.status(500).json({ error });
  }
}
