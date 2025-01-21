let getElement = document.getElementById('contohElement');
console.log(getElement.innerText) //Melihat isi
console.dir(getElement) //melihat Property element
console.dir(getElement.baseURI) //url
getElement.innerText = 'Sekolah tahfizh Bogor' //Proses update Value 


// membuat elemnt baru
let h1Element=document.createElement('h1')
document.getElementById('container').appendChild(h1Element)
//isi element baru 
h1Element.innerText= 'ini element baru'

// Value pada Input
let InputElement = document.getElementById('age')
console.dir(InputElement)

function myFunction() {
    console.log(document.getElementById('age').value)
}