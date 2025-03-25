use('BD3-AULA');


//   db['bd3-nosql-atv2'].updateOne(
//      {'cod_aluno':1},
//       {$set:{
//          "cod_turma" : 103,
//          "nome" : "João Santos",
//         "cpf" : "12598036290",
//          "rg" : "12390807",
//          "telefone_aluno" : "1109876543210",
//         "telefone_responsavel" : "11997788665",
//         "email": "joao.santos@hotmail.com",
//          "data_nascimento" : "2005-03-25 01:00:00"
//     }}
//   );

db['bd3-nosql-atv2'].find({'cod_aluno':1})