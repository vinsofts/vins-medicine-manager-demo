module.exports  = {
    host: "https://ropsten.infura.io/v3/2ea352f51b5a45819be9923cdfb58894",

    medicine: {
        address: '0x10ef9ce9f06424635903fb9b78a1f7809e6a397c',
        abi: [{"constant":false,"inputs":[{"name":"_imgHash","type":"string"},{"name":"_providerName","type":"string"},{"name":"_providerAddress","type":"string"},{"name":"_providerTelephone","type":"string"},{"name":"_index","type":"uint256"}],"name":"updateProvider","outputs":[{"name":"_suc","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"addressToProvider","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_addr","type":"address"}],"name":"getaddressToCeritifateIndex","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"accountIsRegister","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_index","type":"uint256"},{"name":"_addr","type":"address"}],"name":"setaddressToCeritifateIndex","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_index","type":"uint256"}],"name":"getProvider","outputs":[{"components":[{"name":"imgHash","type":"string"},{"name":"providerId","type":"uint256"},{"name":"providerName","type":"string"},{"name":"providerAddress","type":"string"},{"name":"providerTelephone","type":"string"}],"name":"","type":"tuple"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"meddicineToCertificate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnerShip","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_index1","type":"uint256"},{"name":"_index2","type":"uint256"}],"name":"setcertificateToMedicine","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_index","type":"uint256"}],"name":"getInforMedicine","outputs":[{"components":[{"name":"imgHash","type":"string"},{"name":"medicineId","type":"uint256"},{"name":"medicineName","type":"string"},{"name":"ingredient","type":"string"},{"name":"benefit","type":"string"},{"name":"productsBy","type":"string"},{"name":"medicinePrices","type":"uint256"},{"name":"isValidMedicine","type":"bool"}],"name":"","type":"tuple"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_hashImg","type":"string"},{"name":"_providerName","type":"string"},{"name":"_addr","type":"string"},{"name":"_phone","type":"string"}],"name":"registerUser","outputs":[{"name":"_suc","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_imgHash","type":"string"},{"name":"_name","type":"string"},{"name":"_ingredient","type":"string"},{"name":"_benefit","type":"string"},{"name":"_productBy","type":"string"},{"name":"_prices","type":"uint256"}],"name":"insertMedecine","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_imgHash","type":"string"},{"name":"_providerName","type":"string"},{"name":"_providerAddress","type":"string"},{"name":"_providerTelephone","type":"string"}],"name":"insertProvider","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_addr","type":"address"}],"name":"getaddressUserToMedicineIndex","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_imgHash","type":"string"},{"name":"_medicineName","type":"string"},{"name":"_structure","type":"string"},{"name":"_uses","type":"string"},{"name":"_productsBy","type":"string"},{"name":"_prices","type":"uint256"},{"name":"_digitalcontractAddress","type":"address"}],"name":"registerMedecine","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"medicines","outputs":[{"name":"imgHash","type":"string"},{"name":"medicineId","type":"uint256"},{"name":"medicineName","type":"string"},{"name":"ingredient","type":"string"},{"name":"benefit","type":"string"},{"name":"productsBy","type":"string"},{"name":"medicinePrices","type":"uint256"},{"name":"isValidMedicine","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_index","type":"uint256[]"}],"name":"listProviders","outputs":[{"components":[{"name":"imgHash","type":"string"},{"name":"providerId","type":"uint256"},{"name":"providerName","type":"string"},{"name":"providerAddress","type":"string"},{"name":"providerTelephone","type":"string"}],"name":"","type":"tuple[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_index","type":"uint256[]"}],"name":"getMedicines","outputs":[{"components":[{"name":"imgHash","type":"string"},{"name":"medicineId","type":"uint256"},{"name":"medicineName","type":"string"},{"name":"ingredient","type":"string"},{"name":"benefit","type":"string"},{"name":"productsBy","type":"string"},{"name":"medicinePrices","type":"uint256"},{"name":"isValidMedicine","type":"bool"}],"name":"","type":"tuple[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"bool"},{"name":"_index","type":"uint256"}],"name":"setMedicine","outputs":[{"name":"_suc","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"certificateToMedicine","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_index","type":"uint256"}],"name":"getmedicineAddressOf","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_imgHash","type":"string"},{"name":"_medicineName","type":"string"},{"name":"_ingredient","type":"string"},{"name":"_benefit","type":"string"},{"name":"_productBy","type":"string"},{"name":"_prices","type":"uint256"},{"name":"_index","type":"uint256"}],"name":"updateMedicine","outputs":[{"name":"_suc","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"}],"name":"TransferOwnerShip","type":"event"}]
    },

    digital: {
        address: '0x60bb4ada4609b4c9ae025bcd863337d8166a25e5',
        abi: [{"constant":true,"inputs":[{"name":"_index","type":"uint256"}],"name":"getWhiteListByIndex","outputs":[{"components":[{"name":"hashImg","type":"string"},{"name":"whiteListId","type":"uint256"},{"name":"whiteListName","type":"string"},{"name":"whiteListAddress","type":"string"}],"name":"","type":"tuple"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"whitelistAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_whiteListName","type":"string"},{"name":"_whiteListAddress","type":"string"},{"name":"_index","type":"uint256"}],"name":"updateWhiteList","outputs":[{"name":"_suc","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_id","type":"uint256"}],"name":"getWaittingForApprove","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_contents","type":"string"},{"name":"_dateOf","type":"uint256"},{"name":"_product","type":"string"}],"name":"insertDigitalCertificate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"digitalCertificates","outputs":[{"name":"digitalCertificateId","type":"uint256"},{"name":"contents","type":"string"},{"name":"dateOf","type":"uint256"},{"name":"productBy","type":"string"},{"name":"isValid","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_contents","type":"string"},{"name":"_dateOf","type":"uint256"},{"name":"_isvalid","type":"bool"},{"name":"_index","type":"uint256"}],"name":"updateDigitalCertificate","outputs":[{"name":"_suc","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_medicineId","type":"uint256"},{"name":"_medicinecontractAddress","type":"address"}],"name":"approveMedicine","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_index","type":"uint256"}],"name":"getDigitalCertificate","outputs":[{"components":[{"name":"digitalCertificateId","type":"uint256"},{"name":"contents","type":"string"},{"name":"dateOf","type":"uint256"},{"name":"productBy","type":"string"},{"name":"isValid","type":"bool"}],"name":"","type":"tuple"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnerShip","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_add","type":"address"},{"name":"_id","type":"uint256"}],"name":"setWaittingForApprove","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_index","type":"uint256[]"}],"name":"getWhiteLists","outputs":[{"components":[{"name":"hashImg","type":"string"},{"name":"whiteListId","type":"uint256"},{"name":"whiteListName","type":"string"},{"name":"whiteListAddress","type":"string"}],"name":"","type":"tuple[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"isWaitting","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_id","type":"uint256"}],"name":"getAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_addr","type":"address"}],"name":"addressIsWhiteList","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_index","type":"uint256[]"}],"name":"getmanyInforDigitalCertificate","outputs":[{"components":[{"name":"digitalCertificateId","type":"uint256"},{"name":"contents","type":"string"},{"name":"dateOf","type":"uint256"},{"name":"productBy","type":"string"},{"name":"isValid","type":"bool"}],"name":"","type":"tuple[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_hashIMG","type":"string"},{"name":"_name","type":"string"},{"name":"_addr","type":"string"},{"name":"_address","type":"address"}],"name":"insertWhitelist","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getlistIdsWaittingForApprove","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getTotalWhitelist","outputs":[{"components":[{"name":"hashImg","type":"string"},{"name":"whiteListId","type":"uint256"},{"name":"whiteListName","type":"string"},{"name":"whiteListAddress","type":"string"}],"name":"","type":"tuple[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getlistIdsApproved","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getAddresslength","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"}],"name":"TransferOwnerShip","type":"event"}]
    },

}