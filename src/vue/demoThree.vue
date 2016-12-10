<template>
    <div>
        <div class="demo-list">
            <h3>class绑定-对象语法1</h3>
            <div v-bind:class="{'font-size30': isFontSize, 'color-red': isColorRed}">
                hello vue!
            </div>
        </div>
        <div class="demo-list">
            <h3>class绑定-对象语法2</h3>
            <div v-bind:class="classObject">
                hello vue!
            </div>
        </div>
        <div class="demo-list">
            <h3>class绑定-数组语法</h3>
            <div v-bind:class="[fontSizeClass, colorClass]">
                hello vue!
            </div>
        </div>
        <div class="demo-list">
            <h3>style绑定-对象语法</h3>
            <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">
                hello vue!
            </div>
        </div>
        <div class="demo-list">
            <h3>style绑定-数组语法</h3>
            <div v-bind:style="[baseStyles, overridingStyles]">
                hello vue!
            </div>
        </div>
    </div>
</template>

<style>
    .font-size30 {
        font-size: 30px;
    }
    .color-red {
        color: red;
    }
    .color-green {
        color: green;
    }
</style>

<script>

    export default{
        data(){
            return{
                isFontSize: true,
                isColorRed: true,
                classObject: {
                    'font-size30': true,
                    'color-green': true
                },
                fontSizeClass: 'font-size30',
                colorClass: 'color-green',
                activeColor: 'red',
                fontSize: 30,
                baseStyles: {color:'red'},
                overridingStyles: {fontSize: '30px'}

            }
        }
    }
</script>
