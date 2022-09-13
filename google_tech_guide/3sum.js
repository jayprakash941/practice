// without map 

let threeSum = (nums) => {
  nums.sort((a,b) => a -b);
    let res = [];
    for(let i = 0; i<nums.length-2; i++){
      if(i == 0 || (i> 0  && nums[i] !== nums[i-1])){
      let p1 = i+1;
      let p2 = nums.length-1;
      let sum = 0-nums[i];
      while(p1 < p2){
       if(nums[p1]+nums[p2] === sum){
         res.push([nums[i], nums[p1], nums[p2]]);
         while(p1 < p2 && nums[p1] === nums[p1+1]) p1++;
          while(p1 < p2 && nums[p2] === nums[p2+1]) p2--;
         p1++;
         p2--;
       }else if(nums[p1]+nums[p2] < sum) p1++;
        else p2--;
      }
       
    }
    }
  