import app from "./app";

const port = process.env.PORT || 5000;
const host = process.env.HOST || "localhost";

app.listen(port, () => {
    console.log(`Listening to http://${host}:${port}`);
});