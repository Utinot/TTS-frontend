import interfaces from "./Confix"

export const listProduct = () => {
    const url = '/products'
    return interfaces.get(url)
}

export const detailProducts = (id: any) => {
    const url = `/products/${id}`;
    return interfaces.get(url)
}