<template>
    <div>
        <div class="demo-list">
            <h3>实例</h3>
            <p v-text="cardNumber"></p>
            <p v-text="toCardNumber"></p>
        </div>
        <div class="demo-list">
            <h3>vs methods</h3>
            <p v-for="computedItem in computedItems">{{computedItem.name}} : {{newDate}}</p>
            <button class="demo-btn" @click="addComputed">addComputed</button><br>
            <p v-for="methodItem in methodItems">{{methodItem.name}} : {{newDateFN()}}</p>
            <button class="demo-btn" @click="addMethods">addMethods</button>
        </div>
        <div class="demo-list">
            <h3>vs watch</h3>
            <div><label>firstName:</label><input type="text" class="demo-input" v-model="firstName"/></div>
            <div><label>lastName:</label><input type="text" class="demo-input" v-model="lastName"/></div>
            <div><label>fullName:</label><input type="text" class="demo-input" v-model="fullName"/></div>
        </div>
        <div class="demo-list">
            <h3>computed setter属性</h3>
            <div><label>firstName:</label><input type="text" class="demo-input" v-model="firstNameC"/></div>
            <div><label>lastName:</label><input type="text" class="demo-input" v-model="lastNameC"/></div>
            <div><label>fullName:</label><input type="text" class="demo-input" v-model="fullNameC"/></div>
        </div>
    </div>
</template>
<style>
</style>
<script>

    export default{
        data(){
            return{
                cardNumber:'993200101346370027',
                computedItems: [
                    {name: 'computed1'}
                ],
                methodItems: [
                    {name: 'method1'}
                ],
                firstName: 'Hang',
                lastName: 'Chengwen',
                fullName: 'Hang Chengwen',
                firstNameC: 'Foo',
                lastNameC: 'Bar'
            }
        },
        computed: {
            toCardNumber: function() {
                return this.cardNumber.substr(0,4) + ' ****** ' + this.cardNumber.substr(-4);
            },
            newDate: function() {
                var now = new Date(),
                    year = now.getFullYear(),
                    month = now.getMonth() + 1,
                    date = now.getDate(),
                    hh = now.getHours(),
                    ii = now.getMinutes(),
                    ss = now.getSeconds();

                return year + '-' + month + '-' + date + ' ' + hh + ':' + ii + ':' + ss;
            },
            /*
            fullNameC: function() {
                return this.firstNameC + ' ' + this.lastNameC;
            }
            */
            fullNameC: {
                get: function() {
                    return this.firstNameC + ' ' + this.lastNameC;
                },
                set: function(val) {
                    var valArr = val.split(' ');

                    this.firstNameC = valArr[0];
                    this.lastNameC = valArr[valArr.length - 1];
                }
            }

        },
        methods: {
            newDateFN: function() {
                var now = new Date(),
                    year = now.getFullYear(),
                    month = now.getMonth() + 1,
                    date = now.getDate(),
                    hh = now.getHours(),
                    ii = now.getMinutes(),
                    ss = now.getSeconds();

                return year + '-' + month + '-' + date + ' ' + hh + ':' + ii + ':' + ss;
            },
            addComputed: function(e) {
                let computedItems = this.computedItems;
                computedItems.push({name: 'computed' + (+computedItems.length + 1)});
            },
            addMethods: function(e) {
                let methodItems = this.methodItems;
                methodItems.push({name: 'method' + (+methodItems.length +1)});
            }
        },
        watch: {
            firstName: function (val) {
              this.fullName = val + ' ' + this.lastName
            },
            lastName: function (val) {
              this.fullName = this.firstName + ' ' + val
            }
        }
    }
</script>
