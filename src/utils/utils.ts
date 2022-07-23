//constante de array con letras en mayuscula
const mayus = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
export function compare(char: string): string {
    let fins = mayus.filter(item => item === char[0]);
    if (char === '-barra-' ) return 'separa'
    if (char[0] === '"') return 'cursiva';
    if (fins.length > 0) { 
        return 'title';
    }else{
        return 'parrafo';
    }
}
export function filetype(char: string): string {
    console.log(char.slice(0, 3))
    if(char.slice(0, 4) === 'blob'){
        return 'image'
    }else {
        return 'text'
    }
}
export function initial():Array<string>{
    let wo = localStorage.getItem('work')
    if (wo) {
        return JSON.parse(wo)
    }else {
        return []
    }
}