
<template>
    <div>
        <div
          class="nuxt-progress"
        ></div>
        <div class="container" >
            <div class="flex">
                <div class="loader">
                </div>
            </div>
            <div class="load-text">
                در حال بارگذاری...
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/colors';
.nuxt-progress {
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  width: 0%;
  opacity: 1;
  transition: width 0.1s, height 0.4s, opacity 0.4s;
  background: repeating-linear-gradient(
    to right,
    #00dc82 0%,
    #34cdfe 50%,
    #0047e1 100%
  );
  z-index: 999999;
}
  .container {
    width: 100vw;
    max-width: 100% !important;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: $card;
    color: $text;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    align-content: center;
    z-index: 1000;

  }
  
  .flex {
    min-height: 60pt;
  }
  
  @keyframes loading {
    0% {
      width: 50pt;
      height: 50pt;
      margin-top: 0;
    }
    25% {
      height: 4pt;
      margin-top: 23pt;
    }
    50% {
      width: 4pt;
    }
    75% {
      width: 50pt;
    }
    100% {
      width: 50pt;
      height: 50pt;
      margin-top: 0;
    }
  }
  
  .loader {
    width: 50pt;
    height: 50pt;
    border-radius: 100%;
    border: $green 4pt solid;
    margin-left: auto;
    margin-right: auto;
    background-color: transparent;
    animation: loading 1s infinite;
  }
  
  .load-text {
    padding-top: 15px;
    text-align: center;
    font-size: 1.1rem;
    color: $text;
  }
</style>
