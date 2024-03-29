import NavBar from "../features/navbar/Navbar";
import AdminProductList from "../features/admin/componnets/AdminProductList";

function AdminHome () {
    return ( 
        <div>
            <NavBar>
                <AdminProductList></AdminProductList>
            </NavBar>
        </div>
     );
}

export default AdminHome ;