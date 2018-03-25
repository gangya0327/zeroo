var str1 = 'abcdeabcdeabc\n'+ 'deancdeabcdeabc\n'+'deabcdeancdeabcd\n'+'eabcdeabcdeancdeabcd\n'+'eabcdeabcdeancde'

var str2 = (function(){/*
abcdeabcdeabc
deancdeabcdeabc
deabcdeancdeabcd
eabcdeabcdeancdeabcd
eabcdeabcdeancde
*/}).toString().split('\n').slice(1,-1).join('\n')

console.log(str1)