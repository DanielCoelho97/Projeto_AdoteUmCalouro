Vue.component('header-home', {

    template: `
        <header class=" header-home"> <!--Inicio do header -->
            <div class="logo-principal">
                <h1 class="header-logo">Bem vindos</h1>
            </div>

            <nav class="nav-home">
                <div>
                    <p>Inicio</p>
                     <div class="home-icone"></div>
                </div>

                <div class="itens-lista">
                    <ul>
                        <li v-for="section in sections">
                            <a href="#">
                                <div class="custom-bullet"></div>
                                {{section}}
                            </a>
                        </li>
                    </ul>
                </div>
           </nav>

        </header> <!--Fim do Header-->
    `
    ,
    data(){
        return {
            sections: [
                'Lorem ipsum dolor',
                'Lorem ipsum dolor',
                'Lorem ipsum dolor',
                'Lorem ipsum dolor',
                'Lorem ipsum dolor',
                'Lorem ipsum dolor',
                'Lorem ipsum dolor',
                'Lorem ipsum dolor',
                'Lorem ipsum dolor',
            ]
        }
    }
})


Vue.component('main-home', {
    template: `
        <div class="main-home">
            <div class="container">
                <div class="imagem-home">
                    <img src="https://cdn-images-1.medium.com/max/1000/1*c34daw_rg89UAh4uFCZ96w.jpeg" alt="">
                </div>
            </div>
        </div>
    `
})


const app = new Vue({
    el: '#header-home',
    data: {
    }
})

