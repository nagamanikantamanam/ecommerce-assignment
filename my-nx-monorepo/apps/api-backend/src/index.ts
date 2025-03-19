import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;
const s:string="1";
app.get('/', (req, res) => {
    res.send('Hello from xpress AP');
});

app.listen(PORT, () => {
    console.log(`🚀 Serve running at http://localhost:${PORT}`);
});
