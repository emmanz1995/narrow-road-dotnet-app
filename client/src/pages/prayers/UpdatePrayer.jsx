import React from 'react';

function UpdatePrayer() {
    return (
        <div className="create-prayer-container">
            <form>
                <input className="input-field" type="text" name="title" placeholder="Title" />
                <textarea className="input-field" name="description" placeholder="Description" cols="30" rows="20" />
            </form>
        </div>
    );
}

export default UpdatePrayer;
