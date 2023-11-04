import React from 'react'
import { Link } from "react-router-dom";
import "../../styles/AddNewContact.css"

const CallAddNewContact = () => {
  return (

    <div>

      <div className="addContainer">

        <div class="mb-3">
          <label for="formGroupExampleInput" class="form-label">Full name:</label>
          <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Full name" />
        </div>
        <div class="mb-3">
          <label for="formGroupExampleInput2" class="form-label">Email:</label>
          <input type="email" class="form-control" id="formGroupExampleInput2" placeholder="Enter email" />
        </div>
        <div class="mb-3">
          <label for="formGroupExampleInput" class="form-label">Phone:</label>
          <input type="number" class="form-control" id="formGroupExampleInput" placeholder="Enter phone" />
        </div>
        <div class="mb-3">
          <label for="formGroupExampleInput2" class="form-label">Adress:</label>
          <input type="email" class="form-control" id="formGroupExampleInput2" placeholder="Enter adress" />
        </div>

      </div>

      <div className="d-grid gap-2">
        <button className="btn btn-primary large-buttom" type="button">Save</button>
      </div>

      <div class="butons">

        <Link to="/demo">

          <i class="fa-regular fa-circle-left fa-2xl" style={{ color: "#3cadc3" }}></i>

        </Link>

        <Link to="/">

          <button className="btn btn-primary">Back home</button>

        </Link>

      </div>

    </div>
  )
}

export default CallAddNewContact