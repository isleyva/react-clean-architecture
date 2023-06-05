
export const createApiAdapater = (api: any) => {
    return {
        name: api.data.name,
        gender: api.data.gender,
        status: api.data.status,
    }
}