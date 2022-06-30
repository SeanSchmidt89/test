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
                    id: 568,
                    name: 'tim',
                    profession: 'chief'
                },
                {
                    id: 569,
                    name: 'phill',
                    profession: 'plumber'
                },
                {
                    id: 570,
                    name: 'batman',
                    profession: 'batman'
                },
            ],
        }
    }
})

const mountedApp = app.mount('#app')

