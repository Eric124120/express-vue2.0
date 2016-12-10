<template>
    <div>
        <div class="demo-list">
            <h3>文本框</h3>
            <p class="white-space-pre">{{ message }}</p>
            <br>
            <textarea class="multiple-text" v-model="message" placeholder="add multiple lines"></textarea>
        </div>
        <div class="demo-list">
            <h3>单个复选框</h3>
            <input type="checkbox" id="checkbox" v-model="checked">
            <label for="checkbox">{{ checked }}</label>
        </div>
        <div class="demo-list">
            <h3>多个勾选框，绑定到同一个数组</h3>
            <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
            <label for="jack">Jack</label>
            <input type="checkbox" id="john" value="John" v-model="checkedNames">
            <label for="john">John</label>
            <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
            <label for="mike">Mike</label>
            <br>
            <span>Checked names: {{ checkedNames }}</span>
        </div>
        <div class="demo-list">
            <h3>单选按钮</h3>
            <input type="radio" id="one" value="One_1" v-model="picked">
            <label for="one">One</label>
            <input type="radio" id="two" value="Two_2" v-model="picked">
            <label for="two">Two</label>
            <br>
            <span>Picked: {{ picked }}</span>
        </div>
        <div class="demo-list">
            <h3>单选下拉列表</h3>
            <select class="demo-select" v-model="selected">
                <option v-for="option in options" v-bind:value="option.value">{{option.text}}</option>
            </select>
            <span>Selected: {{ selected }}</span>
        </div>
        <div class="demo-list">
            <h3>多选下拉列表</h3>
            <select class="demo-select" v-model="selectedArray" multiple>
                <option>A</option>
                <option>B</option>
                <option>C</option>
            </select>
            <br>
            <span>Selected: {{ selectedArray }}</span>
        </div>
        <div class="demo-list">
            <h3>input修饰符</h3>
            <label>lazy:</label>
            <input class="demo-input" v-model.lazy="inputLazy"/>
            <p v-text="inputLazy"></p>
            <label>number:</label>
            <input class="demo-input" v-model.number="inputNumber"/>
            <p v-text="inputNumber"></p>
            <label>trim:</label>
            <input class="demo-input" v-model.trim="inputTrim"/>
            <p v-text="inputTrim"></p>
        </div>
    </div>
</template>
<style>
    .multiple-text {
        width:100%;
        height: 50px;
        border: 1px solid #e8e8e8;
    }
    .white-space-pre {
        white-space: pre;
    }
</style>
<script>

    export default{
        data(){
            return{
                picked: 'One_1',
                message: '',
                checked: false,
                selectedArray: [],
                selected: 'A',
                inputLazy: null,
                inputTrim: null,
                inputNumber: 0,
                options: [
                    {text: 'selectA', value: 'A'},
                    {text: 'selectB', value: 'B'},
                    {text: 'selectC', value: 'C'}
                ],
                checkedNames: ['John']
            }
        }
    }
</script>
