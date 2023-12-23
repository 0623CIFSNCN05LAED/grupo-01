import './Dashboard.css'
import SearchWrap from './Search-wrap'
import MenuWrap  from './Menu-wrap'
import ContentWrap from './Content-wrap'


function Dashboard(){
    return (
    <div className="dashboard">
        <SearchWrap/>
        <MenuWrap/>
        <ContentWrap/>
    </div>
    )
}
export default Dashboard