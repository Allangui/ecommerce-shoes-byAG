<template>
    <div class="main">
        <div class="company">Sneaker Company</div>

        <h1>Fall Limited Edition Sneakers</h1>

        <p>These low-profile sneakers are your perfect casual wear companion. Featuring a 
        durable rubber outer sole, they’ll withstand everything the weather can offer.</p>

        <div class="price">
            <div class="newPrice">
                <div class="actual">$125.00</div>
                <div class="reduc">50%</div>
            </div>
            <div class="oldPrice">$250.00</div>
        </div>
        <div class="selectBar">
            <Counter />
            <button @click="UPDATE_QUANTITY()" class="btnAdd" type="button"> <img src="../assets/icon-cart-white.svg" alt="cart"> Add to cart</button>
        </div>
    </div>
</template>

<script >
import { mapMutations } from 'vuex'
import Counter from "./counter.vue"
    export default {
        components: {
            Counter: Counter,
        },
        methods: {
            ...mapMutations(['UPDATE_QUANTITY'])
        },
    }
</script>

<style lang="scss" scoped>
.main{
    display:inline-block !important; 
    padding-right:30px;
    .company{
        font-weight: 700;
        color: hsl(26, 100%, 55%);
        font-size: .8rem;
    }
    h1{
        font-size: 1.8rem;
    }
    p{
        font-size: .8rem;
        color: hsl(219, 9%, 45%);
    }
    .newPrice{
        display:flex;
        align-items: center;
        font-weight: 700;
        .actual{
            font-size: 1.2rem;
        }
        .reduc{
            font-size: .7rem;
            color:hsl(26, 100%, 55%);
            background-color:hsl(25, 100%, 94%) ;
            margin-left: 10px;
            padding:3px 5px;
            border-radius: 5px;
        }
    }
    .oldPrice{
        font-size:.7rem;
        line-height: 1.5rem;
        color:  hsl(220, 14%, 75%);
        text-decoration: line-through;
    }
    .selectBar{
        margin-top:20px;
        display: flex;
        
    }
    .btnAdd{
        padding:7px 40px;
        border:none;
        background-color:hsl(26, 100%, 55%);
        border-radius:5px;
        color:hsl(25, 100%, 94%);
        font-weight: 700;
        font-size:.7rem;
        cursor: pointer;
        margin-left:10px;
        img{
            height: 12px;        
            margin-right: 7px;
        }
        &:hover{
            opacity:.6;
        }
    }
}
</style>