import { isRouteErrorResponse } from "react-router";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			Contacts: []

		},
		actions: {
			getContacts: async () => {
				try {
					const response = await fetch("https://playground.4geeks.com/apis/fake/contact/agenda/Ema")
					if (response.ok) {
						const data = await response.json();
						let store = getStore();
						setStore({ ...store, Contacts: data });
						console.log(data)
					}
				}

				catch (error) {
					console.log("Algo salio mal", (error));
				}
			}
		}
	};
};

export default getState;
