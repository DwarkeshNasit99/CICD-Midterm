const reverse = (str) => str.split('').reverse().join('');

const capitalize = (str) => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const countVowels = (str) => {
  if (!str) return 0;
  const vowels = 'aeiouAEIOU';
  let count = 0;
  for (const char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
};

module.exports = {
  reverse,
  capitalize,
  countVowels,
};
 