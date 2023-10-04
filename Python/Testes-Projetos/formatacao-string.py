nome = input('digite um nome: ')
print('olá {:<20}.' .format(nome)) #o nome sera colocado ao lado esquerdo e sera adicionado 20 espaços
print('olá {:>20}.' .format(nome)) #o nome sera colocado ao lado direito e sera adicionado 20 espaços
print('olá {:<20}.' .format(nome)) #o nome sera colocado ao lado esquerdo e sera adicionado 20 espaços
print('olá {:=^20}.' .format(nome)) #o nome sera colocado ao centro e sera adicionado 20 =

print('Olá, este é um exemplo de frase.', end='')
print('Este é outro exemplo de frase.')

print('Está é uma frase \ncom quebras de linhas \nno meio, usando o mesmo \nprint')
