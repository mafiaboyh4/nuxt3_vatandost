<template>
    <div class="header-controller">
        <Head>
            <Title>داربست وطن دوست</Title>
            <Meta name="description" content="داربست وطن دوست" />
        </Head>
        <div class="controller a-center gap-2">
            <div class="logo-controller">
                <img src="@/assets/images/vatanlogo.png" >
            </div>
            <span class="tab-item active"> <i class="pi pi-caret-down"/> صفحه اصلی</span>
            <span class="tab-item"> <i class="pi pi-caret-down"/> وبلاگ</span>
            <span class="tab-item"> <i class="pi pi-caret-down"/> مطالب</span>
            <span class="tab-item"> <i class="pi pi-caret-down"/> تماس با ما</span>

        </div>
        <div class="controller  a-center">
            <div class="phone-controller">
                <span class="f-14 fw-b">تماس مستقیم</span>
                <i class="pi pi-phone"></i>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
            count: 0,
        })
    
        return {
            ...toRefs(state),
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/binder.scss';
.header-controller {
    @include Wrap;
    padding: 1.5rem;
    justify-content: space-around;
    align-items: center;
    gap: 1rem;
    .logo-controller {
        img {
            width: 65px;

        }
    }
    .tab-item {
        @include Cp();
        margin-right: 1rem;
        color: #9fa5c1;
        transition: .6s;
        position: relative;
        i {
            opacity: 0;
            position: absolute;
            transition: opacity 0.5s ease-in;
            color: #fc985c;
            top: -20px;
            right: 37%;
        }
        &.active , &:hover {
            i {
                opacity: 1;
            }
            color: $light_purple;
           
        }
    }

    .phone-controller {
        color: $text2;
        padding: .5rem;
        background: $dark2_purple;
        border: .25rem solid $dark2_purple;
        @include Cp;
        @include Row;
        gap: .5rem;
        border-radius: 20px;
        i {
            padding-top: .3rem;
        }
    }
}
</style>