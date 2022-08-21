/**
* https://codingbat.com/prob/p117334
*/

public class StringExplosion {
  public String stringSplosion(String str) {
    String newStr = "";
    for (int i = 0; i < str.length(); i++) {
      newStr += str.substring(0, i + 1);
    }
    return newStr;
  }

  public static void main(String[] args) {
    System.out.println(stringSplosion("Code").equals("CCoCodCode"));		
    System.out.println(stringSplosion("abc").equals("aababc"));		
    System.out.println(stringSplosion("ab").equals("aab"));		
    System.out.println(stringSplosion("x").equals("x"));		
    System.out.println(stringSplosion("fade").equals("ffafadfade"));		
    System.out.println(stringSplosion("There").equals("TThTheTherThere"));		
    System.out.println(stringSplosion("Kitten").equals("KKiKitKittKitteKitten"));		
    System.out.println(stringSplosion("Bye").equals("BByBye"));		
    System.out.println(stringSplosion("Good").equals("GGoGooGood"));		
    System.out.println(stringSplosion("Bad").equals("BBaBad"));	
  }
}