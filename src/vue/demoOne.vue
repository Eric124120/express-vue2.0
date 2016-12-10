<template>
    <div>
        <div class="demo-list">
            <h3>模板变量绑定</h3>
            <p v-text="txtMessage"></p>
            <p>txtMessage: {{txtMessage}} {{$route.params}}</p>
        </div>
        <div class="demo-list">
            <h3>纯html的绑定</h3>
            <p v-text="htmlMessage"></p>
            <p v-html="htmlMessage"></p>
        </div>
        <div class="demo-list">
            <h3>v-model双向绑定</h3>
            <input class="demo-input" type="text" v-model="modelMessage"/>
            <p v-text="modelMessage"></p>
        </div>
        <div class="demo-list">
            <h3>v-bind绑定</h3>
            <p>属性href绑定: <a v-bind:href="goToBaidu">{{goToBaidu}}</a></p>
            <p>
                <input placeholder="属性disabled绑定" v-bind:disabled="bindDisabled"/>
                <button class="demo-btn" v-on:click="bindDisabled = !bindDisabled">toggle</button>
            </p>
        </div>
        <div class="demo-list">
            <h3>v-on事件绑定</h3>
            <button class="demo-btn" @click="clickFunction">点击我了</button>
        </div>
        <div class="demo-list">
            <h3>v-if和v-show条件渲染</h3>
            <p>v-if实例：<span v-if="isShow">show</span><button class="demo-btn" @click="isShow = !isShow">ifToggle</button></p>
            <p>v-show实例：<span v-show="isShow1">show</span><button class="demo-btn" @click="isShow1 = !isShow1">showToggle</button></p>
        </div>
    </div>
</template>

<script>
    export default{
        data: function() {
            return {
                txtMessage: 'hello vue!',
                htmlMessage: '<span class="color-red">Hello Vue!</span>',
                modelMessage: 'Eric',
                goToBaidu: 'http://www.baidu.com',
                bindDisabled: false,
                isShow: true,
                isShow1: true
            }
        },
        methods: {
            clickFunction: function () {
                alert('你点击了我');
                console.log(this.$route.params);
            }
        }
    }
</script>
