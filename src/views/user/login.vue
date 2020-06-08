<template>
    <div class="page-login">
        <div class="main-box">
            <div class="form type-input">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="用户名">
                        <el-input maxlength="1000" v-model="form.username"></el-input>
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input maxlength="100" v-model="form.password"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary">登录</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                form: {
                    username: '',
                    password: ''
                }
            }
        }
    }
</script>

<style lang="scss">
    .page-login {
        .main-box {
            width: 600px;
            height: 400px;
            border: 1px solid rgba(3, 3, 3, 0.8);
            background-color: #F5F5F5;
            border-radius: 6px;
            box-shadow: 2px 2px 4px rgba(0, 0, 0, .2);
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translateX(-50%) translateY(-60%);

            .type-input {
                padding-top: 70px;
            }
            .type-input .el-form {
                width: 500px;
                margin: 0 auto;
            }
        }
    }
</style>
