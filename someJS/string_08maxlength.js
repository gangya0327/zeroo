function truncate(str, maxlength){
  if(str.length > maxlength){
    str = str.substr(0, maxlength).concat('...')
  }
  console.log(str)
}
truncate("hello, this is hunger valley,", 10)
truncate("hello world", 20)