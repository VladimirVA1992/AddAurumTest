<template>
    <div class="files-container">
        <h2>Файлы</h2>
        
        <div class="files-container__wraper">
            <div class="start-state hidden">
                <img src="../../../assets/img-file-folder.png" alt="">
                <p>Закажи у личного помощника медиаплан. Он появится в этом разделе</p>
            </div>

            <Files></Files>
            <Reports></Reports>
        </div> <!-- files-container__wraper -->
    </div><!-- files-container -->
</template>


<style lang="scss" src="./FilesContainer.scss" scoped></style>

<script>
    import Files from './Files/Files.vue'
    import Reports from './Reports/Reports.vue'

    export default {
        components: {
            Files, Reports
        }, 
    }
</script>