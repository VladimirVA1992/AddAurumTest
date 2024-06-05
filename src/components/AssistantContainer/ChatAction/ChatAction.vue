<template>
    <div class="chatAction">
        <button class="btn btn--pink" @click="$store.dispatch('sendMessage', {type: 'support', text: 'Запрос на медиаплан отправлен, мы скоро с вами свяжемся', cssClass: 'talk__message--support', id: Date.now()})">Заказать медиаплан</button>
        <button class="btn btn--blue" @click="$store.dispatch('sendMessage', {type: 'support', text: 'Запрос на отчет отправлен, мы скоро с вами свяжемся', cssClass: 'talk__message--support', id: Date.now()})">Заказать отчет</button>
    </div>  
</template>


<style lang="scss" src="./ChatAction.scss" scoped></style>

<script>
    export default {
 
    }
</script>