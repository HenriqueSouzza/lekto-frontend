import React from 'react';
import './index.css'

export default function BreadcrumbCustom({path, icon}){
    return(
        <div className="breadcrumb-custom">
            {icon} {path}
        </div>
    )
}