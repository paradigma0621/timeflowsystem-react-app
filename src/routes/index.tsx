import { cloneElement, lazy, useMemo } from 'react'
import { Navigate, RouteObject, useLocation, useRoutes } from 'react-router-dom'
import StringDataComponent from '../components/StringDataComponent';
import PersonList from '../components/PersonList';
import FormularySavePerson from '../components/FormularySavePerson';


//import { PersonRoutes, WorkplaceRoutes } from './featureRoutes'

//const DeskDashboard = lazy(() => import('features/desk/pages/Dashboard'))

//const routePrefix = parentAppConfig.routePrefix
/*
const mountedRoutes: RouteObject[] = [
  {
    children: [...WorkplaceRoutes, ...PersonRoutes],
    path: routePrefix
  },
  { element: <Navigate to={routePrefix} />, path: '/' }
]
*/
const AppRoutes = () => {
  const location = useLocation()

  const key = useMemo(() => {
    const routeSplitted = location.pathname.split('/')
    if (routeSplitted.length >= 4) {
      const sidebarName = routeSplitted[2]
      const sidebarId = routeSplitted[3]

      return `${sidebarName}/${sidebarId}`
    }

    return location.pathname
  }, [location.pathname])

  //const element = useRoutes(mountedRoutes)

  //if (!element) return null

  return (
    <div>
      <StringDataComponent /> 
      <PersonList />
      <FormularySavePerson />
      {/*
      <PersonsTable /> 
        <Formulary />
      
     
    TODO trabalhar nesse cara <PersonsTable /> 
      <FormularySavePerson />*/}
    </div>
  );
}

export default AppRoutes
