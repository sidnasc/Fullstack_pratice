import express from "express";
import "dotenv/config.js";
import mongoose from "mongoose";

export async function connectToDatabase(){
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("connect to the database.");
    } catch (error) {
        console.error("Error connecting to the database", error);
        process.exit(1);
    }
}

const app = express();

app.use(express.json()); // <--- 2. IMPORTANTE: Permite ler JSON no body da requisição

// Rota POST para cadastrar livros
app.post("/books", async (req, res) => {
    try {
        // Pega os dados enviados no corpo da requisição
        const newBook = {
            title: req.body.title,
            subtitle: req.body.subtitle,
            author: req.body.author,
            genre: req.body.genre,
            cover: req.body.cover
        };

        // Cria o registro no banco de dados
        const book = await Book.create(newBook);

        // Retorna sucesso (201 = Created) e o livro criado
        return res.status(201).send(book);

    } catch (error) {
        console.log(error.message);
        // Se der erro (ex: faltou campo obrigatório), retorna 500
        res.status(500).send({ message: error.message });
    }
});

// A correção é aqui: use () => {
app.listen(3000, () => {
    console.log("Server is running on port 3000. CTRL+C to stop . . .")
});