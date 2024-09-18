module.exports = class controllerNumbers {
  static async checkPar(req, res) {
    // req = requisição ; res = resposta
    const { numero } = req.body; // esse body é executado no postman, mais para frente sera no html(ex:formulario)

    if (typeof numero !== "number") {
      res.status(400).json({ message: "Dados inválidos" });
    }

    if (numero % 2 == 0) {
      return res.status(200).json({ message: "Número par!" });
    }
    return res.status(200).json({ message: "Número ímpar!" });
  }

  static async checkPrimo(req, res) {
    const {numero} = req.body;

    if (typeof numero !== "number") {
      res.status(400).json({ message: "Dados inválidos" });
    }

    if(numero <= 1){
        return res.status(200).json({message: "Não é primo"});
    }
    for(let i = 2; i < numero; i++)// ele vai dividindo o numero por valores menores que ele até chegar nele 
        if(numero % i == 0){
            return res.status(200).json({message: "Não é primo"});
        }

    return res.status(200).json({message: "Número primo"});
  }
};
