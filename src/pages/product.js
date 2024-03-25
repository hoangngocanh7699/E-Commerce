import { useContext } from "react"
import { ShopContext } from "../context/shopContext"
import { useParams } from "react-router-dom"
import Breadcrums from "../component/breadcrums/breadcrums"


const Product = () => {

    const {allproduct} = useContext(ShopContext)
    const {productId} = useParams
    const product = allproduct.find((e) => e.id === Number(productId))

    return <>
        <div>
            <Breadcrums product={product} />
        </div>
    </>
}

export default Product