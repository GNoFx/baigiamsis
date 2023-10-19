
const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(express.json());

app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "baigiamasis"
    
})
const db2 = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "signup"
})


/*    app.post("/home", (req, res) => {
    const sqlInsert = "INSERT INTO student (`name`, `email`) VALUES ('Lukas', 'lukas@gmail.com');"
    db.query(sqlInsert, (err, result) => {
        res.send("sveiki");
    })
})
*/

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO login (`name`, `email`, `password`) VALUES (?)"
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ]
    db2.query(sql, [values], (err, data) => {
        if(err) {
            return res.json("Error");
        }
        return res.json(data);
    })
})




app.get("/", (req, res) => {
    const sql = "SELECT * FROM student";
    db.query(sql, (err, data) => {
        if (err) return console.log(res);
        return res.json(data);
    });
});

app.post('/create', (req, res) => {
    const sql = "INSERT * INTO student`(`name`, `email`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email
    ]
    db.query(sql, [values], (err, data) => {
        if (err) console.log(res);
        return res.json(data);
    })
})

app.put('/update/:id', (req, res) => {
    const sql = "UPDATE student set `name` = ?, `email` = ? where id = ?";
    const values = [
        req.body.name,
        req.body.email
    ]
    const id = req.params.id;

    db.query(sql, [...values, id], (err, data) => {
        if (err) console.log(res);
        return res.json(data);
    })
})

app.delete('/student/:id', (req, res) => {
    const sql = "DELETE FROM student WHERE id = ?";
    const id = req.params.id;

    db.query(sql, [...values, id], (err, data) => {
        if (err) return console.log(res);
        return res.json(data);
    })
})

app.listen(8082, () => {
    console.log("Listening...");
})