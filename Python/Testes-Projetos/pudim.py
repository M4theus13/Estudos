from urllib import request
try:
    site = request.urlopen('http://www.pudim.com.br')
except:
    print('deu erro')
else:
    print('tudo certo')