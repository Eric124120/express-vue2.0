<template>
    <div>
        <app-layout>
            <app-header slot="header"/>
            <p>A paragraph for the main content.</p>
            <p>And another one.</p>
            <app-footer slot="footer"/>
        </app-layout>
    </div>
</template>

<script>
    import Slot2Component from '../components/slot2Component.vue'
    import Header from '../components/header.vue'
    import Footer from '../components/footer.vue'

    export default{
        components: {
            'app-layout': Slot2Component,
            'app-header': Header,
            'app-footer': Footer
        }
    }
</script>
