import React from 'react';
import { Outlet } from "react-router";
import CategoriesHeader from '../components/CategoriesHeader.jsx';


function Categories(){
    return(
    <>
    <CategoriesHeader />
    <Outlet />
    </>
    )
}

export default Categories;