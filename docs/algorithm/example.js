
var longestPalindrome = function(s) {
  if (s == null) return null

  let len = s.length
  let isPalindrome = []
  
  for (let i = 0; i < len; i++) {
    isPalindrome.push([false])
    isPalindrome[i][i] = true
  }

  console.log(isPalindrome)
  for (let i = len - 2; i >= 0; i--) {
    for (let j = i + 1; j < len; j++) {
      if (isPalindrome[i + 1][j - 1] && s[i] === s[j]) {
        console.log(111)
        isPalindrome[i][j] = true
      }
    }
  }

  let longest = ''
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      if (isPalindrome[i][j] && longest.length < (j - i + 1)) {
        longest = s.substring(i, j + 1)
      }
    }
    
  }

  return longest
}

console.log(longestPalindrome('babad'))