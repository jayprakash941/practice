// Online C++ compiler to run C++ program online
#include <iostream>
#include <bits/stdc++.h>
#include <vector>

std::vector<int> sortArrayByParity1(std::vector<int>& nums) {
    int left = 0;
    int right = nums.size() - 1;
    while (left  < right) {
        if ((nums[right] & 1)) {
            right--;
        }
        else if (!(nums[left] & 1)) {
            left++;
        }
        else {
            nums[left] = nums[left] + nums[right];
            nums[right] = nums[left] - nums[right];
            nums[left] = nums[left] - nums[right];
            right--;
            left++;
        }
    }
    return nums;
}

std::vector<int> sortArrayByParity2(std::vector<int>& nums) {
    for(int i = 0, j = 0; i < nums.size(); i++){
        if (!(nums[i] & 1)) {
            std::swap(nums[i], nums[j++]);
        }
    }
    return nums;
}

int main() {
    // Write C++ code here
    std::vector<int> nums{12, 10, 9, 8, 7, 6, 4, 3, 2, 1, 0, 5};
    sortArrayByParity1(nums);
    for (int i = 0; i < nums.size(); i++)  
    {  
        std::cout << nums[i] << " \n";   
    }  
    return 0;
}