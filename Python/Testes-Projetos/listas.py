nomes = list()
while True:
    add = input('Digite um nome: ')
    if add == 'PARAR':
        break
    nomes.append(add)
nomes.sort()

print(f'Lista dos nomes: {nomes}')

print('\nOrdem CRESCENTE: ', end=' ')
nomes.sort()
print(nomes)

print('\nOrdem DECRESCENTE: ', end=' ')
nomes.sort(reverse=True)
print(nomes)