<template>
    <span v-text="my-message"></span>
</template>
<script>

    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
            'other-component':OtherComponent,
            HeaderComponent,
        }
    }
</script>
