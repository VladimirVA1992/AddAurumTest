<template>
    <div class="files-container">
        <h2>Файлы</h2>
        
        <div class="files-container__wraper">
            <div class="start-state hidden">
                <img src="../../../assets/img-file-folder.png" alt="">
                <p>Закажи у личного помощника медиаплан. Он появится в этом разделе</p>
            </div>

            <FilesList :name="mediaPlansTitle" :filesArr="$store.getters.getPlans" :isActive="isActive"></FilesList>
            <FilesList :name="reportsTitle" :filesArr="$store.getters.getReports"></FilesList>

        </div> <!-- files-container__wraper -->
    </div><!-- files-container -->
</template>


<style lang="scss" src="./FilesContainer.scss" scoped></style>

<script>
    import FilesList from './FilesList/FilesList.vue'

    export default {
        data() {
            return{
                mediaPlansTitle: 'Медиапланы',
                reportsTitle: 'Отчеты',
                isActive: true,
            }
        },
        components: {
            FilesList
        }, 
    }
</script>