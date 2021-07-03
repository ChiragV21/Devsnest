var head = document.querySelector('.head');

var BSeat = 0;
var TSeat = 60;

function Booking(add) {
    if (add) {
        BSeat--;
        TSeat++;
    }
    else {
        BSeat++;
        TSeat--;
    }
}
function display() {
    head.innerHTML = `<div class = "seat"><h3>BOOKED SEATS: ${BSeat}</h3> <h3>REMAINING SEATS: ${TSeat}</h3></div>`
}
display();

var cells = document.querySelectorAll('.cols');
cells.forEach(cell => {
    cell.addEventListener('click', e => {
        if (cell.classList.contains('check')) {
            cell.classList.remove('check');
            Booking(true);
            display();

        }
        else {
            cell.classList.add('check')
            Booking(false);
            display();
        }
    });
});