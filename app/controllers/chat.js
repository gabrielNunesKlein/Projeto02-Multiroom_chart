module.exports.iniciaChat = function(applicapplication, req, res){
    var dadosForm = req.body;
    console.log(dadosForm);

    req.assert('apelido', 'Nome ou apelido é obrigatorio').notEmpty();
    req.assert('apelido', 'Nome ou apelido deve conter entre 5 a 15 caracteres').len(5, 15);

    var erros = req.validationErrors();
    console.log(erros)
    if(erros){
        res.render("index", {validacao: erros});
        return;
    }

    res.render("chat")
}