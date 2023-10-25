import React, { useState } from 'react'
import Agendamentoview from '../../components/views/dashboard/Agendamento/Agendamento'
import Layout from '../../components/shared/Layout/Layout'
import Search from '../../components/views/dashboard/Search/Search'


const Agendamento = () => {


return (
    <div>
         <Layout >
            <Search />
            <Agendamentoview/>
         </Layout>
    </div>
)

}

export default Agendamento