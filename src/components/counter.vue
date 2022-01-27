<template>
    <div class="mycounter">
        <img @click="$store.state.quantity > 0 ? DECREMENT_COUNT() : null " class="minus" src="../assets/icon-minus.svg"  alt="moins">
        <div class="quantity"> {{ $store.state.quantity }}</div>
        <img @click="INCREMENT_COUNT()" class="plus" src="../assets/icon-plus.svg" alt="plus"> 
    </div>
</template>

<script>
    import { mapState, mapMutations } from 'vuex'
    export default {
        computed: {
            ...mapState(['quantity']),
        },
        methods : {
            ...mapMutations(['INCREMENT_COUNT','DECREMENT_COUNT']),
        },
    }
</script>

<style lang="scss" scoped>
    .mycounter{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: hsl(0, 0%, 93%);
        width:80px;
        border-radius:5px;
        .minus{
            height:4px;
            width:10px;
            cursor: pointer;
            padding: 7px;
        }
        .quantity{
            font-weight:700;
            font-size: .8rem;
        }
        .plus{
            height:10px;
            width:10px;
            cursor: pointer;
            padding: 7px;
        }
    }
</style>