<template>
    <div>
        <a href="javascript:;" @click="$store.commit('switch_dialog')">点击</a>
        <p>{{msg}}</p>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                msg: "我是dialog组件"
            }
        }
    }
</script>