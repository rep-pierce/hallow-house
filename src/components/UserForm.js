import React, { useState } from "react";

function UserForm({handleSubmit, handleName, handleImage, image, name}){
  return (
    <div className="container">
      <form className="avatarForm" onSubmit={handleSubmit}>
        <h3 style={{color: "white", fontSize: "50px"}}>Create Your Own Avatar</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a Avatar's name..."
          className="text"
          value={name}
          onChange={handleName}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a Avatar's image URL..."
          className="text"
          value={image}
          onChange={handleImage}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Avatar"
          className="submit"
        />
      </form>
    </div>
  );
}

export default UserForm;