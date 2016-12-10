<template>
    <div>
        <first-component/>
        <router-link v-bind:to="item.toUrl" class="fm-list-item" v-for="item in items">
            <div class="fm-list-content" v-text="item.titleTxt"></div>
            <div class="fm-list-arrow">
                <span class="fm-icon-arrow-right"></span>
            </div>
        </router-link>
    </div>
</template>

<script>
    import '../css/base.scss'
    import '../css/form.scss'
    import FirstComponent from '../components/header.vue'

    export default{
        data(){
            return{
               items: [
                  {
                      toUrl: '/one',
                      titleTxt: '基本语法'
                  }, {
                      toUrl: '/tow',
                      titleTxt: '计算属性'
                  }, {
                      toUrl: '/three',
                      titleTxt: 'class和style绑定'
                  }, {
                      toUrl: '/v-for',
                      titleTxt: 'v-for列表渲染'
                  }, {
                      toUrl: '/v-on',
                      titleTxt: 'v-on事件处理'
                  }, {
                      toUrl: '/v-model',
                      titleTxt: 'v-model表单控件'
                  }, {
                    toUrl: '/slot1',
                    titleTxt: '单个slot'
                  }, {
                    toUrl: '/slot2',
                    titleTxt: '具名slot'
                  }, {
                    toUrl: '/ajax',
                    titleTxt: 'v-resource服务器端请求'
                  }
               ]
            }
        },
        components: {
            'first-component': FirstComponent,
        }
    }
</script>
