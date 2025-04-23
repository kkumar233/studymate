const con = require("../db/connobjpgsql");
const pool=con.connectionObj();
const dbfun1 = (req,res)=>{
    pool.query(
        "SELECT * FROM table1 WHERE id = $1",
    )
} 