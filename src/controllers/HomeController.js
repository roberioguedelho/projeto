import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Ita',
      sobrenome: 'Rodrigues',
      email: 'ita@ita.com',
      idade: 26,
      peso: 45,
      altura: 1.47,
    });

    res.json(novoAluno);
  }
}

export default new HomeController();
