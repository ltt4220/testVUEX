<template>
    <p v-bind="$store.state">我是dialog_store对象</p>
</template>
export default {
    state:{
        show:false
    }
}