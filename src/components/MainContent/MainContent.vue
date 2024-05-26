<template>
    <main>
        <section>
            <div class="container">
                <div class="main-content">
                    <FilesContainer></FilesContainer>
                    <AssistantContainer></AssistantContainer>
                </div>
            </div>
        </section>
    </main>    
</template>


<style lang="scss" src="./MainContent.scss" scoped></style>

<script>
    import FilesContainer from '../FilesContainer/FilesContainer.vue'
    import AssistantContainer from '../AssistantContainer/AssistantContainer.vue'

    export default {
        components: {
            FilesContainer, AssistantContainer
        }, 
    }
</script>