const app = Vue.createApp({
    data(){
        return{
            comments: [
                {
                    username: 'alice',
                    content: 'first comment!'
                },
                {
                    username: 'Bob',
                    content: 'second comment!'
                },
                {
                    username: 'Jim',
                    content: 'Thrid comment!'
                },
                {
                    username: 'Fred',
                    content: 'Forth comment!'
                },
                {
                    username: 'creepy craig',
                    content: 'fith comment!'
                },
            ]
        }
    }
})
