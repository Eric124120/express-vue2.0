<template>
    <div>
        <h2 class="footer-h2" v-text="footerText"></h2>
    </div>
</template>
<style lang="sass">
    .footer-h2 {
        text-align: center;
        color: green;
    }
</style>
<script>
    export default{
        data(){
            return{
                footerText:'欢迎来到vue2.0demo，哈哈哈'
            }
        }
    }
</script>
