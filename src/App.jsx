import SideBar from './components/SideBar'
import { Outlet } from 'react-router-dom'
//import { useDispatch, useSelector } from 'react-redux'
//import { increment } from './stores/taskSlice'

function App() {
    /*
    const tasksStore = useSelector((state) => state.tasksStore)
    const dispatch = useDispatch()
 */
    return (
        <div className="flex h-screen w-screen flex-row">
            <SideBar />
            <Outlet />
        </div>
    )
}

export default App
