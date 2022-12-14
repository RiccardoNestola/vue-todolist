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
                {
                    text:"pagare le tasse",
                    done: true
                },
            ],
        }
        }
    }).mount('#app')

