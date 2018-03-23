<template>
    <p v-bind="$store.state.dia">我是dialog_store对象</p>
</template>
export default {
    state:{
        show:false
    }
}