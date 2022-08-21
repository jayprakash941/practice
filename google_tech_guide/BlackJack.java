/**
* Solution for Google tech guide - black jack - https://codingbat.com/prob/p117019
*/
public class BlackJack {
  public static int blackjack(int a, int b) {
    public int blackjack(int a, int b) {
      if (a > 21) {
        a = 0;
      }
      if (b > 21) {
        b = 0;
      }
      return a > b ? a : b;
    }
  }

  public static void main(String[] args) {
    System.out.println(blackjack(19, 21) == 21);
    System.out.println(blackjack(21, 19) == 21);
    System.out.println(blackjack(19, 22) == 19);
    System.out.println(blackjack(22, 19) == 19);
    System.out.println(blackjack(22, 50) == 0);
    System.out.println(blackjack(22, 22) == 0);
    System.out.println(blackjack(33, 1) == 1);
    System.out.println(blackjack(1, 2) == 2);
    System.out.println(blackjack(34, 33) == 0);
    System.out.println(blackjack(17, 19) == 19);
    System.out.println(blackjack(18, 17) == 18);
    System.out.println(blackjack(16, 23) == 16);
    System.out.println(blackjack(3, 4) == 4);
    System.out.println(blackjack(3, 2) == 3);
    System.out.println(blackjack(21, 20) == 21);
  }
}