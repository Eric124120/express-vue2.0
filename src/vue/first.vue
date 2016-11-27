<template>
    <div class="first">
        <h1 v-text="firstText" class="home-text"></h1>
        <img v-bind:src="imageSrc"/>
        <div class="form">
            <div class="form-box">
                <h3>单选框</h3>
                <input type="checkbox" id="checkbox" v-model="checked">
                <label for="checkbox">{{ checked }}</label>
            </div>
            <div class="form-box">
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
            <div class="form-box">
                <h3>单选按钮</h3>
                <input type="radio" id="one" value="One_1" v-model="picked">
                <label for="one">One</label>
                <input type="radio" id="two" value="Two_2" v-model="picked">
                <label for="two">Two</label>
                <br>
                <span>Picked: {{ picked }}</span>
            </div>
            <div class="form-box">
                <h3>单选下拉列表</h3>
                <select class="form-box-select" v-model="selected">
                    <option v-for="option in options" v-bind:value="option.value">{{option.text}}</option>
                </select>
                <span>Selected: {{ selected }}</span>
            </div>
            <div class="form-box">
                <h3>多选下拉列表</h3>
                <select class="form-box-select" v-model="selectedArray" multiple>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                </select>
                <br>
                <span>Selected: {{ selectedArray }}</span>
            </div>
            <div class="form-box">
                <h3>input修饰符</h3>
                <label>lazy:</label>
                <input v-model.lazy="inputLazy"/>
                <span v-text="inputLazy"></span><br/>
                <label>number:</label>
                <input v-model.number="inputNumber"/>
                <span v-text="inputNumber"></span><br/>
                <label>trim:</label>
                <input v-model.trim="inputTrim"/>
                <span v-text="inputTrim"></span><br/>
            </div>
        </div>

    </div>
</template>
<style lang="sass">
    .first {
        text-align: center;
    }
    .form {
        &-box {
            padding: 10px;
            border: 1px solid #e8e8e8;

            &-select{
                border: 1px solid #e8e8e8;
                padding: 3px 15px;
                & option {
                    width: 100%;
                    height: 20px;
                }
            }

            input {
                border: 1px solid #e8e8e8;
            }
        }
    }
</style>
<script>
    import Base from '../js/base'
    export default{
        data(){
            return{
                picked: 'One_1',
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
                checkedNames: [],
                firstText:'欢迎使用VUE',
                imageSrc: require('../images/logo.png')
            }
        }
    }
</script>
