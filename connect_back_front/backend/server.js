import express from 'express'
const app=express();

app.use(express.static('dist'))

// app.get('/',(req,res)=>{
//     res.send('Hello World!')
// })


app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
            id:1,
            title:'jpke1',
            content:'joke1',
            
        },
        {
            id:2,
            title:'jpke2',
            content:'joke1',
            
        },
        {
            id:3,
            title:'jpke3',
            content:'joke1',
            
        }
    ];
    res.send(jokes);

})

const port=process.env.PORT||3000;

app.listen(port,()=>{
    console.log(`server is running at ${port}`)
})