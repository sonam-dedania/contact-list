// To Do
// Side bar & Top bar
// beautification
// Search contact


let api = [{
    name: "mike huston",
    email: "mikehuston@gmail.com",
    company: "Esta boitique ltd",
    color: "back-color-green",
    address: "dhdjfdjfndjfn",
    phoneno: "86347346387",
},
{
    name: "Dipen Dedania",
    email: "dipendedania@gmail.com",
    company: "zuru ltd",
    color: "back-color-pink",
    address: "yywcdbddbew",
    phoneno: "999993429",
},
{
    name: "Sonam Dedania",
    email: "sonamdedania@gmail.com",
    company: "Google",
    color: "back-color-yellow",
    address: "wqpkssdjd",
    phoneno: "2329330239",
}];

function addContact() {
    let name1 = "";
    let email1 = "";
    let company1 = "";
    let phone1 = "";
    let address1 = "";

    name1 = $('#name1').val();
    email1 = $('#email1').val();
    company1 = $('#company1').val();
    phone1 = $('#phone1').val();
    address1 = $('#address1').val();

    let newContact = {
        name: name1, //$('#search').val(),
        email: email1,
        company: company1,
        phone: phone1,
        address: address1,
    };
    api.push(newContact);
    displayContact();
}
function deleteContact() {
    alert("dsdjsa");
    for (let i = 0; i < api.length; i++) {
        if (api[i].name == $('#name').html()) {
            api.splice(i, 1);
        }
    }
    displayContact();
}
function updateInfo(k) {
    $('#name').html(api[k].name);
    $('#fullname').html(api[k].name);
    $('#email').html(api[k].email);
    $('#phoneno').html(api[k].phoneno);
    $('#company').html(api[k].company);
    $('#address').html(api[k].address);


    for (let j = 0; j < api.length; j++) {
        $('#c' + j).removeClass('back-gray');
    }
    $('#c' + k).addClass('back-gray');
}

function displayContact() {
    let contactObject = "";
    for (let i = 0; i < api.length; i++) {
        contactObject += '<div class="row" id="c' + i + '" onClick="updateInfo(' + i + ')">';
        contactObject += '    <div class="col-sm-2">';
        contactObject += '        <input type="checkbox">';
        contactObject += '    </div>';
        contactObject += '    <div class="col-sm-6">';
        contactObject += '        <div class="color-box ' + api[i].color + '">' + api[i].name.substr(0, 2) + '</div>';
        contactObject += '        <div class="basic-info">';
        contactObject += '            <h4>' + api[i].name + '</h4>';
        contactObject += '            <p>' + api[i].email + '</p>';
        contactObject += '        </div>';
        contactObject += '    </div>';
        contactObject += '    <div class="col-sm-4">';
        contactObject += '        <p>' + api[i].company + '</p>';
        contactObject += '    </div>';
        contactObject += '</div>';

    }

    $('.contactListContainer').html(contactObject);
}

function ajaxTest() {
    $.ajax({
        url: "https://api.github.com/users", success: function (result) {
            console.log(result);
            // $("#div1").html(JSON.stringify(result));
        }
    });
}

$(document).ready(function () {

    displayContact();
    // addContact();
    ajaxTest();

});
