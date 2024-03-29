import ProductForm from "../features/admin/componnets/ProductForm";
import NavBar from "../features/navbar/Navbar";
 
function AdminProductFormPage() {
    return ( <div>
        <NavBar>
            <ProductForm></ProductForm>
        </NavBar>
    </div> );
}

export default AdminProductFormPage;