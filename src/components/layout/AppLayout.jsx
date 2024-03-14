import { Layout, Spin } from 'antd'
import AppHeader from './AppHeader'


  

export default function AppLayout() {

    return (
        <Layout>
            <AppHeader/>  
            <Layout>
                {/* <AppContent/> */}
            </Layout>
        </Layout>
    )
}
