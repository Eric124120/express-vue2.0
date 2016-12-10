<template>
    <div>
        <div class="demo-list">
            <h3>数组-1</h3>
                <P  v-for="(item, index) in items">
                    {{index+1}}、{{helloMsg}} {{item.name}}
                </P>
        </div>
        <div class="demo-list">
            <h3>数组-2</h3>
            <template v-for="item in items">
                <p>{{ item.name }}</p>
                <p>{{ item.age }}</p>
            </template>
        </div>
        <div class="demo-list">
            <h3>对象-1</h3>
            <template v-for="(value, key, index) in objectTest">
                <p>index: {{index}}, key: {{key}}, value: {{value}}</p>
            </template>
        </div>
        <div class="demo-list">
            <h3>综合例子</h3>
            <input class="demo-input"  v-model="addText"
                    v-on:keyup.enter="addTextTodo"
                    placeholder="Add a todo">
            <ul>
                <li is="todo-item"
                    v-for="(todo, index) in todos"
                    v-bind:title="todo"
                    v-on:remove="removeText(index)"></li>
            </ul>
        </div>
    </div>
</template>


<style>

</style>


<script>
    import todoItem from '../components/todoItem.vue'

    export default{
        data(){
            return{
                helloMsg: 'hello',
                items: [
                    {name: 'zhangsan', age: 23},
                    {name: 'Eric', age: 24}
                ],
                objectTest: {
                    name: 'zhangsan',
                    age: 24,
                    say: 'I am zhangsan'
                },
                addText: '',
                todos: [
                    'zhangsan hahah',
                    'lishi haha'
                ]
            }
        },
        methods: {
            addTextTodo: function() {
                this.todos.push(this.addText);
                this.addText = '';
            },
            removeText: function(index) {
                this.todos.splice(index, 1)
            }
        },
        components: {
            'todo-item': todoItem
        }
    }
</script>
