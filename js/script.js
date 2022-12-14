const { createApp } = Vue

    createApp({
        data() {
        return {
            newTodoElement: "",
            todoList: [

                {
                    text:"Andare a fare la prima spesa ",
                    done: true
                },
                {
                    text:"Andare a fare la seconda spesa",
                    done: false
                },
                {
                    text:"studiare",
                    done: true
                },
                {
                    text:"uscire",
                    done: true
                },
                {
                    text:"suonare",
                    done: true
                },
                {
                    text:"andare al cinema",
                    done: false
                },
            ],
        }
    },
        methods: {
            addNewTodoElement(content) {
                content = content.toLowerCase();
                if (content != "" && (!this.todoList.includes(content))) {
                    this.todoList.push({text : content, done : false});
                    this.clearUserInput();
                    }
                
                
            },

            clearUserInput() {
                this.newTodoElement = "";
            },

            removeTodo (itemToRemove) {
                itemIndex = this.todoList.indexOf(itemToRemove);
                if (itemIndex > - 1) {
                this.todoList.splice (itemIndex, 1)
                }
            }
        }

    }).mount('#app')

