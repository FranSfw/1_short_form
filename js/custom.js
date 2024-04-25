

var Step0 = document.getElementById('Step0');
var Step1 = document.getElementById('Step1');
var Step2 = document.getElementById('Step2');
var Step2A = document.getElementById('Step2A');
var Step2B = document.getElementById('Step2B');
var Step3 = document.getElementById('Step3');
var Step4 = document.getElementById('Step4');
var Step5 = document.getElementById('Step5');
var Step6 = document.getElementById('Step6');
var Step7 = document.getElementById('Step7');
var Step8 = document.getElementById('Step8');
var Step9 = document.getElementById('Step9');

var toStep1 = document.getElementById('toStep1');
var toStep2Yes = document.getElementById('toStep2Yes');
var toStep2No = document.getElementById('toStep2No');
var toStep3 = document.getElementById('toStep3');
var toStep3B = document.getElementById('toStep3B');
var toStep4 = document.getElementById('toStep4');
var toStep5 = document.getElementById('toStep5');
var toStep6 = document.getElementById('toStep6');
var toStep7 = document.getElementById('toStep7');
var toStep8 = document.getElementById('toStep8');
var toStep9 = document.getElementById('toStep9');

var selectIncome = document.getElementById('select-income');
var selectGender = document.getElementById('select-gender');
var inputFirst_name = document.getElementById('input-first_name');
var inputLast_name = document.getElementById('input-last_name');
var inputPhoneNumber = document.getElementById('input-phone_number');
var inputHomeAddress = document.getElementById('input-home_address');
var inputEmail = document.getElementById('input-email');
var inputBirthday = document.getElementById('input-birthday');

toStep1.addEventListener('click', function () {
    Step0.classList.add('hidden');
    Step1.classList.remove('hidden');
});
toStep2Yes.addEventListener('click', function () {
    Step1.classList.add('hidden');
    Step2.classList.remove('hidden');
});
toStep2No.addEventListener('click', function () {
    Step1.classList.add('hidden');
    Step2.classList.remove('hidden');
});
toStep3.addEventListener('click', function () {

    if (selectIncome.value == '') {
        toStep3.disabled = true;

    } else if (selectIncome.value == '$50,000+') {
        toStep3.disabled = false;
        Step2A.classList.add('hidden');
        Step2B.classList.remove('hidden');
    } else if (selectIncome.value == '$0 - $18,999') {
        toStep3.disabled = false;
        Step2.classList.add('hidden');
        Step3.classList.remove('hidden');
    } else if (selectIncome.value == '$19,000 - $35,999') {
        toStep3.disabled = false;
        Step2.classList.add('hidden');
        Step3.classList.remove('hidden');
    } else if (selectIncome.value == '$36,000 - $49,999') {
        toStep3.disabled = false;
        Step2.classList.add('hidden');
        Step3.classList.remove('hidden');
    }
    toStep3.disabled = false;

});

toStep3B.addEventListener('click', function () {
    Step2.classList.add('hidden');
    Step3.classList.remove('hidden')
});
toStep4.addEventListener('click', function () {
    if (selectGender.value == '') {
        toStep4.disabled = true;
    } else {
        Step3.classList.add('hidden');
        Step4.classList.remove('hidden');
    }
    toStep4.disabled = false;
});
toStep5.addEventListener('click', function () {
    if (inputBirthday.value == '') {
        toStep5.disabled = true;
    } else {
    Step4.classList.add('hidden');
    Step5.classList.remove('hidden');
    }
    toStep5.disabled = false;
});
toStep6.addEventListener('click', function () {
    if (inputFirst_name.value == '' || inputLast_name.value == '') {
        toStep6.disabled = true;
    } else {
        Step5.classList.add('hidden');
        Step6.classList.remove('hidden');
    }
    toStep6.disabled = false;
});
toStep7.addEventListener('click', function () {

    if (inputHomeAddress.value == '') {
        toStep7.disabled = true;
    } else {
        Step6.classList.add('hidden');
        Step7.classList.remove('hidden');
    }
    toStep7.disabled = false;
});

const emailExpresion = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
toStep8.addEventListener('click', function () {
    if (emailExpresion.test(inputEmail.value) == false) {
        toStep8.disabled = true;
    } else {
        Step7.classList.add('hidden');
        Step8.classList.remove('hidden');
    }
    toStep8.disabled = false;
});

const without_ = /_/g;
const _ = '_';
toStep9.addEventListener('click', function () {
    
    if (inputPhoneNumber.value.includes(_) || inputPhoneNumber.value == '') {
        toStep9.disabled = true;
    } else {
        Step8.classList.add('hidden');
        Step9.classList.remove('hidden');
    }
    toStep9.disabled = false;
    

    /*
    if (!inputPhoneNumber.test(without_)) {
        toStep9.disabled = true;
    } else {
        Step8.classList.add('hidden');
        Step9.classList.remove('hidden');
    }
    toStep9.disabled = false;
    
    */
});

function valideKey(evt) {
    var code = (evt.which) ? evt.which : evt.keyCode;

    if (code == 8) {
        return true;
    } else if (code >= 48 && code <= 57) {
        return true;
    } else {
        return false;
    }
}


