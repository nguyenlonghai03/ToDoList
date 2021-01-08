var input = document.querySelector('#valueInput'); //Cẩn thận trong ngoài khi lấy giá trị
var btn = document.getElementById('addBtn');

input.addEventListener('keyup', ( e ) => {
    (e.keyCode === 13 ? addList() : null);
})

btn.addEventListener('click', addList);
function addList() {
    var unfinished = document.getElementById('unfinished');
    var finished = document.getElementById('finished');

    var newLi = document.createElement('li');

    // Tạo 2 nút BTN

    var checkBtn = document.createElement('button');
    var delBtn = document.createElement('button');
    
    checkBtn.className = 'btn1';
    delBtn.className = 'btn1';

    checkBtn.innerHTML = '<i class="fa fa-check-circle" aria-hidden="true"></i>';
    delBtn.innerHTML = '<i class="fa fa-trash icon2" aria-hidden="true"></i>';


    if(input.value !== '') {
        newLi.textContent = input.value;
        input.value = '';
        unfinished.appendChild(newLi);
        newLi.appendChild(delBtn);
        newLi.appendChild(checkBtn);
        
        checkBtn.addEventListener('click', function() {
            var parent = this.parentNode; //Đang gọi li
            console.log(parent);
            parent.remove();
            parent.className = 'line';
            finished.appendChild(parent);
            checkBtn.style.display = 'none';
        })
        delBtn.addEventListener('click', function() {
            var parent = this.parentNode; //Đang gọi li
            console.log(parent);
            parent.remove();
        })
    }
}