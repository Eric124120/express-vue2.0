<template>
    <div  class="second">
        <h1 v-text="secondText"></h1>
        <img v-bind:src="imageSrc"/>
    </div>
</template>

<style lang="sass">
    .second {
        text-align: center;
    }
</style>

<script>
    import '../css/base.scss'
    import Base from '../js/base'
    export default{
        data(){
            return{
                secondText:'这是第二个页面',
                imageSrc: require('../images/test.jpg')
            }
        }
    }
</script>
