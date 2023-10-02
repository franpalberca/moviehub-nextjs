import { Metadata } from "next"

type Props = {}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const product = await getProductDetails(params.id)
    return {
        title: `$() Page`,
        description: `$()`
    }
}

const ProductID = async ({params}: Props) => {
  const product = await getProductDetails(params.id)
  return (
    <div>ProductID</div>
  )
}

export default ProductID