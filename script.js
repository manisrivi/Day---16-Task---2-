// Container
let container = document.createElement("div");
container.classList.add("class", "container", "text-center");
document.body.append(container);

// Heading 
let h1Tag = document.createElement("h1");
h1Tag.setAttribute("id", "title");
h1Tag.innerHTML = "DOM MANIPULATION FORMS";
container.append(h1Tag);

// Paragraph 
let pTag = document.createElement("p");
pTag.setAttribute("id", "description");
pTag.innerHTML = "Task"
container.append(pTag);

// Form
let formTag = document.createElement("form");
formTag.setAttribute("id", "form");
container.append(formTag);

// First name 
let firstName = document.createElement("div");
firstName.classList.add("form-group");
firstName.innerHTML = "First Name";
formTag.appendChild(firstName);

// First name Input details
let firstNameInput = document.createElement("input");
firstNameInput.setAttribute("type", "text");
firstNameInput.setAttribute("id", "first-name");
firstNameInput.setAttribute("required", "");
firstNameInput.setAttribute("placeholder", "first name");
firstName.appendChild(firstNameInput);

// Last name 
let lastName = document.createElement("div");
lastName.classList.add("form-group");
lastName.innerHTML = "Last Name";
formTag.appendChild(lastName);

// Last name Input details
let lastNameInput = document.createElement("input");
lastNameInput.setAttribute("type", "text");
lastNameInput.setAttribute("id", "last-name");
lastNameInput.setAttribute("required", "");
lastNameInput.setAttribute("placeholder", "last name");
lastName.appendChild(lastNameInput);

// Pincode 
let pinCode = document.createElement("div");
pinCode.classList.add("form-group");
pinCode.innerHTML = "Pincode";
formTag.appendChild(pinCode);

// Pincode Input details
let pinCodeInput = document.createElement("input");
pinCodeInput.setAttribute("type", "text");
pinCodeInput.setAttribute("name", "pincode");
pinCodeInput.setAttribute("id", "pincode");
pinCodeInput.setAttribute("required", "");
pinCodeInput.setAttribute("placeholder", "pincode");
pinCode.appendChild(pinCodeInput);

// Gender section
let Genderdiv = document.createElement("div");
Genderdiv.classList.add("form-group")
Genderdiv.innerHTML = "Gender: "
formTag.append(Genderdiv);

// Gender Input Male
let maleInput = document.createElement("input");
maleInput.setAttribute("type", "radio");
maleInput.setAttribute("name", "gender");
maleInput.setAttribute("id", "male");
maleInput.innerText = "male";
Genderdiv.append(maleInput);
Genderdiv.append(" male ");

// Gender Input Female
let femaleInput = document.createElement("input");
femaleInput.setAttribute("type", "radio");
femaleInput.setAttribute("name", "gender");
femaleInput.setAttribute("id", "female");
femaleInput.innerHTML = "female";
Genderdiv.append(femaleInput);
Genderdiv.append(" female ");

// Address section
let address = document.createElement("div");
address.classList.add("form-group");
address.classList.add("add")
address.innerHTML = "Address";
formTag.appendChild(address);

// Address textarea 
let addressTextArea = document.createElement("textarea");
addressTextArea.setAttribute("name", "address");
addressTextArea.setAttribute("placeholder", "instructions");
addressTextArea.setAttribute("id", "address");
addressTextArea.setAttribute("cols", "40");
addressTextArea.setAttribute("rows", "4");
address.append(addressTextArea);

// Choice of food
let food = document.createElement("div");
food.classList.add("form-group")
food.innerHTML = "Choice of food:  ";
formTag.append(food);


// Choice of food - Dosa
let dosa = document.createElement("input");
dosa.setAttribute("type", "checkbox");
dosa.setAttribute("id", "dosa");
dosa.setAttribute("name", "food");
dosa.innerHTML = "Dosa";
food.append(dosa);
food.append(" dosa ");

// Choice of food - Idli
let idli = document.createElement("input");
idli.setAttribute("type", "checkbox");
idli.setAttribute("id", "idli");
idli.setAttribute("name", "food");
idli.innerHTML = "idli";
food.append(idli);
food.append(" idli ");


// Choice of food - Pongal
let pongal = document.createElement("input");
pongal.setAttribute("type", "checkbox");
pongal.setAttribute("id", "pongal");
pongal.setAttribute("name", "food");
pongal.innerHTML = "pongal";
food.append(pongal);
food.append(" pongal ");

// Choice of food - Vada
let vada = document.createElement("input");
vada.setAttribute("type", "checkbox");
vada.setAttribute("id", "vada");
vada.setAttribute("name", "food");
vada.innerHTML = "vada";
food.append(vada);
food.append(" vada ");

// Choice of food - Chapati
let chapati = document.createElement("input");
chapati.setAttribute("type", "checkbox");
chapati.setAttribute("id", "chapati");
chapati.setAttribute("name", "food");
chapati.innerHTML = "chapati";
food.append(chapati);
food.append(" chapati ");

// State
let stateDiv = document.createElement("div");
stateDiv.classList.add("form-group");
stateDiv.innerHTML = "State"
formTag.append(stateDiv);

// State Input
let stateInput = document.createElement("input");
stateInput.setAttribute("type", "text")
stateInput.setAttribute("id", "state")
stateDiv.append(stateInput);

// Country
let countryDiv = document.createElement("div");
countryDiv.innerHTML = "Country"
countryDiv.classList.add("form-group")
formTag.append(countryDiv);

// Country Input
let countryInput = document.createElement("input");
countryInput.setAttribute("type", "text")
countryInput.setAttribute("id", "country")
countryDiv.appendChild(countryInput);

// Button section
let buttonDiv = document.createElement("div");
formTag.append(buttonDiv);

