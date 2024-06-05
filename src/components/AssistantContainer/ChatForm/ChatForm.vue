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

        <button type="submit" class="chat-form__btn" @click="$store.dispatch('sendMessage', {type: 'support', text: 'Запрос на вывод сообщения отправлен', cssClass: 'talk__message--support', id: Date.now()})"></button>
    </form>

</template>


<style lang="scss" src="./ChatForm.scss" scoped></style>

<script>
    export default {

    }
</script>