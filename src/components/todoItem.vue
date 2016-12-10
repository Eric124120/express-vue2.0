<template>
    <div>
        <li>
            {{ title }}
            <button v-on:click="remove">X</button>
        </li>
    </div>
</template>

<script>

    export default{
        props: ['title'],
        methods:{
            remove: function() {
                console.log(this.title);
                this.$emit('remove');
            }
        }
    }
</script>
