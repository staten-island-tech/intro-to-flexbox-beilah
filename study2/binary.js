function findDNS(records, target) {

    

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let midAddress = records[mid].address;

        if (midAddress === target) {
            return records[mid].dns;
        }
        else if (midAddress > target) {
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }
    }
    return "DNS NOT FOUND";
}