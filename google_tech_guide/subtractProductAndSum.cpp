/**
* Solution for Google tech guide - subtract product and sum - https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/
*/
#include <iostream>
using namespace std;

int subtractProductAndSum(int n) {
        int sum = 0;
        int product = 1;
        while (n) 
        {
          int c = (n % 10);
          sum += c;
          product *= c;
          n /= 10;
        }
        return product - sum;
    }

int main() {
	// your code goes here
	cout << subtractProductAndSum(4421);
	return 0;
}

