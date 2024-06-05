<template>       
    <div class="files">
        <h3 class="files__h3" :class="{active: isActive}">{{ name }}</h3>        
        
        <FilesItem :filesArr="filesArr"></FilesItem>               

        <div class="files__more">
            Показать еще
        </div>
    </div><!-- files -->
</template>


<style lang="scss" src="./FilesList.scss"></style>

<script>
    import FilesItem from '../FilesItem/FilesItem.vue'
    
    export default {
        props: {
            name: {
                type: String,
                required: true
            },
            filesArr: {
                type: Array,
            },
            isActive: {
                type: Boolean,
            }
        },
        components: {
            FilesItem
        }
    }
</script>