function theBeatlesPlay(m,i){
  var a = []
  for(j = 0;j < m.length; j++){
    a.push(`"${m[j]} plays ${i[j]}"`)
  }
  return a
}
