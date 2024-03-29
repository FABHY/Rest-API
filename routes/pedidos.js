const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) => { 
    res.status(200).send({
        mensagem : 'Retorna os pedidos ' 
    });

});

router.post('/', (req, res, next) => {
    const pedido = {
        id_produto: req.body.id_produto,
        quantidade: req.body.quantidade

    }
    res.status(201).send({
        mensagem: 'O pedido foi criado ',
        pedidoCriado: pedido
    })
});

router.get('/:id_pedido', (req, res, next) => {
    const id = req.params.id_pedido

    
        res.status(200).send({
            mensagem : 'Detalhes do pedido ',
            id_pedido: id
        });

    
        res.status(200).send({
            mensagem: 'pedido excluido'
        });
        
    }

    

);


router.delete('/', (req, res, next ) => {
    res.status(201).send({
        mensagem: 'produto excluido '
    })
});



module.exports = router;