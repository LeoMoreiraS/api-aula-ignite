Api para controle de aluguel de carros

# Cadastro de Carros

**RF** 

Deve ser possível cadastrar um novo carro.


**RN** 

Não deve ser possível cadastrar um novo carro com uma placa já existente.

Não deve ser possível alterar a placa de um carro já cadastrado.

O carro deve ser cadastrado, por padrão como disponível.

O cadastro só pode ser feito por um usuário administrador.


# Listagem de carros

**RF** 

Deve ser possível listar todos os carros disponíveis.

Deve ser possivel listar todos os carros disponíveis pelo nome da categoria.

Deve ser possivel listar todos os carros disponíveis pelo nome da marca.

Deve ser possivel listar todos os carros disponíveis pelo nome do carro.


**RN**

O usuário não precisa estar logado no sistema.

# Cadastro de especificação no carro

**RF**

Deve ser possível cadastrar uma especificação para um carro.

Deve ser possível listar todas as especificações.

Deve ser possível listar todos os carros.


**RN**

Não deve ser possível cadastrar uma especificação para um carro já cadastrado.

Não deve ser possível cadastrar uma especificação duplicada para um carro.


# Cadastro de imagens do carro
**RF**

Deve ser possível cadastrar a imagem do carro.

Deve ser possível listar todos os carros.


**RNF**

Utilizar o multer para upload dos arquivos.



**RN** 

O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.

Apenas o administrador pode realizar o cadastro de imagens.


# Aluguel de carro

**RF**

Deve ser possível cadastrar um aluguel.


**RNF**

**RN**

O aluguel deve ter duração mínima de 24 horas.

Não deve ser possível cadastrar um novo aluguel para o mesmo usuário.

Não deve ser possível cadastrar um novo aluguel para o mesmo carro.
