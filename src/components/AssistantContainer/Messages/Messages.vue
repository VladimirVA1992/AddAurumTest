<template>
    <div class="talk__message-wrapper" v-for="message in messages" :key="message.id">
        <div class="talk__message" :class="message.cssClass">
            <img src="../../../../assets/assistant-photo.png" alt="" class="talk__assistant-photo">
            <div class="talk__message-text">
                <p class="talk__message-p">{{ message.text }}</p>
                <div class="talk__data">
                    <span class="talk__assistant-name">Jim</span><span class="talk__time">{{ message.messageMarkTime }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" src="./Messages.scss"></style>

<script>
    export default {
        props: {
            messages: {
                type: Array,
            }
        }
    }
</script>