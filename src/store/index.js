import { createStore } from "vuex";

export default createStore({
	state: () => ({
		messages: [
			{
				type: "assistant",
				text: "Lörem ipsum suparad pepött då satsig och soskap metrosocial. Sapongar trenåvis i hypol innan visiskap, heterovybelt. Besav ditugen stenosade om exopagt.",
				cssClass: "talk__message--assistant",
				id: "1",
				messageMarkTime: "23:40",
			},
			{
				type: "user",
				text: "Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров.",
				cssClass: "talk__message--user",
				id: "2",
				messageMarkTime: "23:43",
			},
		],
		dataTalk: new Date("June 3, 2024"), // для проверки изменения даты можно поменять дату на текущую и получить вариант "сегодня"
		mediaPlans: [
			{
				companyName: "NewCompany",
				fileDate: "11/23",
				fileLoad: false,
				fileStatusTextDone: "Медиаплан от 22.06.22 готов",
				fileStatusText: "Медиаплан в процессе составления",
				fileNew: true,
			},
			{
				companyName: "NewCompany",
				fileDate: "01/23",
				fileLoad: true,
				fileStatusTextDone: "Медиаплан от 1.06.22 готов",
				fileStatusText: "Медиаплан в процессе составления",
				linkToLoad: "#", //тут должна быть ссылка на скачивание
				fileNew: false, // влияет на появление информационного окна
			},
			{
				companyName: "NewCompany",
				fileDate: "01/19",
				fileLoad: true,
				fileStatusTextDone: "Медиаплан от 2.07.22 готов",
				fileStatusText: "Медиаплан в процессе составления",
				linkToLoad: "#",
				fileNew: false,
			},
			{
				companyName: "NewCompany",
				fileDate: "03/23",
				fileLoad: true,
				fileStatusTextDone: "Медиаплан от 1.12.22 готов",
				fileStatusText: "Медиаплан в процессе составления",
				linkToLoad: "#",
				fileNew: false,
			},
		],
		reports: [
			{
				companyName: "Companyname",
				fileDate: "11/23",
				fileLoad: false,
				fileStatusTextDone: "Отчет от 1.06.22 готов",
				fileStatusText: "Отчет формируется",
				fileNew: true,
			},
			{
				companyName: "NewCompany",
				fileDate: "01/23",
				fileLoad: true,
				fileStatusTextDone: "Отчет от 1.06.22 готов",
				fileStatusText: "Отчет формируется",
				linkToLoad: "#",
				fileNew: false,
			},
			{
				companyName: "NewCompany",
				fileDate: "01/19",
				fileLoad: true,
				fileStatusTextDone: "Отчет от 2.07.22 готов",
				fileStatusText: "Отчет формируется",
				linkToLoad: "#",
				fileNew: false,
			},
		],
	}),

	getters: {
		getMessages(state) {
			return state.messages;
		},
		getPlans(state) {
			return state.mediaPlans;
		},
		getReports(state) {
			return state.reports;
		},
	},

	mutations: {
		addMessage(state, message) {
			state.messages.push(message);
		},
	},

	actions: {
		sendMessage({ commit }, payload) {
			setTimeout(() => commit("addMessage", payload), 1000);
		},
	},
});
