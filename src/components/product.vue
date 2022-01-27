<template>
    <div class="main">
        <Galery @sendGaleryAbsolute="isGaleryAbsolute= true" class="galery" />
        <Galery :isAbsolute="true" v-if="isGaleryAbsolute===true" @closeGaleryAbsolute="isGaleryAbsolute= false" class="galery galeryAbsolute" />
        <Description class="description" />
    </div>
</template>

<script>
import Galery from "./galery.vue"
import Description from "./description.vue"

export default {
        data() {
            return {
                isGaleryAbsolute: false
            }
        },
        components : {
            Galery : Galery,
            Description : Description,
        },
        methods: {

        },
    }
</script>

<style lang="scss" scoped>
.main {
    display:flex;
    justify-content: space-between;
    .galery{
        width:50vw;
    }
    .description{
        width:50vw;
    }
    .galeryAbsolute{
        position:absolute;
        width:100vw;
        top: 0;
        bottom: 0;
        margin: auto;
        left: 0;
        right: 0;
        z-index:101;
        background-color: rgba(0,0,0,.7);
    }
}
</style>