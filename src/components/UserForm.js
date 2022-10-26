import React from "react";

function UserForm(){
    return (
        <div className="container">
          <form className="userForm" onSubmit={handleSubmti}>
            <h3>Add Username!</h3>
            <input
              type="text"
              name="name"
              placeholder="Enter Username..."
              className="input-text"
              value={name}
              onChange={handleName}
            />
            <input
              type="submit"
              name="submit"
              value="Start Playing"
              className="submit"
            />
          </form>
        </div>
      );
}

export default UserForm