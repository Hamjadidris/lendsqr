import './userComponent.scss'
import nextbtn from '../../assets/next btn.svg'
import prevbtn from '../../assets/prev btn.svg'

const Pagination = ({
  setCurrentPage,
  currentPage,
  usersPerPage,
  setUsersPerPage,
}: any) => {

    function setAmount (e:any):any{
        setUsersPerPage(e.target.value)
    }
  function nextPage() {
    if (currentPage < 100/usersPerPage) {
      setCurrentPage((prev: number) => prev + 1);
    }
  }
  function prevPage() {
    if (currentPage > 1) {
      setCurrentPage((prev: number) => prev - 1);
    }
  }

  return (
    <div className="pagination">
      <div className="postsAmount">
        <p>Showing</p>
        <select name="amount" onChange={setAmount}>
          <option value={10}>10</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
        <p>out of 100</p>
      </div>
      <div className='pageBtn'>
        <button onClick={prevPage}><img alt='prev' src={prevbtn}/></button>
        <button onClick={nextPage}><img alt='next' src={nextbtn}/></button>
      </div>
    </div>
  );
};

export default Pagination;
