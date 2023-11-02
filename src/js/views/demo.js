import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {

	const { store, actions } = useContext(Context);

	return (

		<div className="container">

			<li
				className="list-group-item d-flex justify-content-between">

					<Link to="/AddNewContact">

						<button className="btn btn-success" >
							Add new contact
						</button>

					</Link>

					<Link to="/ContactList">

						<button className="btn btn-success" >
							Contact list
						</button>

					</Link>			
						
			</li>
				
			<Link to="/">

				<button className="btn btn-primary">Back home</button>

			</Link>

		</div>
	);
};