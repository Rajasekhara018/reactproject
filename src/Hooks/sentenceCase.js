import React from 'react'

function sentenceCase(str) {
    var firstChar = str.charAt(0);
    var restChars = str.substring(1);
    var sentence = firstChar.toUpperCase() + restChars.toLowerCase();
  return (sentence)
}

export default sentenceCase
