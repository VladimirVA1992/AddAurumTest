<template>
    <div class="files">
        <h3 class="files__h3">Отчеты</h3>
        <!-- todo сделать кликабельным заголовок, свернуть развернуть список -->
        <!-- возможно имеет смысл сделать его компонентом -->

        <FilesItem :filesArr="filesArr"></FilesItem>

        <div class="files__more">
            Показать еще
            <!-- todo сделать по клику подгрузку еще файлов -->
        </div>
    </div><!-- files -->   
</template>


<style lang="scss" src="./Reports.scss"></style>

<script>
    import FilesItem from '../FilesItem/FilesItem.vue'

    const reportsArr = [
        {
            companyName: 'Companyname',
            fileDate: '11/23',
            fileLoad: false,
            fileStatusTextDone: 'Отчет от 1.06.22 готов',
            fileStatusText: 'Отчет формируется',            
            fileNew: true,
        },
        {            
            companyName: 'NewCompany',
            fileDate: '01/23',
            fileLoad: true,
            fileStatusTextDone: 'Отчет от 1.06.22 готов',
            fileStatusText: 'Отчет формируется', 
            linkToLoad: '#', //тут должна быть ссылка на скачивание
            fileNew: false, // влияет на появление информационного окна
        },
        {            
            companyName: 'NewCompany',
            fileDate: '01/19',
            fileLoad: true,
            fileStatusTextDone: 'Отчет от 2.07.22 готов',
            fileStatusText: 'Отчет формируется', 
            linkToLoad: '#', 
            fileNew: false,
        }
    ]

    export default {
        data() {
            return {
                filesArr: reportsArr,
            }
        },
        methods: {
        },
        components: {
            FilesItem
        }
    }
</script>