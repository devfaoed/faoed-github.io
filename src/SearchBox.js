function SearchBox({searchfield, searchChange}){
    return(
        <div className="pa2">
            <input 
            type="search" placeholder="search roborts" className=" bg-lightest-blue pa3 ba b--green" 
            onChange={searchChange} />

        </div>
    );
}

export default SearchBox;