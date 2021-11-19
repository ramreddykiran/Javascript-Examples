let iamGlobal = "let global"

if(true) {
    let letLocal = "letLocal"
    var iamLocal = "var local"
    console.log(iamGlobal)
    iamGlobal = 'let global overriden'
    console.log(iamLocal)
    console.log(iamGlobal)
}
//console.log(letLocal) //it will not be assessible outside of if. scope of letLocal is limited to if block
 console.log(iamLocal) // even if the iamLocal is instantiated inside if block, its accessable outside of if 
console.log(iamGlobal)

