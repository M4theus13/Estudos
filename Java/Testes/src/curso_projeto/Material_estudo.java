package curso_projeto;

import java.util.Locale; //importar a classe de locale para usar linha 15

public class Material_estudo {

	public static void main(String[] args) {
		int y = 32;
		double x = 10.35784;
		
		System.out.println(y);
		System.out.println(x); 
		
		System.out.printf("%.2f%n", x); //printf= F abreviação de formatado, para mostrar menos casas decimais (2 casas decimais)
		Locale.setDefault(Locale.US); //definir para considerar ABNT do EUA(usado para numeros decimais com "," ou ".")
		System.out.printf("%.4f%n", x); // %.4f= 4 casas decimais; %.2f= casas decimais; %n= quebra de linha;
		
		System.out.println("RESULTADO=" + x + "METROS"); //juntar varios elementos em comando de escrita (print ou println)
		System.out.printf("RESULTADO= %.2f metros%n", x); //juntar elementos em comando printf (valor de x entra no lugar do %.2f)
		
		System.out.print("Olá mundo!"); //print= escreve sem quebra de linha
		System.out.println("Bom Dia!"); //println= coloca quebra de linha ao final
		System.out.println("Tudo Bem?"); 
		
		//frase %s= marcador de texto; %d= marcador de numero inteiro; %f= marcador de numero com virgula(ponto flutuante);
		String nome = "Maria";
		int idade = 31;
		double renda = 4000.0;
		System.out.printf("%s tem %d anos e ganha R$ %.2f reais%n", nome, idade, renda);
		System.out.println();
		
		//casting= conversão explicita de dados(exemplo= int para double e vice versa)
		//int para double
		int a, b;
		double resultado;
		a = 5;
		b = 2;
		resultado = (double) a / b; // (double) converte o resultado de inteiro para double
		System.out.println(resultado);
		System.out.println();
		
		//double para int
		double c;
		int d;
		c = 5.9;
		d = (int) c; //int fara com que perca os dados depois da virgula, exemplo(5.0 = 5; 5.5 = 5;)
		System.out.println(d);
	}

}
