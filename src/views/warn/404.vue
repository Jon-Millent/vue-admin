<template>
    <div class="page-404">
        <div class="icon-big">
            <span class="el-icon-error"></span>
        </div>
        <h1>404-页面未找到</h1>
        <p class="des">{{time}}秒后返回上一页 <a href="javascript:;" @click="back">立即返回</a></p>
    </div>
</template>

<script>
    export default {
        name: "404",
        data() {
            return {
                ev: null,
                time: 2
            }
        },
        methods: {
          back() {
              this.$router.back()
          }
        },
        mounted() {
            this.ev = setInterval(()=>{
                this.time--
                if(this.time <= 0) {
                    this.back()
                    clearInterval(this.ev)
                }
            }, 1000)
        },
        beforeDestroy() {
            clearInterval(this.ev)
        }
    }
</script>

<style lang="scss">
    .page-404 {
        text-align: center;
        .icon-big {
            padding-top: 40px;
            font-size: 80px;
            color: #42b983;
        }
        h1 {
            color: #2c9264;
            font-size: 20px;
        }
        .des {
            padding-top: 10px;
            font-size: 16px;
            color: #333;
            a {
                color: #2c9264;
                text-decoration: underline;
            }
        }
    }
</style>
