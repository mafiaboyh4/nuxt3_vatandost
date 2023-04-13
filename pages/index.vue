<template>
        <NuxtLayout >
            <div class="container">
                <section>
                <div class="controller a-center w-100 gap-0">

                        <div class="col-md-6">
                            <div class="child gap-2">
    
                                <h1 class="f-28" >داربست <span class="text-1">وطن دوست</span></h1>
                                <p class="gray">علی وطن دوست پیشگام در حوضه داربست با بیش از 15 سال تجربه عملی خدمت گذار شما عزایزان می باشد</p>
                                <div class="controller">
                                    <Button label="ثبت سفارش" class="btn-style-1" />
                                    <Button class="btn-style-2" >
                                        <div class="controller flex-row">
                                            <i class="pi pi-phone"></i>
                                            <span>تماس با ما</span>
                                        </div>
                                </Button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 d-none d-md-block">
                            <img class="w-100" src="@/static/images/landing1.png"  />
                        </div>
                    </div>
                </section>
            </div>

                
        </NuxtLayout>
</template>

<script lang="ts">
export default {
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>