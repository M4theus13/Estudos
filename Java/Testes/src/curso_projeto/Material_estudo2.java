package curso_projeto;

import java.util.Scanner;// para funcionar scanner precisa de import

public class Material_estudo2 {

	public static void main(String[] args) {
		// entrada de dados por meio do dispositivo de entrada
		Scanner sc = new Scanner(System.in); //Scanner= maneira do java para entrada de dados 
		
		char x;
		String y;
		int z;
		double v;
		
		x = sc.next().charAt(0);
		y = sc.next(); // sc.next para o conteudo q eu digitar ser adicionado na variavel
		z = sc.nextInt();
		v = sc.nextDouble();
		System.out.println("Você digitou: ");
		System.out.println(x);
		System.out.println(y);
		System.out.println(z);
		System.out.printf( "%.2f%n" ,v);
		
		sc.close(); // close para fechar o programa
		
		//char + adiciona .charAt()
		//string + sc.next
		//int + sc.nextInt
		//double + sc.nextDouble 
		

	}

}
