<template>
    <div class="first">
        <h1 v-text="firstText" class="home-text"></h1>
        <img v-bind:src="imageSrc"/>
    </div>
</template>
<style lang="sass">
    .first {
        text-align: center;
    }
</style>
<script>
    import Base from '../js/base'
    export default{
        data(){
            return{
                firstText:'欢迎使用VUE',
                imageSrc: require('../images/logo.png')
            }
        }
    }
</script>
