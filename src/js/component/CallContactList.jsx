import React, { useContext, useEffect } from 'react'
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import style from './CallContactList.module.css';

const CallContactList = () => {

  const { store, actions } = useContext(Context);

  console.log(store.Contacts);
  useEffect(() => {
    actions.getContacts();
  }, [])

  return (

    <div className={style.body}>

      {store.Contacts.map((item, index) => (

        <div key={index} className="card mb-3" style={{ maxWidth: "540px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src="..." className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{item.full_name}</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
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