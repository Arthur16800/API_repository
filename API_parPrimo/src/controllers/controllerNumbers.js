module.exports = class controllerNumbers {
  static async checkPar(req, res) {
    const { num } = req.body;

    // Verifica se num é um número
    if (typeof num !== "number") {
      res.status(400).json({ message: "Dados inválidos" });
    }

    // Verifica se o número é par ou ímpar e envia a resposta
    if (num % 2 === 0) {
      res.status(200).json({ resultado: "par" });
    } else {
      res.status(200).json({ resultado: "impar" });
    }
  }

  //Verificando se é primo 
  static async checkPrimo(req, res) {
    const { num } = req.body;
    if (num == 1) {
      return res.status(200).json({ resultado: "Não é um numero primo" });
    }
    if (typeof num !== "number") {
      return res.status(400).json({ message: "Dados inválidos" });
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return res.status(200).json({ resultado: "Não é um numero primo" });
      }
    }
    return res.status(200).json({ resultado: "É um número primo" });
  }
};
