<template>
    <div>
        <div class="demo-list" v-for="(item, index) in newItems">
            <h3 v-text="(+index+1) + '、' + item.title"></h3>
            <p>id: {{item.id}} ,date: {{item.date}}</p>
        </div>
        <button class="demo-action" @click="getNews">searchAll</button>
        <input class="demo-search-input" type="number" v-model="searchId" placeholder="place input searchID">
        <button class="demo-action" @click="getNewById">searchById</button>
        <input class="demo-search-input" type="number" v-model="deleteId" placeholder="place input deleteId">
        <button class="demo-action" @click="deleteById">deleteById</button>
        <input class="demo-search-input" type="text" v-model="addTitle" placeholder="place input add title">
        <button class="demo-action" @click="addNews">add</button>

    </div>
</template>
<style>
    .demo-action {
        width: 100%;
        line-height: 34px;
        border: 0;
        background: #e8e8e8;
        margin-top:5px;
    }

    .demo-search-input {
        width: 100%;
        line-height: 34px;
        border: 1px solid #e8e8e8;
        margin-top:5px;
    }
</style>
<script>

    export default{
        data(){
            return{
                newItems: [],
                searchId: '',
                deleteId: '',
                addTitle: ''
            }
        },
        mounted() {
            this.getNews();
        },
        methods: {
            addNews: function() {
                var addTitle = this.addTitle,
                    addTime = new Date();

                if(!addTitle) {
                    alert('请输入新增标题');
                    return false;
                }

                this.$http.post('/news', {
                    "title": addTitle,
                    "date": addTime
                }).then(function(response) {
                    // success
                    //console.log(response);

                   this.newItems.push(response.data);
                   this.addTitle = '';
                }, function(error) {
                    // error
                    console.log(error);
                })

            },
            getNews: function() {
                this.$http.get('/news')
                    .then(function(response) {
                        // success
                        console.log(response);

                        this.newItems = response.data;
                    }, function(error) {
                        // error
                        console.log(error);

                        this.newItems = [];
                    });
            },
            getNewById: function() {
                this.$http.get('/news', {params: {id: this.searchId}})
                    .then(function(response) {
                        // success
                        console.log(response);

                        this.newItems = response.data;
                    }, function(error) {
                        // error
                        console.log(error);

                        this.newItems = [];
                    });
            },
            deleteById: function() {
                this.$http.delete('/news/' + this.deleteId)
                    .then(function(response) {
                        // success
                        console.log(response);

                        this.newItems.splice((+this.deleteId-1), 1);
                        this.deleteId = '';
                    }, function(error) {
                        // error
                        console.log(error);

                        this.newItems = [];
                    });
            }
        },
        components:{

        }
    }
</script>
