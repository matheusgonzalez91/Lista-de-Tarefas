function adicionar(){
    let tarefa = document.getElementById('tarefas').value;
    let list = document.getElementById('lista').innerHTML;

    list += '<p>' +tarefa+ '</p>'

    document.getElementById('lista').innerHTML = list;

    //Limpar campo do input após adicionar a tarefa
    document.getElementById('tarefas').value = null;
}