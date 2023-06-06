export const createApiAdapater = (api: any) => {
  return {
    id: api.data.id,
    name: api.data.name,
    gender: api.data.gender,
    status: api.data.status,
  };
};
