<template>
    <div class="container" :class="{'forAbsoluteContainer':isAbsolute===true} ">
        <button v-if="isAbsolute" @click="closeGaleryAbsolute" type="button" class="btnDelete"> 
            <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"  fill-rule="evenodd"/></svg>
        </button>
        <button v-if="isAbsolute" @click="previousImg" type="button" class="btnLeft"> 
            <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8"  stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
        </button>
        <button v-if="isAbsolute" @click="nextImg" type="button" class="btnRight"> 
            <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8"  stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
        </button>
        <img @click="sendGaleryAbsolute" :src="getImageUrl(thumbActive)" alt="img" class="mainImg" :class="{'forAbsoluteMain':isAbsolute===true} ">
        <img @click="thumbActive =1" src="../assets/image-product-1-thumbnail.jpg" alt="" class="thumbImg thumbImg1" :class="{'thumbActive':thumbActive===1,'forAbsoluteThumb forAbsoluteThumb1':isAbsolute===true}">
        <img @click="thumbActive =2" src="../assets/image-product-2-thumbnail.jpg" alt="" class="thumbImg thumbImg2" :class="{'thumbActive':thumbActive===2,'forAbsoluteThumb forAbsoluteThumb2':isAbsolute===true}">
        <img @click="thumbActive =3" src="../assets/image-product-3-thumbnail.jpg" alt="" class="thumbImg thumbImg3" :class="{'thumbActive':thumbActive===3,'forAbsoluteThumb forAbsoluteThumb3':isAbsolute===true}">
        <img @click="thumbActive =4" src="../assets/image-product-4-thumbnail.jpg" alt="" class="thumbImg thumbImg4" :class="{'thumbActive':thumbActive===4,'forAbsoluteThumb forAbsoluteThumb4':isAbsolute===true}">
    </div>
</template>

<script>
    export default {
        data() {
            return {
                thumbActive: 1,
                }
        },
        props: {
            isAbsolute: {
                type: Boolean,
                default: false
            },
        },
        methods: {
            sendGaleryAbsolute() {
                this.$emit('sendGaleryAbsolute')
                console.log('emit send')
            },
            closeGaleryAbsolute() {
                this.$emit('closeGaleryAbsolute')
                console.log('emit close')
            },
            previousImg() {
                if(this.thumbActive===1){
                    this.thumbActive = 4
                }else {
                    this.thumbActive -= 1
                }
            },
            nextImg(){
                if(this.thumbActive===4){
                    this.thumbActive = 1
                }else {
                    this.thumbActive += 1
                }
            },
            getImageUrl(name) {
                return new URL(`../assets/image-product-${name}.jpg`, import.meta.url).href
                }
        },
        
    }
</script>

<style lang="scss" scoped>
.container{
    display: grid;
    grid-template-columns: repeat(4,auto);
    grid-template-rows:  auto auto;
    grid-gap: 15px;
    justify-content: center;
    align-content: center;
    
    .mainImg{
        width:280px;
        grid-row: span 2;
        grid-column: span 4;
        border-radius: 10px;
        cursor: pointer;
    }
    .thumbImg{
        width:55px;
        grid-row:3;
        border-radius: 10px;
        cursor: pointer;
        border : solid 2px transparent;
        &:hover{
            background-color :rgba(255,255,255, .5);
        }
    }
    .thumbImg1{
        grid-column: 1;
    }
    .thumbImg2{
        grid-column: 2;
    }
    .thumbImg3{
        grid-column: 3;
    }
    .thumbImg4{
        grid-column: 4;
    }
    .thumbActive{
        opacity:.5;
        border: solid 2px hsl(26, 100%, 55%);
    }
}
.forAbsoluteContainer{
        column-gap: 0;
        grid-template-rows: auto auto auto;
        grid-template-columns: repeat(6,auto);
    .forAbsoluteMain{
        width:400px;
        grid-row: 2;
        cursor:default;
    }
    .forAbsoluteThumb{
        justify-self: center;
        
    }
    .forAbsoluteThumb1{
        grid-column: 2;
    }
    .forAbsoluteThumb2{
        grid-column: 3;
    }
    .forAbsoluteThumb3{
        grid-column: 4;
    }
    .forAbsoluteThumb4{
        grid-column: 5;
    }
    .btnDelete {
        width:auto;
        cursor: pointer;
        background-color : transparent;
        border: none;
        position: relative;
        grid-row: 1;
        grid-column: 5;
        justify-self: right;
        svg{
        cursor: pointer;
        fill: white;
        &:hover{
            fill: hsl(26, 100%, 55%);
        }
        }
    }
    .btnLeft,.btnRight{
        position: right;
        width:40px;
        height:40px;
        padding:5px;
        border-radius: 30px;
        border-width: 0;
        grid-row: 2;
        align-self: center;
        cursor: pointer;
        stroke: #1D2026;
        &:hover{
            svg {
        stroke:hsl(26, 100%, 55%);
            }
        }
    }
    .btnLeft{
        grid-column: 1;
        justify-self: left;
        transform: translateX(20px);
        
    }
    .btnRight{
        grid-column: 6;
        justify-self: right;
        transform: translateX(-20px);
    }
}
</style>