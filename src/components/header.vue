<template>
    <div class="header">
        <ul class="header-nav">
            <li><router-link to="/first">第一个页面</router-link></li>
            <li><router-link to="/second">第二个页面</router-link></li>
        </ul>
    </div>
</template>

<style lang="sass">
    .header {
        text-align: center;

        &-nav {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            line-height: 44px;
            & li {
                flex: 1;
            }
        }
    }

</style>

