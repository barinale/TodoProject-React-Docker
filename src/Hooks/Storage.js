export class Storage {

    static storeData(key,data){
        return localStorage.setItem(key,JSON.stringify(data));
    }

    static getData(key){
    const StoredData = localStorage.getItem(key)

    return StoredData ? [JSON.parse(StoredData)]:[];
    }
  
}


