//importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

//criar o objeto que ira fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db") //constructor ou classe

module.exports = db //Exportar o objeto db (fora do arquivo)
//utilizar o objetode banco de dados para as nossar operações   


// db.serialize(() => {
//     //Com comando SQL eu vou:

    // //criar uma table
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS places (
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         name TEXT,
    //         image TEXT,
    //         address TEXT,
    //         address2 TETX,
    //         state TEXT,
    //         city TEXT,
    //         items TEXT
    //     );
    // `)
    //inserir dados na tabela
    // const query = `
    //     INSERT INTO places (
    //         image, 
    //         name,
    //         address,
    //         address2,
    //         state,
    //         city,
    //         items
    //     ) VALUES (?,?,?,?,?,?,?);        
    // `

    // const values = [
    //     "https://images.unsplash.com/photo-1564419434663-c49967363849?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60",
    //     "Papersider",
    //     "Guilhemrme Gemballa, Jardim América",
    //     "Número 250",
    //     "Santa Catarina",
    //     "Rio do Sul",
    //     "Resíduos Eletônicos, Lâmpadas"
    // ]

    // function afterInsertData(err) {
    //     if(err) {
    //         return console.log(err)
    //     }
    //     console.log("Cadastrado com sucesso")
    //     console.log(this)
    // }

    // db.run(query, values , afterInsertData)

//     //consultar os dados da tabela
//     db.all(`SELECT * FROM places`, function (err, rows) {
//         if (err) {
//             return console.log(err)
//         }

//         console.log("Aqui estão seu registros")
//         console.log(rows)
//     })

//     //deletar um dado da tabela
    // db.run(`DELETE FROM places WHERE id = ?`, [3], function(err){
    //     if(err){
    //         console.log(err)
    //     }

    //     console.log("Registro Deletado com sucesso")
    // })
    
  
// })