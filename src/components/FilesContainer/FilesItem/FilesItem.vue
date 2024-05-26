<template>
    <div class="files__wrap" v-for="item in filesArr">
        <div class="files__item">
            <div class="files__item-wrap">
                <img src="../../../../assets/img-file-format.svg"  alt="" class="files__item-file-format">
                <div class="files__item-name">{{ item.companyName + ' ' + item.fileDate}}</div>
                <div class="files__item-load">                    
                    <a :href="item.linkToLoad">
                        <img src="../../../../assets/img-ready-to-load.svg" alt="" v-if="item.fileLoad" class="files__item-readiness">
                        <img src="../../../../assets/img-not-ready-to-load.svg" alt="" v-else class="files__item-readiness">
                    </a>
                    
                </div>
            </div>
            <div v-if="item.fileNew">
                <div class="files__status" v-if="item.fileLoad">                
                    <img src="../../../../assets/file-loaded.svg" alt=""  class="files__status-icon">
                    <div class="files__status-text">{{ item.fileStatusTextDone }}</div> 
                </div>               
                <div class="files__status" v-else>
                    <img src="../../../../assets/file-unloaded.svg" alt=""  class="files__status-icon">
                    <div class="files__status-text">{{ item.fileStatusText }}</div>
                </div>
            </div>
        </div><!-- files__item -->
    </div>
</template>


<style lang="scss" src="./FilesItem.scss" scoped></style>

<script>
    export default {
        props: {
            filesArr: {
                type: Array,                
            }
        }
    }
</script>
