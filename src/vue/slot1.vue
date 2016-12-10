<template>
    <div>
        <h1>I'm the parent title</h1>
        <my-component>
            <p>This is some original content</p>
            <p>This is some more original content</p>
            <input type="number" step="0.01">
        </my-component>
        <button @click="goOne">goOne</button>
    </div>
</template>


<script>
    import Slot1Component from '../components/slot1Component.vue'

    export default{
        components: {
            'my-component': Slot1Component
        },
        methods: {
            goOne: function() {
                var sendObject = {
                    name: 'Eric',
                    age: 24,
                    sayHello: 'I come from HaiNan'
                }

                // this.$router.push({ name: 'one' });
                this.$router.push({ name: 'one', params: sendObject});
            }
        }
    }
</script>
