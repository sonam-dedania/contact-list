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

function updateInfo(i) {
    $('#name').html(api[i].name);
    $('#fullname').html(api[i].name);
    $('#email').html(api[i].email);
    $('#phoneno').html(api[i].phoneno);
    $('#company').html(api[i].company);
    $('#address').html(api[i].address);

}

$(document).ready(function () {

    let contactObject = "";
    for (let i = 0; i < api.length; i++) {
        contactObject += '<div class="row" onClick="updateInfo(' + i + ')">';
        contactObject += '    <div class="col-lg-2">';
        contactObject += '        <input type="checkbox">';
        contactObject += '    </div>';
        contactObject += '    <div class="col-lg-6">';
        contactObject += '        <div class="color-box ' + api[i].color + '">' + api[i].name.substr(0, 2) + '</div>';
        contactObject += '        <div class="basic-info">';
        contactObject += '            <h4>' + api[i].name + '</h4>';
        contactObject += '            <p>' + api[i].email + '</p>';
        contactObject += '        </div>';
        contactObject += '    </div>';
        contactObject += '    <div class="col-lg-4">';
        contactObject += '        <p>' + api[i].company + '</p>';
        contactObject += '    </div>';
        contactObject += '</div>';

    }

    $('.contactListContainer').html(contactObject);
});
