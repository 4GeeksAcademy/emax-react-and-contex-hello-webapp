import React, { useContext } from 'react'
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/ContactList.css"

const CallContactList = () => {

  const { store, actions } = useContext(Context);

  console.log(store.Contacts);

  return (

    <div>

      {store.Contacts.map((item, index) => (

        <div key={index} class="card mb-3" style={{ maxWidth: "540px" }}>
          <div class="row g-0">
            <div class="col-md-4">
              <img src="..." class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{item.full_name}</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div>

      ))}

      <Link to="/">

        <button className="btn btn-primary">Back home</button>

      </Link>

    </div>
  )
}

export default CallContactList