/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
  if (s == null) return null

  let longest = ''
  for (let i = 0; i < s.length; i++) {
    // odd
    let oddPalindorme = getPalindrome(s, i, i)
    if (longest.length < oddPalindorme.length) {
      longest = oddPalindorme
    }

    // even
    let evenPalindorme = getPalindrome(s, i, i+1)
    if (longest.length < evenPalindorme.length) {
      longest = evenPalindorme
    }
  }

  return longest
};

/**
 * @param {string} s 
 * @param {number} left 
 * @param {number} right 
 * @returns {string}
 */
function getPalindrome(s, left, right) {

  while (left >= 0 && right <s.length && s[left] === s[right]) {
    left--
    right++
  }
  return s.substring(left+1, right -1)
}