<template>
    <div class='cart'>
        <h1>Cart</h1>
        <div class="contentCart">
           <p v-if="$store.state.quantityUpdatted === 0">Your cart is empty.</p> 
            <div v-else class="articleInCartFlex">
                <img class="articleInCartImg" src="../assets/image-product-1-thumbnail.jpg" alt="img">
                <div class="articleInCart">
                    <p>Fall Limited Edition Sneakers</p>
                    <div class="articleInCartPrice">{{ this.price + '.00$' + ' x ' + $store.state.quantityUpdatted }} <strong> {{ '= ' +(this.price * $store.state.quantityUpdatted)+ '.00$'}}</strong></div> 
                </div>
                <svg @click="DELETE_QUANTITY_UPDATED()" class="imgBin" width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg>
            </div>
            <button @click ="sendIsOpenClose()" class="btn_checkout" type ="button" >Checkout</button>
        </div>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'
    export default {
        props: {
            quantity: {
                type: Number
            },
        },
        data() {
            return {
                price: 125
            }
        },
        methods: {
            ...mapMutations(['DELETE_QUANTITY_UPDATED']),
            sendIsOpenClose(){
                this.$emit('isOpenClose')
            }
        },
        
    }
</script>

<style lang="scss" scoped>
.cart{
    position:absolute;
    right:15px;
    top:80px;
    width:250px;
    background-color: hsl(0, 0%, 100%);
    z-index:100;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
    border-radius: 7px;
    h1{
        font-size:.8rem;
        margin:0;
        padding:10px;
        border-bottom: solid 1px hsl(223, 64%, 98%)
    }
    .contentCart{
        text-align: center;
        font-size: .7rem;
        font-weight: 700;
        color:hsl(220, 14%, 75%);
        padding: 40px 10px;

    }

    .articleInCart {
        font-weight: 400;
        margin: 0 7px;
        text-align: left;
        p{
            margin:0;
            line-height: 1.2rem;
        }
        strong{
            font-weight:700;
            color:#000;
        }
    }
    .articleInCartFlex{
        display:flex;
        align-items: center;
    }
    .articleInCartImg{
        height : 50px;
        border-radius: 7px;
    }
    .imgBin{
        cursor:pointer;
    }
    .btn_checkout{
        padding:7px 40px;
        border:none;
        background-color:hsl(26, 100%, 55%);
        border-radius:5px;
        color:hsl(25, 100%, 94%);
        font-weight: 700;
        font-size:.7rem;
        margin-top: 20px ;
        cursor: pointer;
        &:hover{
            opacity:.6;
        }
    
    }
}
</style>