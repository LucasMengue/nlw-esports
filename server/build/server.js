import express from "express";
const app = express();
app.get("/ads", (request, response) => {
    return response.json([
        { id: 1, name: "Anúncion 1" },
        { id: 2, name: "Anúncion 2" },
        { id: 3, name: "Anúncion 3" },
    ]);
});
app.listen(3333);
