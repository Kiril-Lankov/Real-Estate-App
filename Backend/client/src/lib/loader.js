import apiRequest from "./apiRequest"

export const singlepageLoader = async ({request, params}) => {
    const res = await apiRequest("/posts/"+params.id)
    return res.data;
}