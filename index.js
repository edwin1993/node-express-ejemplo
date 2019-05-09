/* function sumar(a,b){
return a+b
}

function divide(a,b){
    return a/b
}
function resta(a,b){
    return a-b
}

function multi(a,b){
    return a*b
}
console.log(sumar(5, 5));
console.log(resta(5, 5));
console.log(multi(5, 5));
console.log(divide(5, 5));
 */
//esto que sigue es para el servidor con express
 const express = require('express'); //requiero el modulo express
 //este modulo me devuelve un objeto que voy a almacenar en la constante app
  const app = express();// y aqui empiezo a utilizar el modulo express
  //el app es mi servidor (puede tener cualquier nombre)
//aqui le digo servidor escuchame en el pireto 300 y cuando inicies muestrame un 
//mensaje por consola que diga 


  app.listen(3000, () =>{
      console.log('server on port 3000')

  })

app.use(express.json());//esta funcion le permite al navegador traer datos json 

//CONFIGURANDO LAS RUTAS DE MI SERVIDOR/////  
//cuando mi servidor reciba una peticion get respondame con un hello word

/*
app.get('/',(req, res)=>{
    res.send('GET recibida')//aqui envio solo un texto
})//pagina de inicio
*/

app.get('/',(req, res)=>{
    res.json({//aqui envio un objeto json
        user: 1,
        Name:"edwin"
    })
})//el usuario hace una peticion y el server le responde con un json


app.post('/user/:id',(req, res)=>{//desde postmasn envio un post con un json y los datos se muestra en el servidor. 
    console.log(req.body);    //muestra el cuerpo del mensaje 
    console.log(req.params);  //Muestra los datos mas espcificos
    res.send('Peticion post Enviada...')
});//Ruta enviando datos desde postman

app.delete('/user/:id',(req, res)=>{
    res.send(`id ${req.params.id} delete`); //comillas inveridas``
    //console.log(req.body);
    //console.log(req.params);
})

app.post('/post',(req, res)=>{
    res.send('POST recibida')
})//otra Ruta


app.put('/put',(req, res)=>{
    res.send('PUT recibido')
})//otra Ruta

app.delete('/delete',(req, res)=>{
    res.send('DELETE RECIBIDO')
})//otra Ruta