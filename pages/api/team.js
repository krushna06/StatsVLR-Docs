export default async function handler(req, res) {
  const { id } = JSON.parse(req.body);

  const url = `http://localhost:3000/api/v1/teams/${id}`;

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
