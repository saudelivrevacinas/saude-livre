const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const usuarios = [];

app.post("/cadastro", (req, res) => {

    const { nome, email, senha } = req.body;

    const usuarioExiste = usuarios.find(usuario => usuario.email === email);

    if(usuarioExiste){

        return res.status(400).json({
            mensagem: "Este email já está cadastrado."
        });

    }

    const novoUsuario = {
        nome,
        email,
        senha
    };

    usuarios.push(novoUsuario);

    res.status(201).json({
        mensagem: "Usuário cadastrado com sucesso!",
        usuario: novoUsuario
    });

});

app.listen(3000, () => {

    console.log("Servidor rodando na porta 3000");

});