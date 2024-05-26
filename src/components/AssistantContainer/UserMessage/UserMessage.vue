<template>
        <div class="talk__message talk__message--user">
            <div class="talk__message-text">
                <p class="talk__message-p">{{ text }}</p>
                <div class="talk__data talk__data--user">
                    <span class="talk__assistant-name">Jim</span><span>20:43</span>
                    <!-- todo тут вывести динамически если асистент то имя и дату сообщения, если юзер то только дату -->
                </div>
            </div>
        </div>
</template>

<style lang="scss" src="./UserMessage.scss"></style>

<script>
    export default {

        props: {
            text: {
                type: String,
            }
        }
    }
</script>