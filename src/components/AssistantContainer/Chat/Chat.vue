<template>
    <div class="chat">
        <div class="chat__start-state hidden">
            <img src="../../../../assets/img-asistant.png" alt="">
            <p>Это чат с администратором. Ты можешь с ним пообщаться по любому вопросу о нашем сервисе и узнать о ходе работы</p>
        </div>

        <div class="talk">
            <div class="talk__date">
                Сегодня, 20:43
                <!-- todo сделать динамический вывод даты день время -->
            </div>
                
            <div class="talk__message talk__message--assistant">
                <img src="../../../../assets/assistant-photo.png" alt="">
                <div class="talk__message-text">
                    <p class="talk__message-p">Lörem ipsum suparad pepött då satsig och soskap metrosocial. Sapongar trenåvis i hypol innan visiskap, heterovybelt. Besav ditugen stenosade om exopagt.</p>
                    <div class="talk__data">
                        <span class="talk__assistant-name">Jim</span><span>20:43</span>
                        <!-- todo тут вывести динамически если асистент то имя и дату сообщения, если юзер то только дату -->
                    </div>
                </div> <!-- talk__message-text -->
            </div><!-- talk__message -->

            <UserMessage :text="text"></UserMessage>

        </div><!-- talk -->

        <ChatAction></ChatAction>
        <ChatForm></ChatForm>
    </div><!--chat -->
</template>


<style lang="scss" src="./Chat.scss"></style>

<script>
    import ChatAction from './../ChatAction/ChatAction.vue'
    import ChatForm from './../ChatForm/ChatForm.vue'
    import UserMessage from './../UserMessage/UserMessage.vue'

    export default {
        data() {
            return {
                text: 'Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров.'
            }
        },
        components: {
            ChatAction, ChatForm, UserMessage
        },
    }
</script>