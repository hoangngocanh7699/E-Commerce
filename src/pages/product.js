import { useContext } from "react"
import { ShopContext } from "../context/shopContext"
import { useParams } from "react-router-dom"
import Breadcrums from "../component/breadcrums/breadcrums"
import ProductDisplay from "../component/productDisplay/productDisplay"
import DescriptionBox from "../component/descriptionBox/descriptionBox"
import RelatedProducts from "../component/relatedProducts/relatedProducts"


const Product = () => {

    const {all_product} = useContext(ShopContext)
    const {productId} = useParams()
    const product = all_product.find((e) => e.id === Number(productId))

    return <>
        <div>
            <Breadcrums product={product} />
            <ProductDisplay product={product} />
            <DescriptionBox />
            <RelatedProducts />
        </div>
    </>
}

export default Product