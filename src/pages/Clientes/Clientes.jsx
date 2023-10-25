import React, { useState } from 'react'
import Layout from '../../components/shared/Layout/Layout'
import Search from '../../components/views/dashboard/Search/Search'
import Clienteview from '../../components/views/dashboard/Cliente/cliente'

const Clientes = () => {


return (
    <div>
         <Layout >
            <Search />
            <Clienteview />
         </Layout>
    </div>
)

}

export default Clientes