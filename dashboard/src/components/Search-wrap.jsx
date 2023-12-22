import './Search-wrap.css'
 function SearchWrape (){
  
    return (
        <>
        <aside className="search-wrap">
        <div className="search">
          <label htmlFor="search">
            <i className="bi bi-search iconStyle" ></i>
            <input type="text" id="search" />
          </label>
        </div>
  
        <div className="user-actions">
          <button>
            <a href="#">
              <i className="bi bi-person-add iconStyle" ></i>
            </a>
          </button>
          <button>
            <a href="#">
              <i className="bi bi-person iconStyle" ></i>
            </a>
          </button>
          <button>
            <a href="#">
              <i className="bi bi-box-arrow-right iconStyle" ></i>
            </a>
          </button>
        </div>
      </aside>
      </>
    );
  }
 export default SearchWrape