const firebaseConfig = {
    apiKey: "AIzaSyBCOSjkBiW8HDOmM7l0b9fXGRPqJUhHfOA",
    authDomain: "contact-form-90df4.firebaseapp.com",
    databaseURL: "https://contact-form-90df4-default-rtdb.firebaseio.com",
    projectId: "contact-form-90df4",
    storageBucket: "contact-form-90df4.firebasestorage.app",
    messagingSenderId: "616953068082",
    appId: "1:616953068082:web:7b849feebd725431519a2b"
  }
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };