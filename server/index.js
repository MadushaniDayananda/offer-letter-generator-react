const express = require("express");
const app = express();
const cors =require("cors");
const pool = require("./db");
const { response } = require("express");

app.use(cors());
app.use(express.json());//req.body

// route

//create form
app.post("/letterdetails",async (req,res)=>{

    try {
        console.log(req.body);
        const {l_name}= req.body;
        const newLetterDetails = await pool.query(
            "INSERT INTO letterdetails (l_name) VALUES ($1) RETURNING *",
            [l_name]
        );
        res.json(newLetterDetails.rows[0]);
        console.log(newLetterDetails) ;
        console.log(res.json);
        
        
    } catch (error) {
        console.log(error.message);
        
    }
});

// get form a data

app.get("/letterdetails/:id", async (req,res)=>{
    try {

        const {id} = req.params;
        const 
         await pool.query("SELECT * FROM letterdetails")
        res.json(allDetails.rows);
        
    } catch (error) {
        console.log(error.message);
        
    }

})









app.listen(5000,() =>{
    console.log("app server is start on port 5000")

});
