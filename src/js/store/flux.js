import { isRouteErrorResponse } from "react-router";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			Contacts: [],
			FormData: {

			}


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
			},
			addContact: async (data) => {
				const actions = getActions();
				try {

					const response = await fetch("https://playground.4geeks.com/apis/fake/contact", {
						method: "Post",
						body: JSON.stringify(data),
						headers: {
							"Content-Type": "application/json"
						}

					})

					console.log("respueta", response)

					if (response.ok) {
						actions.getContacts();
						alert("contacto creado con exito")
					} else {
						alert("error al crear contacto")
					}



				}
				catch (error) {

					console.log("aca esta el error", error)

				}

			}
		}
	};
};

export default getState;
