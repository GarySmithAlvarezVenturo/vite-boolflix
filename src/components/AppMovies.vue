<script>
export default {
    props: {
        DataMovies: Object,
    },

    methods: {
        languageFilter(index){
            if(index.original_language == 'en' ) {
                return 'https://flagsapi.com/GB/flat/32.png'
            } else if(index.original_language == 'ja') {
                return 'https://flagsapi.com/JP/flat/32.png'

            } else {
                return 'https://flagsapi.com/'+index.original_language.toUpperCase()+'/shiny/32.png'
            }
   
        }

    },

};
</script>

<template>
    <div class="card_movies">
        <img v-if="DataMovies.poster_path" :src="`http://image.tmdb.org/t/p/w342${DataMovies.poster_path}`" :alt="DataMovies.poster_path">
        <img v-else src="../assets/img/fallback-image.png" alt="">
        <div>
            <div class="title"><span>TITOLO: </span>{{ DataMovies.title }}</div>
            <div class="original_title"><span>TITOLO ORIGINALE: </span>{{ DataMovies.original_title }}</div>
            <span class="language"><img :src="languageFilter(DataMovies)" alt=""></span>
            <div class="vote_average"><span>VOTO: </span>{{ DataMovies.vote_average }}</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card_movies {
    border: 1px solid black;
    color: rgb(30, 41, 92);
    display: flex;
}
</style>