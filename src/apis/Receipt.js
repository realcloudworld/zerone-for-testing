import Api from "./Api";

export default {

    print(id, document_type_id) {
        return Api.get("/receipts/print/" + id, { params: { document_type_id: document_type_id } });
    },
    store(receipt) {
        console.log('receipt', receipt)
        return Api.post("/receipts", receipt);
    },
    storeOne(receipt) {

        return Api.post("/receipts/one", receipt);
    },
    getOne(id) {
        return Api.get("/receipts/" + id);
    },
    create(params) {
        return Api.get("/receipts/create", { params: params });
    },
    update(receipt) {
        return Api.put("/receipts", receipt);
    },
    delete(params) {
        return Api.delete("/receipts", { params: params });
    },
    deleteSupDoc(params) {
        return Api.delete("/receipts/sup_doc", { params: params });
    },
    getAll(params) {
        return Api.get("/receipts/all", { params: params });
    },
    getNewReference(params) {
        return Api.get("/receipts/new", { params: params });

    }
};