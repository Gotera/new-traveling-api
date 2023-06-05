import app from "./src/app.js";
import 'dotenv/config'

const port = process.env.PORT || 3338;

app.listen(port, () => {
  console.log(`Servidor ouvindo em http://localhost:${port}`);
});
