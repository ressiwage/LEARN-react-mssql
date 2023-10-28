import React, { useState } from "react";

function Search(props) {
  const [value, setValue] = useState('');

  function handleclick(val) {
    setValue(val);
    props.onchange(val);
  }

  return (
    <div class="Search">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Recipient's username" onChange={event => handleclick(event.target.value)} value={value} aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
        <span class="material-symbols-outlined" >search</span> 
        </div>
    </div>
  );
}

export default Search;
