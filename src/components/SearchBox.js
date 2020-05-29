import React from 'react';

const SearchBox=({searchfield,SearchChange})=>{

return(
<div className="pa2">
<input className="pa2 ba b--blue bg-lightest-blue" type="Search" placeholder ="Search here...." onChange={SearchChange}/>
</div>
	);


}



export default SearchBox