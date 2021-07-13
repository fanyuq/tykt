<template>
    <div class="loading">
        <img src="../assets/img/loading.gif"  alt="">
        <van-loading class="loadingVant" vertical type="spinner">加载中...</van-loading>
    </div>
</template>

<script lang="ts">
    import {defineComponent, toRefs, reactive, onMounted} from 'vue';

    export default defineComponent({
        name: "",
        components: {},
        setup() {
            const reactiveData = reactive({});

            onMounted(() => {

            });

            return {
                ...toRefs(reactiveData),
            };
        },
    });
</script>
<style scoped>
    .loading{
        position: fixed;
        top:0;
        left:0;
        z-index:121;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.3);
        display: table-cell;
        vertical-align: middle;
        text-align: center;
    }
    .loading img{
        width: 1rem;
        height: 1rem;
        margin:7.5rem auto;
    }
    .loadingVant {
        margin:310px auto
    }
</style>
