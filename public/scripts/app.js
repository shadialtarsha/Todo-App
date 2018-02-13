const url = "/api/todos/";
$(document).ready(() => {
    $.ajax({
            method: "GET",
            url,
            dataType: "json"
        }).done(addTodos)
        .fail((err) => {
            console.log(error);
        });

    $("#todoInput").on("keypress", postNewTodo);
    $(".list").on("click", "span", deleteTodo);
    $(".list").on("click", "li", updateTodo);
});

function addTodos(todos) {
    todos.forEach((todo) => {
        addTodo(todo);
    });
}

function addTodo(todo) {
    let item = $(`
    <li class="task">
        ${todo.name} <span>X</span> 
    </li>
    `);
    if (todo.completed) {
        item.addClass("done");
    }
    item.data("id", todo._id);
    item.data("completed", todo.completed);
    $(".list").append(item);
}

function postNewTodo(event) {
    if (event.which === 13) {
        const todoName = this.value;
        $.ajax({
                method: "POST",
                url,
                data: {
                    name: todoName
                }
            }).done((newTodo) => {
                $("#todoInput").val("");
                addTodo(newTodo);
            })
            .fail((err) => {
                console.log(err);
            });
    }
}

function deleteTodo(event) {
    event.stopPropagation();
    const todoId = $(this).parent().data("id");
    const self = $(this);
    $.ajax({
            method: "DELETE",
            url: url.concat(todoId),
        }).done((res) => {
            self.parent().remove();
        })
        .fail((err) => {
            console.log(err);
        });
}

function updateTodo() {
    const todoId = $(this).data("id");
    const completed = $(this).data("completed");
    const self = $(this);
    $.ajax({
        method: "PUT",
        url: url.concat(todoId),
        data: {
            completed: !completed
        }
    }).done((res) => {
        self.toggleClass("done");
        self.data("completed", !completed);
    }).fail((err) => {
        console.log(err);
    });
}