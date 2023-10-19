const {createPool} = require('mysql')

const pool = createPool({
    host: "localhost",
    user: "root",
    password: "",
    
})

pool.query(`SELECT * FROM baigiamasis.student`, (err, res) =>{
    return console.log(res)
})

/* Pasidariau tiesiog atsispausdinimui saraso i console (Veikia) */

