const interests = document.querySelector('.interests_main');
const a = interests.getElementsByClassName('interest__check');
console.log(a)


function check(checked = true) {
    if(a[0].checked === checked){
        a[1].checked = checked;
        a[2].checked = checked;
    }
}

function check1(checked = true) {
    if(a[3].checked === checked){
        a[4].checked = checked;
        a[5].checked = checked;
    }
}

a[0].onclick = checkAll;
a[3].onclick = checkAll;


function checkAll(e) {
    check();
    check1();
    e.target.onclick = uncheckAll;
}

function uncheckAll(e) {
    check(false);
    check1(false);
    e.target.onclick = checkAll;
}







