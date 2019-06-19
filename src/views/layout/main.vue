<template>
    <div class="full-box main-layout">
        <div class="container header clear">
            <div class="logo fl">
                logo
            </div>


            <div class="user fr">

                <el-dropdown>
                    <div class="face-box">
                        <div class="user-face"></div>
                        <div class="user-name">millent</div>
                    </div>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>设置</el-dropdown-item>
                        <el-dropdown-item>more</el-dropdown-item>
                        <el-dropdown-item>more</el-dropdown-item>
                        <el-dropdown-item>退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>

            </div>

            <div class="menu fr">
                <div class="menu-item">
                    <a href="">菜单1</a>
                    <a href="">菜单2</a>
                    <a href="">菜单5</a>
                </div>
            </div>


        </div>

        <div class="main-content">
            <div class="tool-bar">
                <el-menu
                        :default-active="activeRouter"
                        @select="menuOpen"
                        >
                    <el-menu-item index="setting">
                        <i class="el-icon-menu"></i>
                        <span slot="title">设置</span>
                    </el-menu-item>
                    <el-menu-item index="about">
                        <i class="el-icon-menu"></i>
                        <span slot="title">关于</span>
                    </el-menu-item>
                </el-menu>
            </div>

            <div class="show-content">
                <router-view></router-view>
            </div>
        </div>

    </div>
</template>

<script>

  export default {
    name: "layout-main",
    data(){
      return {
        activeRouter: 'setting'
      }
    },
    methods: {
      menuOpen(path){
        this.$router.push({
          path: path
        })
      }
    },
    watch: {
      '$route'(newValue){
        this.activeRouter = newValue.name
      }
    }
  }
</script>

<style lang="scss">
    @import "../../assets/scss/main-layout";
</style>