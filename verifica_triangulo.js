//método arbitrário

const a = 9;
const b = 15;
const c = 12;

const x = 4;
const y = 4;
const z = 3;

const i = 8;
const j = 8;
const f = 8;

console.log(verificaTriangulo());
console.log(defineTipoTriangulo());
console.log(defineTipoTriangulo2());
console.log(defineTipoTriangulo3());

function verificaTriangulo(){
		if (a + b > c & b + c > a & c + a > b){
			console.log("É um triângulo.");
		}else{
			console.log("Não é um triângulo.");	
		}
}

function defineTipoTriangulo(){
	if (a != b & b!= c & c != a) {
		console.log("É um triângulo escaleno.");
	}	
}

function defineTipoTriangulo2(){
	if (x === y & y != z & z != x) {
		console.log("É um triângulo isósceles.");
	}
}

function defineTipoTriangulo3(){
	if (i === j & j === f & f === i) {
		console.log("É um triângulo equilátero.");
	}
}	

// fim

//método com interação com o usuário(a)

// p = primeiro núm.
// s = segundo núm.
// t = terceiro núm.

function verificaTrianguloUsuario(p,s,t){
		if (p + s > t & s + t > p & t + p > s & p != 0 & s != 0 & t != 0){
			console.log("É um triângulo.");
		}else{
			console.log("Não é um triângulo.");	
		}
}

function defineTipoTrianguloUsuario(p,s,t){

	if (p != s & s!= t & t != p) {
		console.log("É um triângulo escaleno.");
	}else if (p === s & s != t & t != p) {
		console.log("É um triângulo isósceles.");
	}else if (p === s & s === t & t === p) {
		console.log("É um triângulo equilátero.");
	}else{
		console.log("Erro.");
	}
}

//fim
