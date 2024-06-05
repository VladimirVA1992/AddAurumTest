<template>
    <div class="date">
        <div v-if="$store.state.dataTalk.getDate() !== date.getDate()" class="date__wrapper">
            <div class="day">{{ formatDate.day}}</div>
            <div class="month"><span>&nbsp;{{ formatDate.month }},</span></div>
        </div>
        <div v-else>Cегодня</div>
        <div class="hours"><span>&nbsp;</span>{{ String(formatDate.hours).length < 2 ? `0${formatDate.hours}` :  formatDate.hours }}</div>
        <div class="minutes">:{{ String(formatDate.minutes).length < 2 ? `0${formatDate.minutes}` :  formatDate.minutes }}</div>
    </div>
</template>

<style lang="scss" src="./DynamicDate.scss" scoped></style>

<script> 
    export default {
        data() {
            return {                
                formatDate: {
                    day: 0,
                    hours: 0,
                    month: '',
                    minutes: 0,
                },
                date: new Date(),
                monthShortNames: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн",
                "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"
                ]
            }
        },
        methods: {
            getCurrentDate() {
                let nextDate = {
                    day: this.date.getDate(),
                    hours: this.date.getHours(),
                    month: this.monthShortNames[this.date.getMonth()],
                    minutes: this.date.getMinutes(),
                }

                return this.formatDate.day = nextDate.day,
                        this.formatDate.month =  nextDate.month,
                        this.formatDate.hours =  nextDate.hours,
                        this.formatDate.minutes =  nextDate.minutes
            }
        },
        created() {            
            this.getCurrentDate() // этот вызов чтобы дата сразу была при первом рендере
            this.intervalId = setInterval(() => this.date = new Date(), 1000);
            this.intervalFormat = setInterval(() => this.getCurrentDate(), 1000);
        },
    }   
</script>