try:
	a = int(input('número1: '))
	b = int(input('número2: '))
	r = a / b
except (ValueError, TypeError):
	print(f'Tivemos problemas com os dados digitados')
except ZeroDivisionError:
	print('Não é possivel dividir por zero')
except KeyboardInterrupt:
	print('O usuario preferiu não informar um numero')
else:
	print(f'o resultado é {r:1.f}')
finally:
	print('Volte sempre! muito obrigado!')