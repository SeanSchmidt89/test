const app = Vue.createApp({
    data(){
        return{
            message: 'hello world',
            num: 5,
            img: 'https://www.topgear.com/sites/default/files/news-listicle/image/2020/03/1993-toyota-supra-twin-turbo-sport-roof-_0.jpg?w=1290&h=726',
            link: 'https://vuejs.org',
        }
    }
})

const mountedApp = app.mount('#app');