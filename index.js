function theBeatlesPlay(m,i){
  var a = []
  for(var j = 0;j < m.length; j++){
    a.push(`${m[j]} plays ${i[j]}`)
  }
  console.log(a)
  return a
}
function johnLennonFacts(f){
  var i = f.length
  while(i--){
    f[i] = f[i]+ "!!!"
  }
 return f
}