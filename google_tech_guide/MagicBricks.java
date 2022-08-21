/**
* Solution for Google tech guide - magic bricks - https://codingbat.com/prob/p183562
*/

public class MagicBricks {
  public static boolean makeBricks(int small, int big, int goal) {
    int r = goal / 5;
    r = big < r ? big : r;
    return (r * 5 + small) >= goal;
  }

  public static void main(String[] args) {
    System.out.println(makeBricks(3, 1, 8) == true);
    System.out.println(makeBricks(3, 1, 9) == false);
    System.out.println(makeBricks(3, 2, 10) == true);
    System.out.println(makeBricks(3, 2, 8) == true);
    System.out.println(makeBricks(3, 2, 9) == false);
    System.out.println(makeBricks(6, 1, 11) == true);
    System.out.println(makeBricks(6, 0, 11) == false);
    System.out.println(makeBricks(1, 4, 11) == true);
    System.out.println(makeBricks(0, 3, 10) == true);
    System.out.println(makeBricks(1, 4, 12) == false);
    System.out.println(makeBricks(3, 1, 7) == true);
    System.out.println(makeBricks(1, 1, 7) == false);
    System.out.println(makeBricks(2, 1, 7) == true);
    System.out.println(makeBricks(7, 1, 11) == true);
    System.out.println(makeBricks(7, 1, 8) == true);
    System.out.println(makeBricks(7, 1, 13) == false);
    System.out.println(makeBricks(43, 1, 46) == true);
    System.out.println(makeBricks(40, 1, 46) == false);
    System.out.println(makeBricks(40, 2, 47) == true);
    System.out.println(makeBricks(40, 2, 50) == true);
    System.out.println(makeBricks(40, 2, 52) == false);
    System.out.println(makeBricks(22, 2, 33) == false);
    System.out.println(makeBricks(0, 2, 10) == true);
    System.out.println(makeBricks(1000000, 1000, 1000100) == true);
    System.out.println(makeBricks(2, 1000000, 100003) == false);
    System.out.println(makeBricks(20, 0, 19) == true);
    System.out.println(makeBricks(20, 0, 21) == false);
    System.out.println(makeBricks(20, 4, 51) == false);
    System.out.println(makeBricks(20, 4, 39) == true);
  }
}