<template>
    <Header></Header>
    <MainContent></MainContent>
    <Footer></Footer>
</template>

<style lang="scss" src="./App.scss"></style>

<script>
    import Header from '/src/components/Header/Header.vue';
    import Footer from '/src/components/Footer/Footer.vue';
    import MainContent from '/src/components/MainContent/MainContent.vue';

    export default {
        components: {
            Header, Footer, MainContent
        },
    }
</script>
