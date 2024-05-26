<template>       
    <div class="files">
        <h3 class="files__h3 active">Медиапланы</h3>
        <!-- todo сделать кликабельным заголовок, свернуть развернуть список -->
        <!-- возможно имеет смысл сделать его компонентом -->
        
        <FilesItem :filesArr="filesArr"></FilesItem>  

        <div class="files__more">
            Показать еще
            <!-- todo сделать по клику подгрузку еще файлов -->
        </div>
    </div><!-- files -->
</template>


<style lang="scss" src="./Files.scss"></style>

<script>
    import FilesItem from '../FilesItem/FilesItem.vue'

    const mediaPlansArr = [

        {
            companyName: 'NewCompany',
            fileDate: '11/23',
            fileLoad: false,
            fileStatusTextDone: 'Медиаплан от 22.06.22 готов',
            fileStatusText: 'Медиаплан в процессе составления',
            fileNew: true,
        },
        {            
            companyName: 'NewCompany',
            fileDate: '01/23',
            fileLoad: true,
            fileStatusTextDone: 'Медиаплан от 1.06.22 готов',
            fileStatusText: 'Медиаплан в процессе составления',
            linkToLoad: '#', //тут должна быть ссылка на скачивание
            fileNew: false, // влияет на появление информационного окна
        },
        {            
            companyName: 'NewCompany',
            fileDate: '01/19',
            fileLoad: true,
            fileStatusTextDone: 'Медиаплан от 2.07.22 готов',
            fileStatusText: 'Медиаплан в процессе составления',
            linkToLoad: '#', 
            fileNew: false,
        },
        {            
            companyName: 'NewCompany',
            fileDate: '03/23',
            fileLoad: true,
            fileStatusTextDone: 'Медиаплан от 1.12.22 готов',
            fileStatusText: 'Медиаплан в процессе составления',
            linkToLoad: '#',
            fileNew: false,
        },
    ]
    // Подразумивается что эти данные мы получим из APi которое дернет данные из бэкэнда
    
    export default {
        data() {
            return {
                filesArr: mediaPlansArr,
            }
        },
        methods: {

        },
        components: {
            FilesItem
        }
    }
</script>