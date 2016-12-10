<template>
    <div>
        <div class="demo-list">
            <h3>事件监听</h3>
            <p>这个按钮被点击了 {{ count }} 次。</p>
            <button class="demo-btn" @click="count += 1">增加 1</button>
        </div>
        <div class="demo-list">
            <h3>事件绑定</h3>
            <button class="demo-btn" @click="eventClick('click me!', $event)">点击</button>
        </div>
        <div class="demo-list">
            <h3>事件修饰</h3>
            <div class="bg-green padding10" @click="stopParent">
                <button class="demo-btn" @click.stop="stopFn">stop阻止冒泡</button>
            </div>
            <div class="padding10">
                <label>阻止默认事件:</label>
                <a href="http://www.baidu.com" @click.prevent="goBaidu">去百度</a>
            </div>
            <div class="bg-green padding10" @click.capture="captureFn">
                <label>事件捕获阶段触发:</label>
                <button class="demo-btn" @click.stop="stopFn">stop阻止冒泡</button>
            </div>
            <div class="padding10" @click.self="selfFn">
                <label>只当事件在该元素本身（而不是子元素）触发时触发回调:</label>
                <button class="demo-btn" @click="selfChildFn">目标子元素</button>
            </div>
        </div>
        <div class="demo-list">
            <h3>按键修饰符</h3>
            <ul>
                <li>
                    <label>keyEnter:</label>
                    <input class="demo-input" type="text" v-on:keyup.enter="keyupFn">
                </li>
                <li>
                    <label>keyEsc:</label>
                    <input class="demo-input" type="text" v-on:keyup.esc="keyupFn">
                </li>
                <li>
                    <label>keySpace</label>
                    <input class="demo-input" type="text" v-on:keyup.space="keyupFn">
                </li>
            </ul>
        </div>
    </div>
</template>
<style>

</style>
<script>

    export default{
        data(){
            return{
                count: 0
            }
        },
        methods: {
            eventClick: function(message, event) {
                console.log(message);
                console.log('target:', event.target.tagName);
            },
            stopParent: function() {
                console.log('事件冒泡！！！！');
            },
            stopFn: function() {
                console.log('stop点击了我');
            },
            goBaidu: function() {
                console.log('go to baidu !!!!');
            },
            captureFn: function() {
                console.log('捕获触发');
            },
            selfFn: function() {
                console.log('目标元素触发');
            },
            selfChildFn: function() {
                console.log('我是目标子元素');
            },
            keyupFn: function(e) {
                console.log(e.code);
            }
        }
    }
</script>
