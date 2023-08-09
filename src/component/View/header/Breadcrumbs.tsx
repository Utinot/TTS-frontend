import { Breadcrumb } from 'antd'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

type Props = {}

const Breadcrumbs = (props: Props) => {

  const location = useLocation()

  let currentlink = ''
  const crumbs = location.pathname.split('//')
    .filter(crumb => crumb !== '')
    .map(crumb => {
      currentlink = + `/${crumb}`
      return (
        <div>
          <Link to={currentlink}>{crumb}</Link>
        </div>
      )
    })
  return (
    <div>
      <Breadcrumb style={{color:'black', fontWeight:'800', marginLeft:'10%'}}>{crumbs}</Breadcrumb>
    </div>
  )
}

export default Breadcrumbs