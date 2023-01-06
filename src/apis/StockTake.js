import Api from "./Api";

export default {
    create() {
        return Api.get("/stocktakes/create");
    },
    store(stocktake) {
        return Api.post("/stocktakes", stocktake);
    },
    update(stocktake) {
        return Api.put("/stocktakes", stocktake);
    },
    postCreate(stocktake) {
        return Api.post("/stocktakes/create", stocktake);
    },
    get(params) {
        return Api.get("/stocktakes", { params: params });
    },

    getAll(params) {
        return Api.get("/stocktakes" + "/all", { params: params });
    },

    search(params) {
        return Api.get("/stocktakes/search", { params: params });
    },

    documentBarcodeSearch(params) {
        return Api.get("/extra/document/barcode/" + params.barcode);
    },
    invoiceBarcodeSearch(params) {
        return Api.get("/extra/invoice/barcode/" + params.barcode);
    },

    delete(params) {
        return Api.delete("/stocktakes", { params: params });
    }

};