import React, { useState } from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { Link } from 'react-router-dom';
import '../../styles/componentes-generales/sidebar.css';

const Sidebar = () => {

  const [estado, setEstado] = useState(true);

  return (
    <div className='sidebar'  style={{ display: 'flex', height: '100%', overflow: 'scroll initial' }}>
      <CDBSidebar data-toggle="collapse" textColor="#fff" backgroundColor="#930001">
        <CDBSidebarHeader onClick={()=>setEstado(estado ? false : true)} prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/menuprincipal" className="text-decoration-none" style={{ color: 'inherit' }}>
            Hotel Berlín
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <Link to="/reservas">
              <CDBSidebarMenuItem icon='plus-circle'> Reservas</CDBSidebarMenuItem>
            </Link>
            <Link to="/pago">
              <CDBSidebarMenuItem icon="comments-dollar">Pago</CDBSidebarMenuItem>
            </Link>
            <Link to="/inventario">
              <CDBSidebarMenuItem icon="warehouse">Inventario</CDBSidebarMenuItem>
            </Link>
            <Link to="/reportes">
              <CDBSidebarMenuItem icon="chart-line">Reportes</CDBSidebarMenuItem>
            </Link>

            <Link to='/usuarios'>
              <CDBSidebarMenuItem icon="user-alt">Usuarios</CDBSidebarMenuItem>
            </Link>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        {/*<CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Sidebar Footer
          </div>
          </CDBSidebarFooter>*/}
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;


