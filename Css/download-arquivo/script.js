document.getElementById('downloadButton').addEventListener('click', () => {
  // Crie um elemento <a> temporário
  var link = document.createElement('a');

  // Defina o atributo href para o caminho do arquivo que deseja baixar
  link.href = './download.txt';

  // Defina o atributo download com o nome desejado para o arquivo
  link.download = 'download';

  // Adicione o elemento <a> ao documento
  document.body.appendChild(link);

  // Simule um clique no link para iniciar o download
  link.click();

  // Remova o elemento <a> temporário do documento
  document.body.removeChild(link);
});