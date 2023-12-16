import testlocalStorage from "./testlocalStorage";

const localstoragesave = (type, e) => {
    if (testlocalStorage) {
        if (localStorage.getItem(type) == null) {
            localStorage.setItem(type, '[]');
        }
        let data = JSON.parse(localStorage.getItem(type));
        data.push(e);
        localStorage.setItem(type, JSON.stringify(data));
    }
};

export default localstoragesave;
