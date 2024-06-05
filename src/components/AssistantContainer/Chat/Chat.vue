<template>
    <div class="chat">
        <div class="chat__start-state hidden">
            <img src="../../../../assets/img-asistant.png" alt="">
            <p>Это чат с администратором. Ты можешь с ним пообщаться по любому вопросу о нашем сервисе и узнать о ходе работы</p>
        </div>

        <div class="talk">
            <div class="talk__date">
                <DynamicDate></DynamicDate>
            </div>

            <Messages :messages="$store.getters.getMessages"></Messages>
        </div>

        <ChatAction></ChatAction>
        <ChatForm></ChatForm>
    </div><!--chat -->
</template>


<style lang="scss" src="./Chat.scss"></style>

<script>
    import ChatAction from './../ChatAction/ChatAction.vue'
    import ChatForm from './../ChatForm/ChatForm.vue'
    import Messages from './../Messages/Messages.vue'
    import DynamicDate from '../../DynamicDate/DynamicDate.vue';

    export default {
        components: {
            ChatAction, ChatForm, Messages, DynamicDate
        },        
    }
</script>