function trim(str) {
  console.log(str.replace(/^\s+|\s+$/g, ''))
}
trim('  fadfs dfaee daf afsd f  ')

function isEmail(str) {
  var reg = /\w+@.+/g
  console.log(reg.test(str))
}
isEmail('fdadf@2464.com')

function isPhoneNum(str) {
  var reg = /^1\d{10}$/g
  console.log(reg.test(str))
}
isPhoneNum('13012345678')

function isValidUsername(str) {
  var reg = /^\w{6,20}$/g
  console.log(reg.test(str))
}
isValidUsername('3251af_afee')

function isValidPassword(str) {
  if (!/^\w{6,20}$/.test(str)){
    console.log('fal1se')
  }else if(/^[a-z]{6,20}$/.test(str)){
     console.log('fals2e')
  }
  else if (/^[A-Z]{6,20}$/.test(str)) console.log('fals3e')
  else if (/^_{6,20}$/.test(str)) console.log('fals4e')
  else if (/^\d{6,20}$/.test(str)) console.log('false5')
  else console.log('true6')
}
isValidPassword('35235252')

function isValidPassword2(str) {
  if (!/^\w{6,20}$/.test(str)) return false
  if(/^[a-z]{6,20}$/.test(str)) return false
  if (/^[A-Z]{6,20}$/.test(str)) return false
  if (/^_{6,20}$/.test(str)) return false
  if (/^\d{6,20}$/.test(str)) return false
    return true
}
console.log (isValidPassword2('fasd22faf'))

var re = /#[0-9a-fA-F]{6}(?=;)|#[0-9a-zA-Z]{3}(?=;)/g
var subj = "color: #121212; background-color: #AA00ef; width: 12px; bad-colors: f#fddee "
console.log( subj.match(re) )  // ['#121212', '#AA00ef']

var str = 'hello  "hunger" , hello "world"';
var pat =  /".*"/g;
console.log( str.match(pat) )