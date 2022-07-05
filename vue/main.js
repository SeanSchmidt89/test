const app = Vue.createApp({
    data(){
        return {
            tasks: []
        }
    },
    computed: {
        taskCount(){
            return this.tasks.length;
        }
    },
    methods: {
        addNewTask(newTask){
            this.task.push(newTask);
        },
        removeTask(task){
            this.tasks.splice(this.tasks.indexOf(task), 1);
        }
    }
});


app.component('to-do', {
    props: {
        tasks: {
            type: Array,
            required: true,
        },
        remaining: {
            type: Number,
            required: true,
        }
    },
    data(){
        return {
            error: null,
            newTask: null,
        }
    },
    methods: {
        submitTask() {
            if (this.newTask){
                this.$emit('add-task', this.newTask);
                this.newTask = null;
                if (this.error){
                    this.error = null;
                }
            } else {
                this.error = 'The input field cant be empty';
            }
        }
    },
    template: `
        <div class="container my-2">
            <p><strong>Remaining Tasks: {{remaining}}</strong></p>
            <input type="text" 
                   v-model="newTask" 
                   class='form-control' 
                   placeholder='What do you need to do?' 
                   @keyup.enter='submitTask'>
            <br>

            <div v-for='task in tasks'>
                {{task}}
            </div>
        </div>
    `
})


const mountedApp = app.mount('#app')