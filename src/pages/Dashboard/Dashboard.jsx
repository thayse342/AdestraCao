import React, { useState } from 'react'
import Agendamento from '../../components/views/dashboard/Agendamento/Agendamento'
import Layout from '../../components/shared/Layout/Layout'
import Search from '../../components/views/dashboard/Search/Search'


const Dashboard = () => {


return (
    <div>
         <Layout >
            <Search />
            <Agendamento/>
         </Layout>
    </div>
)

}

export default Dashboard