const app = Vue.createApp({
    data(){
        return {
            users: [
                {
                    id: 567,
                    name: 'bill',
                    profession: 'developer'
                },
                {
                    id: 567,
                    name: 'tim',
                    profession: 'chief'
                },
                {
                    id: 567,
                    name: 'phill',
                    profession: 'plumber'
                },
                {
                    id: 567,
                    name: 'batman',
                    profession: 'batman'
                },
            ],
        }
    }
})

const mountedApp = app.mount('#app')

