/**
* Solution for Google tech guide - evenly spaced problem - https://codingbat.com/prob/p198700
*/
public class EvenlySpaced {
  public static boolean evenlySpaced(int a, int b, int c) {
    return ((a + b) == 2 * c) || ((a + c) == 2 * b) || ((b + c) == 2 * a);
  }

  public static void main(String[] args) {
    System.out.println(evenlySpaced(2, 4, 6) == true);
    System.out.println(evenlySpaced(4, 6, 2) == true);
    System.out.println(evenlySpaced(4, 6, 3) == false	);
    System.out.println(evenlySpaced(6, 2, 4) == true);
    System.out.println(evenlySpaced(6, 2, 8) == false	);
    System.out.println(evenlySpaced(2, 2, 2) == true);
    System.out.println(evenlySpaced(2, 2, 3) == false	);
    System.out.println(evenlySpaced(9, 10, 11) == true);
    System.out.println(evenlySpaced(10, 9, 11) == true);
    System.out.println(evenlySpaced(10, 9, 9) == false	);
    System.out.println(evenlySpaced(2, 4, 4) == false	);
    System.out.println(evenlySpaced(2, 2, 4) == false	);
    System.out.println(evenlySpaced(3, 6, 12) == false	);
    System.out.println(evenlySpaced(12, 3, 6) == false	);
  }
}