export default async function handler(req, res) {
  const { number } = req.query;

  if (!number) {
    return res.status(400).json({
      success: false,
      message: "Number is required"
    });
  }

  try {
    const response = await fetch(
      `https://ye-lo-mojkro.noob73613.workers.dev/?api_key=@noob11001&number=${number}`
    );

    const data = await response.json();

    res.setHeader("Access-Control-Allow-Origin", "*");
    return res.status(200).json(data);

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
}
