var todos = [ {
}]
const TodoListMachine = {
    data() {
        return {
            todos: window.todos,
            newTodo: {
                active: false
            }
        }
    },methods: {
        removeTodo: function(){
            this.todos = [];
        },
        addTodo: function(){
            if(this.newTodo.description){
                this.todos.push(this.newTodo)
                this.newTodo = {};
            }else{
                alert("must contains description")
            }
        }
    }
}

Vue.createApp(TodoListMachine).mount('#app');
