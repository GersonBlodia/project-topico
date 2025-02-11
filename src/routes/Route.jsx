import { Outlet} from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';
export const RouteContent = () => {
  return (
    <main>
           <Sidebar/>
         <Outlet/>
    </main>
  )
}
