// const { response } = require('express');

// const { response } = require('express');
const http=require('http')

const express = require('express');
const fetch= require('node-fetch');
const app=express();
app.listen(8080 ,()=>console.log("server started"))
app.use(express.static(__dirname))
app.use(express.json({limit:'2mb'}))
// const fetch=Request('node-fetch')
app.get('/', (req,res)=>{
    res.sendFile( 'index.html')
});
// const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
// async ()=>{

    // let fun= async () =>{
    
    
       
        // console.log(jsno)
        // return jsno
        // }

        // let exuc= fun();
      
        app.get('/crypto', async (request,response)=>{
            let api_data= await fetch ('https://x.wazirx.com/wazirx-falcon/api/v2.0/crypto_rates');
        
            let jsno=await api_data.json();
            response.json(jsno);
        })

// http.createServer( async (req,res)=> {

// res.writeHead(200,{'content-type':'text/json'})
// let nama="fool";
//  res.end(nama)
    
// }).listen(9000)



// console.log(api_data)
// }
// let ff=api_data.json();
