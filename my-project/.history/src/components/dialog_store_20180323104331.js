<template>
    <p v-bind="$store.state.dialog.show">我是dialog_store对象</p>
</template>
export default {
    state:{
        show:false
    },
    mutations:{
        switch_dialog(state){//这里state对应着上面这个state
            state.show = state.show ? false:true;

        }
    }
}