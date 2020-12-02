<template>
   <div id="error_404">
      <section class="page-section">
         <div class="full-width-screen">
            <div class="container-fluid p-0">
               <div class="particles-bg" id="particles-js">
                  <div class="content-detail">
                     <h2 class="global-title">
                        <span>4</span>
                        <span>0</span>
                        <span>4</span>
                     </h2>
                     <h4 class="sub-title">Error!</h4>
                     <p class="detail-text">Sorry,This page does not exist!</p>
                     <div class="back-btn">
                        <div
                           class="btn"
                           @click="$router.push({ name: 'index' })"
                        >
                           Back to Home
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   </div>
</template>
<script>
import particlesJs from "particles.js";
import particlesConfig from "./particles.json";
export default {
   name: "Page404",
   methods: {
      changeOpenId() {
         this.$store.commit("CHANGEOPENID", { openID: "1002107636" });
      },
      handleGo() {
         this.$router.push("/auth/1232");
      },
      init() {
         particlesJS("particles-js", particlesConfig);
         document.body.style.overflow = "hidden";
      },
   },
   mounted() {
      this.init();
   },
};
</script>

<style>
#error_404 {
   position: fixed;
   width: 100vw;
   height: 100vh;
   z-index: 9;
   background-color: white;
}
.title_404 {
   padding: 14vh;
   text-align: center;
   font-size: 2rem;
}
.page-section .particles-bg {
   height: 100vh;
   background-image: url("./../../assets/background-1.jpg");
   background-size: 100% 100%;
   background-repeat: no-repeat;
   background-position: center;
   background-blend-mode: overlay;
   background-color: rgba(0, 0, 0, 0.85);
}
.page-section .particles-bg .particles-js-canvas-el {
   position: absolute;
}
.page-section .content-detail {
   margin: auto;
   max-width: 450px;
   height: 100vh;
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
}
.page-section .content-detail .sub-title,
.page-section .content-detail .detail-text {
   display: block;
   color: #fff;
   text-align: center;
   -webkit-touch-callout: none;
   -webkit-user-select: none;
   -khtml-user-select: none;
   -moz-user-select: none;
   -ms-user-select: none;
   user-select: none;
}
.page-section .content-detail .sub-title {
   margin-bottom: 15px;
   font-weight: 600;
   font-size: 30px;
}
.page-section .content-detail .global-title {
   display: block;
   color: #fff;
   font-size: 120px;
   font-weight: 800;
   opacity: 0.8;
   padding: 0 1vw;
   -webkit-touch-callout: none;
   -webkit-user-select: none;
   -khtml-user-select: none;
   -moz-user-select: none;
   -ms-user-select: none;
   user-select: none;
}
.page-section .content-detail .global-title span {
   animation: animateblur 1s linear forwards;
}
.page-section .content-detail .global-title span:nth-child(1) {
   animation-delay: 1s;
}
.page-section .content-detail .global-title span:nth-child(2) {
   animation-delay: 2s;
}
.page-section .content-detail .global-title span:nth-child(3) {
   animation-delay: 3s;
}
@keyframes animateblur {
   0% {
      opacity: 0;
      filter: blur(10px);
   }
   100% {
      opacity: 1;
      filter: blur(0px);
   }
}
.page-section .content-detail .back-btn {
   margin-top: 15px;
   z-index: 5;
}
.page-section .content-detail .back-btn .btn {
   padding: 8px 15px;
   color: #fff;
   border: 1px solid #fff;
   border-radius: 30px;
   font-size: 14px;
}
.page-section .content-detail .back-btn .btn:hover {
   background-color: #5076db;
   color: #fff;
}

/*# sourceMappingURL=error-page.css.map */
</style>
