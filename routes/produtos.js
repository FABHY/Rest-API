const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;



router.get('/',(req, res, next) => { 
    mysql.getConnection((error, conn) => {
        if (error) {return res.status(500).send({error})} 
        conn.query(
            'SELECT *from produtos;',
            (error,resultado,fields) => {
                if (error) {return res.status(500).send({error})}
                const response = {
                    quantidade: resultado.lenght,
                    produtos: resultado.map(prod => {
                        return{
                            id_produto: prod.id_produto,
                            nome: prod.nome,
                            preco: prod.preco,
                            request: {
                                tipo: 'GET',
                                descricao: '',
                                url:'http://localhost:3000/produtos/' + prod.id_produto
                            }
                        }
                    })
                }

                return res.status(200).send( resultado);
            }
        )
    })

});

router.post('/', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) {return res.status(500).send({error})}
        conn.query(
            'INSERT INTO produtos (nome, preco) VALUES  (?,?)'
            [req.body.nome, req.body.preco],
            (error, resultado, field) => {
                conn.release();
                if (error) {return res.status(500).send({error:error})}

                
                res.status(201).send({
                    mensagem: res.status(201).send({
                        mensagem: 'Produto inserido com sucesso  ',
                        id_produto: resultado.insertID
                    })
                })
            }
        )
    });

    res.status(201).send({
        mensagem: 'Insere um produto ',
        produtoCriado: produto
    })
});

router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto 

    if ( id === 'especial'){
        res.status(200).send({
            mensagem : 'Voce descobriu um produto especial ',
            id: id
        });

    }else {
        res.status(200).send({
            mensagem: 'Voce passou um ID '
        });
        
    }

    

});

router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'produto alterado  '
    });
});


router.delete('/', (req, res, next ) => {
    res.status(201).send({
        mensagem: 'produto excluido '
    })
});



module.exports = router;