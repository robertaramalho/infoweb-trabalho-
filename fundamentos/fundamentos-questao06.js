let arr = [1,2,2,3,4,2,5,3,3,3];
let freq = {};
let mais = arr[0];

for (let num of arr) {
  freq[num] = (freq[num] || 0) + 1;
  if (freq[num] > freq[mais]) mais = num;
}

console.log("Número mais frequente:", mais);
