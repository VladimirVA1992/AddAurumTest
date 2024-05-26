<template>
    <div class="chatAction">
        <button class="btn btn--pink" @click="sendMessageMedia('Запрос на медиаплан отправлен, мы скоро с вами свяжемся')">Заказать медиаплан</button>
        <button class="btn btn--blue" @click="sendMessageMedia('Запрос на отчет отправлен, мы скоро с вами свяжемся')">Заказать отчет</button>
    </div>  
</template>


<style lang="scss" src="./ChatAction.scss" scoped></style>

<script>

    let addMessage = ( text) => {
        return new Promise(function(resolve, reject) {
            const talk = document.querySelector('.talk')
            const message = document.querySelector(".talk__message-p").cloneNode(1);
            message.textContent = text
            message.style.textAlign = 'center'
            message.style.marginTop = '20px'
            setTimeout(() => resolve("done", talk.appendChild(message)), 1000);                   
        })
    } 

    export default {
        methods: {
            async sendMessageMedia(text) {
                await addMessage(text)
            }
        }
    }
</script>