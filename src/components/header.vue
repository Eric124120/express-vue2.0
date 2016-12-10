<template>
    <div class="header">
        <img v-bind:src="imageSrc"/>
        <h2>{{welcomeTxt}}</h2>
    </div>
</template>
<style lang="sass">
    .header {
        text-align: center;
    }
</style>
<script>
    export default {
        data() {
            return {
                welcomeTxt: '欢迎加入VUE',
                imageSrc: require('../images/logo.png')
            }
        }
    }
</script>

