<template>
    <div class="assistant">
        <div class="assistant__head">
            <h2 class="assistant__h2">Личный помощник</h2>
            <div class="assistant__settings">
                <div class="assistant__name">
                    Jim Davidson
                </div>
                <div class="assistant__mail">
                    Jim Davidson@adaurum.ru
                </div>
                <div class="assistant__settings-action" @click="openMenu">
                    <img src="../../../assets/img-settings.svg" alt="">
                    <div class="assistant__settings-options">
                        <a class="assistant__settings-option">
                            Обратная связь о работе сервиса
                        </a>
                        <a class="assistant__settings-option">
                            Сменить помощника
                        </a>
                    </div> <!-- assistant__settings-options -->
                </div><!-- assistant__settings-action -->
            </div><!-- assistant__settings -->
        </div><!-- assistant__head -->

        <Chat></Chat>

    </div><!-- assistant -->
</template>


<style lang="scss" src="./AssistantContainer.scss" scoped></style>

<script>
    import Chat from './Chat/Chat.vue'

    export default {
        components: {
            Chat, 
        },
        methods: {
            openMenu() {
                const menu = document.querySelector('.assistant__settings-options')
                menu.classList.toggle('active')
            }
        }
    }
</script>