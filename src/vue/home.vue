<template>
    <div id='homeComponent'>
        <header-component/>
        <router-view></router-view>
        <footer-component/>
    </div>
</template>

<script>
    import HeaderComponent from '../components/header.vue'
    import FooterComponent from '../components/footer.vue'
    export default{
        data(){
            return{
                homeText:'hello vue'
            }
        },
        components:{
            'footer-component': FooterComponent,
            'header-component': HeaderComponent,
        }
    }
</script>
