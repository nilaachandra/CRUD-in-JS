function addData() {
    let dataEntered = getData();
    insertData(dataEntered);
  }
  
  // Retrieve data from form
  function getData() {
    let name = document.getElementById("name").value;
    let address = document.getElementById("address").value;
    let phn = document.getElementById("phn").value;
    let dob = document.getElementById("dob").value;
    let email = document.getElementById("email").value;
  
    let dataEntered = { name, address, phn, dob, email };
    
    // Save data to local storage
    saveToLocalStorage(dataEntered);
  
    // Fetch data for the table
    let ourData = retrieveFromLocalStorage();
    return ourData;
  }
  
  // Save data to local storage
  function saveToLocalStorage(dataEntered) {
    localStorage.setItem("name", dataEntered.name);
    localStorage.setItem("address", dataEntered.address);
    localStorage.setItem("phn", dataEntered.phn);
    localStorage.setItem("dob", dataEntered.dob);
    localStorage.setItem("email", dataEntered.email);
  }
  
  // Retrieve data from local storage for the table
  function retrieveFromLocalStorage() {
    let nameTbl = localStorage.getItem("name");
    let addressTbl = localStorage.getItem("address");
    let phnTbl = localStorage.getItem("phn");
    let dobTbl = localStorage.getItem("dob");
    let emailTbl = localStorage.getItem("email");
  
    let ourData = { name: nameTbl, address: addressTbl, phn: phnTbl, dob: dobTbl, email: emailTbl };
    return ourData;
  }
  
  // INSERT data
