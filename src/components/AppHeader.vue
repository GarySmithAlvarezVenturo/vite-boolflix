<script>
import { store } from '../store';

export default {
    data() {
        return {
            store,
        };
    },

    methods: {
        emitSearchBar() {
            this.$emit('performSearch');
        },
    },
};
</script>

<template>
    <header>
        <div class="flex_container">
            <h1>BOOLFLIX</h1>
            <form class="search" @submit.prevent="emitSearchBar">
                <input
                  placeholder="Cerca Film o Serie TV"
                  type="text"
                  v-model="store.SearchBar"
                >
                <button>CERCA</button>
                <div>
                    <small class="error" v-show="store.InputError">Devi scrivere qualcosa!</small>
                </div>
            </form>
        </div>
    </header>
</template>

<!--STYLE -->

<style lang="scss" scoped>
.flex_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5rem;
    padding-inline: 2rem;
    background-color: black;

    h1 {
        color: red;
    }

    .search {
        input {
            margin-right: 1rem;
        }
    }

    .error {
        color: red;
    }
}
</style>