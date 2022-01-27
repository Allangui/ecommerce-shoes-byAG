<template>
    <div class="completeBar">
        <div class="leftSideBar">
            <img src="../assets/logo.svg" alt="logo">
            <nav>
                <router-link to ="/">Collections</router-link>
                <router-link to ="/Men">Men</router-link>
                <router-link to ="/Women">Women</router-link>
                <router-link to ="/About">About</router-link>
                <router-link to ="/Contact">Contact</router-link>
            </nav>
        </div>
        <div class="rightSideBar">
            <img @click="isOpen = isOpen ? false : true " class="cart" src="../assets/icon-cart.svg" alt="cart">
            <img class="avatar" src="../assets/image-avatar.png" alt="avatar">
        </div>
        <cartPopup v-if="isOpen" @isOpenClose="isOpen = false" />
    </div>
</template>

<script>
    import cartPopup from "./cartPopup.vue"
    export default {
        components: {
            cartPopup : cartPopup
        },
        name : "Topbar",
        data(){
            return {
                isOpen: false,
            }
        },
        methods:{

        },
    }
</script>

<style lang="scss" scoped>
.completeBar{
    height:100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid hsl(230, 15%, 92%);
    margin-left: 15px;
    margin-right: 15px;
}
.leftSideBar {
    display:flex;
    justify-content: space-between;
    align-items: center;
    
    img {
        height:20px;
        margin-right:25px;
    }
    nav a{
        margin: 15px;
        font-size: .9rem;
        color: hsl(219, 9%, 45%);
        position:relative;
        
        &:hover{
            color:hsl(220, 13%, 13%);
        }
        &:hover::after {
                content:'';
                position:absolute;
                height:3px;
                width:100%;
                top:57px;
                left:0;
                background-color:hsl(26, 100%, 55%);
            }
    }
    .router-link-active{
    font-weight: bold;
}
}

.rightSideBar{
    display:flex;
    align-items: center;
    margin-right:25px;
    .cart {
        height:20px;
        margin:15px;
        cursor:pointer;
    }
    .avatar{
        height:40px;
        margin:15px;
        cursor:pointer;
        border: solid 2px transparent ;
        &:hover{
            border: solid 2px hsl(26, 100%, 55%) ;
            border-radius:25px;
        }
    }

}
</style>