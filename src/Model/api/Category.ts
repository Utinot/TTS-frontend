import interfaces from "./Confix"

export const listCategory = async () => {
    const url = '/category'
    return interfaces.get(url)
}

export const listCategoryProduct = async (id: any) => {
    const url = `/category/${id}`
    return interfaces.get(url)
}