// Button - submit
let buttonSubmit = document.createElement("button");
buttonSubmit.classList.add("btn-primary");
buttonSubmit.classList.add("form-group")
buttonSubmit.classList.add("btn");
buttonSubmit.setAttribute("type", "submit");
buttonSubmit.setAttribute("id", "submit");
buttonSubmit.innerHTML = "submit";
buttonDiv.appendChild(buttonSubmit);

// Button - Validate
let btn = document.getElementById("submit").addEventListener("click", validate)

// Breake
let brTag = document.createElement("br");
formTag.append(brTag);

// Table Section
let tableDiv = document.createElement("div");
container.append(tableDiv);

// Table 
let table = document.createElement("table");
table.classList.add("table", "table-bordered","border-primary");
tableDiv.append(table);

// Table Head
let tableHead = document.createElement("thead");
tableHead.classList.add("bg-danger")
table.appendChild(tableHead);

// Table Head Inside create <tr>
let tableHeadTr = document.createElement("tr");
tableHead.append(tableHeadTr);

// <tr> Inside create the <th>-1
let th_1 = document.createElement("th");
th_1.innerHTML = "First Name"
tableHeadTr.append(th_1);

// <tr> Inside create the <th>-2
let th_2 = document.createElement("th");
th_2.innerHTML = "Last Name"
tableHeadTr.append(th_2);

// <tr> Inside create the <th>-3
let th_3 = document.createElement("th");
th_3.innerHTML = "Gender"
tableHeadTr.append(th_3);

// <tr> Inside create the <th>-4
let th_4 = document.createElement("th");
th_4.innerHTML = "Address"
tableHeadTr.append(th_4);

// <tr> Inside create the <th>-5
let th_5 = document.createElement("th");
th_5.innerHTML = "Pincode";
tableHeadTr.append(th_5);

// <tr> Inside create the <th>-6
let th_6 = document.createElement("th");
th_6.innerHTML = "Choice of Food";
tableHeadTr.append(th_6);

// <tr> Inside create the <th>-7
let th_7 = document.createElement("th");
th_7.innerHTML = "State"
tableHeadTr.append(th_7);

// <tr> Inside create the <th>-8
let th_8 = document.createElement("th");
th_8.innerHTML = "Country"
tableHeadTr.append(th_8);

// Table Body
let tableBody = document.createElement("tbody");
table.appendChild(tableBody);

// Table Body Inside create <tr>
let tableBodyTr = document.createElement("tr");
tableBody.append(tableBodyTr);

// <tr> Inside create the <td>-1
let td_1 = document.createElement("td");
td_1.setAttribute("id", "td1")
tableBodyTr.append(td_1);

// <tr> Inside create the <td>-2
let td_2 = document.createElement("td");
td_2.setAttribute("id", "td2");
tableBodyTr.append(td_2);

// <tr> Inside create the <td>-3
let td_3 = document.createElement("td");
td_3.setAttribute("id", "td3")
tableBodyTr.append(td_3);

// <tr> Inside create the <td>-4
let td_4 = document.createElement("td");
td_4.setAttribute("id", "td4");
tableBodyTr.append(td_4);

// <tr> Inside create the <td>-5
let td_5 = document.createElement("td");
td_5.setAttribute("id", "td5");
tableBodyTr.append(td_5);

// <tr> Inside create the <td>-6
let td_6 = document.createElement("td");
td_6.setAttribute("id", "td6");
tableBodyTr.append(td_6);

// <tr> Inside create the <td>-7
let td_7 = document.createElement("td");
td_7.setAttribute("id", "td7");
tableBodyTr.append(td_7);

// <tr> Inside create the <td>-8
let td_8 = document.createElement("td");
td_8.setAttribute("id", "td8")
tableBodyTr.append(td_8);

// Function Creation
function validate(event) {
    event.preventDefault()

    // Create the variables in all Elements
    First_Name = document.getElementById("first-name").value;
    Last_Name = document.getElementById("last-name").value;
    Add_ress = document.getElementById("address").value;
    Pin_code = document.getElementById("pincode").value;
    State_ = document.getElementById("state").value;
    Country_ = document.getElementById("country").value;

    // Gender if and else condtion checking
    var Gender_;
    Gender_Male = document.getElementById("male")
    Gender_Female = document.getElementById("female")
    if (Gender_Male.checked == true) {
        console.log("female")
        Gender_ = "male"
    } else if (Gender_Female.checked == true) {
        console.log("male")
        Gender_ = "female"
    } else {
        Gender_ = ""
    }

    // Food-List Create the variables
    str = ""
    Food_List_1 = document.getElementById("dosa").value;
    Food_List_2 = document.getElementById("idli").value;
    Food_List_3 = document.getElementById("pongal").value;
    Food_List_4 = document.getElementById("vada").value;
    Food_List_5 = document.getElementById("chapati").value;
    // Food list condtion checking 
    if (dosa.checked == true) {
        str += "dosa, "
    }
    if (idli.checked == true) {
        str += "idli, "
    }
    if (pongal.checked == true) {
        str += "pongal, "
    }
    if (vada.checked == true) {
        str += "vada, "
    }
    if (chapati.checked == true) {
        str += "chapati, "
    }

    // Get the values and Print the table
    document.getElementById("td1").innerHTML = First_Name;
    document.getElementById("td2").innerHTML = Last_Name;
    document.getElementById("td3").innerHTML = Gender_;
    document.getElementById("td4").innerHTML = Add_ress;
    document.getElementById("td5").innerHTML = Pin_code;
    document.getElementById("td6").innerHTML = str;
    document.getElementById("td7").innerHTML = State_;
    document.getElementById("td8").innerHTML = Country_;
}