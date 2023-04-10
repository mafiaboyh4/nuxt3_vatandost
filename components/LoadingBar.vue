<template>
  <div>
    <div class="container" v-if="loading">
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
  
  <script>
  export default {
    data: () => ({
      loading: false,
    }),
    methods: {
      start() {
        this.loading = true
      },
      finish() {
        this.loading = false
      },
    },
  }
</script>
  
  
  <style lang="scss" scoped>
  @import '@/assets/styles/colors';
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
    background-image: url('/static/img/bg-landing.png');
    background-position: top;
    background-size: contain;
    background-repeat: no-repeat;
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
  