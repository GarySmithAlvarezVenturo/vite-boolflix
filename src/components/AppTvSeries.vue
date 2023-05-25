<script>
export default {
    props: {
        DataTvSeries: Object,
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
    <div class="card_series">
        <img v-if="DataTvSeries.poster_path" :src="`http://image.tmdb.org/t/p/w342${DataTvSeries.poster_path}`" :alt="DataTvSeries.poster_path">
        <img v-else src="../assets/img/fallback-image.png" alt="">
        <div>
            <div class="name">{{ DataTvSeries.name }}</div>
            <div class="original_name">{{ DataTvSeries.original_name }}</div>
            <span class="language"><img :src="languageFilter(DataTvSeries)" alt=""></span>
            <div class="vote_average">{{ DataTvSeries.vote_average }}</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card_series {
    border: 1px solid black;
    color: rgb(30, 41, 92);
    display: flex;
}
</style>