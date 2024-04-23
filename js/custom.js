var toStep1 = document.getElementById('toStep1');
var preStepsArea = document.getElementById('preStepsArea');
var StepsArea = document.getElementById('StepsArea');

toStep1.addEventListener('click', function() {
    preStepsArea.classList.add('hidden');
    StepsArea.classList.remove('hidden');
});
