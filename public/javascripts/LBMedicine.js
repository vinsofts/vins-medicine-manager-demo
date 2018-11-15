web3js = new Web3(web3.currentProvider);
abiLBMedicine = [{"constant":false,"inputs":[{"name":"_imgHash","type":"string"},{"name":"_providerName","type":"string"},{"name":"_providerAddress","type":"string"},{"name":"_providerTelephone","type":"string"},{"name":"_index","type":"uint256"}],"name":"updateProvider","outputs":[{"name":"_suc","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"addressToProvider","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_addr","type":"address"}],"name":"getaddressToCeritifateIndex","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"accountIsRegister","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_index","type":"uint256"},{"name":"_addr","type":"address"}],"name":"setaddressToCeritifateIndex","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_index","type":"uint256"}],"name":"getProvider","outputs":[{"components":[{"name":"imgHash","type":"string"},{"name":"providerId","type":"uint256"},{"name":"providerName","type":"string"},{"name":"providerAddress","type":"string"},{"name":"providerTelephone","type":"string"}],"name":"","type":"tuple"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"meddicineToCertificate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnerShip","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_index1","type":"uint256"},{"name":"_index2","type":"uint256"}],"name":"setcertificateToMedicine","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_index","type":"uint256"}],"name":"getInforMedicine","outputs":[{"components":[{"name":"imgHash","type":"string"},{"name":"medicineId","type":"uint256"},{"name":"medicineName","type":"string"},{"name":"ingredient","type":"string"},{"name":"benefit","type":"string"},{"name":"productsBy","type":"string"},{"name":"medicinePrices","type":"uint256"},{"name":"isValidMedicine","type":"bool"}],"name":"","type":"tuple"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_hashImg","type":"string"},{"name":"_providerName","type":"string"},{"name":"_addr","type":"string"},{"name":"_phone","type":"string"}],"name":"registerUser","outputs":[{"name":"_suc","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_imgHash","type":"string"},{"name":"_name","type":"string"},{"name":"_ingredient","type":"string"},{"name":"_benefit","type":"string"},{"name":"_productBy","type":"string"},{"name":"_prices","type":"uint256"}],"name":"insertMedecine","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_imgHash","type":"string"},{"name":"_providerName","type":"string"},{"name":"_providerAddress","type":"string"},{"name":"_providerTelephone","type":"string"}],"name":"insertProvider","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_addr","type":"address"}],"name":"getaddressUserToMedicineIndex","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_imgHash","type":"string"},{"name":"_medicineName","type":"string"},{"name":"_structure","type":"string"},{"name":"_uses","type":"string"},{"name":"_productsBy","type":"string"},{"name":"_prices","type":"uint256"},{"name":"_digitalcontractAddress","type":"address"}],"name":"registerMedecine","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"medicines","outputs":[{"name":"imgHash","type":"string"},{"name":"medicineId","type":"uint256"},{"name":"medicineName","type":"string"},{"name":"ingredient","type":"string"},{"name":"benefit","type":"string"},{"name":"productsBy","type":"string"},{"name":"medicinePrices","type":"uint256"},{"name":"isValidMedicine","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_index","type":"uint256[]"}],"name":"listProviders","outputs":[{"components":[{"name":"imgHash","type":"string"},{"name":"providerId","type":"uint256"},{"name":"providerName","type":"string"},{"name":"providerAddress","type":"string"},{"name":"providerTelephone","type":"string"}],"name":"","type":"tuple[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_index","type":"uint256[]"}],"name":"getMedicines","outputs":[{"components":[{"name":"imgHash","type":"string"},{"name":"medicineId","type":"uint256"},{"name":"medicineName","type":"string"},{"name":"ingredient","type":"string"},{"name":"benefit","type":"string"},{"name":"productsBy","type":"string"},{"name":"medicinePrices","type":"uint256"},{"name":"isValidMedicine","type":"bool"}],"name":"","type":"tuple[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"bool"},{"name":"_index","type":"uint256"}],"name":"setMedicine","outputs":[{"name":"_suc","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"certificateToMedicine","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_index","type":"uint256"}],"name":"getmedicineAddressOf","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_imgHash","type":"string"},{"name":"_medicineName","type":"string"},{"name":"_ingredient","type":"string"},{"name":"_benefit","type":"string"},{"name":"_productBy","type":"string"},{"name":"_prices","type":"uint256"},{"name":"_index","type":"uint256"}],"name":"updateMedicine","outputs":[{"name":"_suc","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"}],"name":"TransferOwnerShip","type":"event"}];

addressLBMedicine = "0x10ef9ce9f06424635903fb9b78a1f7809e6a397c";
addressLBDigital  = '0x60bb4ada4609b4c9ae025bcd863337d8166a25e5';
LBMedicineContract = new web3js.eth.Contract(abiLBMedicine,addressLBMedicine);
console.log(LBMedicineContract);

async function getAccount() {
    var account;
    await web3js.eth.getAccounts().then(accounts => account = accounts[0])
    return account;
}

async function checkIsRegistered() {
    var account = await getAccount();
    var res= await LBMedicineContract.methods.accountIsRegister().call({from:account});
    return res
}

async function registerProvider(name, address, phone){
    var data;
    var account = await getAccount();
    data = await LBMedicineContract.methods.registerUser('a',name,address,phone).send({from:account});
    return data;
}

async function registerMedicine(name,structure,uses,productsBy,prices){
    var data;
    var account = await getAccount();
    data = await LBMedicineContract.methods.registerMedecine('a',name,structure,uses,productsBy,prices,addressLBDigital).send({from:account});
    return data;
}