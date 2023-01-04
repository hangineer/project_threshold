<template>
    <div class="header">
      <button type="button" class="btn" @click="backToHome">高雄景點列表</button>
      <!-- todo 加上fixed-top 彈出視窗的遮罩會有問題，加入z-index  -->
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <button type="button" class="btn navbar-brand fs-4" @click="backToHome">高雄景點列表</button>
          <div class="d-flex nav-tabs" id="navbarSupportedContent">
            <button class="btn" type="button">後台管理</button>
            <button class="btn" type="button">收藏列表</button>
            <button class="btn btn-outline-success" type="button" data-bs-toggle="modal" data-bs-target="#loginSignUp">登入/註冊</button>
          </div>
          <div class="modal fade" id="loginSignUp" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <ul class="nav nav-tabs">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#login">登入</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#signup">註冊</a>
                  </li>
                </ul>
                  <!-- <h5 class="modal-title" id="exampleModalLabel">/h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
                </div>
                <!-- 登入模式 -->
                <div id="login" class="modal-body text-start">
                  <div class="mb-3 row">
                  <label for="email" class="col-sm-2 col-form-label">Email: </label>
                    <div class="col-sm-10">
                      <input type="email" class="form-control" name="email" id="email" value="test@admin.com">
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <label for="password" class="col-sm-2 col-form-label">Password</label>
                      <div class="col-sm-10">
                        <input type="password" class="form-control" id="password">
                      </div>
                  </div>
                </div>
                <!-- 註冊模式 -->
                <div id="signup" class="modal-body text-start">
                  <div class="mb-3 row">
                  <label for="email" class="col-sm-2 col-form-label">Email: </label>
                    <div class="col-sm-10">
                      <input type="email" class="form-control" name="email" id="email">
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <label for="password" class="col-sm-2 col-form-label">Password</label>
                      <div class="col-sm-10">
                        <input type="password" class="form-control" id="password">
                      </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                  <button type="button" class="btn btn-primary">登入</button>
                  <button type="button" class="btn btn-primary">註冊</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
</template>
  
<script>
export default{
  data(){
    return{
     
    }
  },
  methods:{
    loginMode(){
      return true;
    },
    signupMode(){
      return false;
    },
    // todo push is undefined
    backToHome(){
    return this.$router.push({path:'/'});
    }
  }
}
</script>
<style scoped>
/* #loginSignUp{
  z-index: 100;
} */
</style>
  