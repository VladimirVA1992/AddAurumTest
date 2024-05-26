<template>
    <form action="" class="form chat-form" @submit.prevent>
        <div class="form-group">
            <textarea class="chat-form__tex-area" name="" id="" placeholder="Введите сообщение для администратора" maxlength="295"></textarea>
        </div>

        <div class="form__group form__files">
            <label for="add-file"></label>
            <input type="file" id="add-file" class="chat-form__file-input">
        </div>
        <div class="form__group form__file-img">
            <label for="add-img"></label>
            <input type="file" id="add-img" class="chat-form__file-input">
        </div>

        <button type="submit" class="chat-form__btn" @click="sendMessageMedia('Запрос на вывод сообщения отправлен')"></button>
        <!-- todo по клику отправлять сообщение в чат, поидее нужно хранение истории переписки и добавление туда нового сообщения, само сообщени явно должно дити через обработчик с шаблонов вывода -->
    </form>

</template>


<style lang="scss" src="./ChatForm.scss" scoped></style>

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