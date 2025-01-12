var counter = 1;
var small = [];
var medium = [];
var large = [];
var xlarge = [];
        
var view = [];
var view2 = [];
var modal = [];
var modal2 = [];
var close = [];
var closeVouch = [];
var cancel = [];

var voucher = [];
var voucher2 = [];
var modalVouch = [];
var modalVouch2 = [];
var copyBtn = [];
var txtVal = [];
const isPathIndex = window.location.pathname.includes("index");
const isPathBestSellers = window.location.pathname.includes("bestSellers");
const isPathProducts = window.location.pathname.includes("products");

if(isPathIndex){
setInterval(function(){
    const radio1=document.getElementById('radio1');
    const radio2=document.getElementById('radio2');
    const radio3=document.getElementById('radio3');

    radio1.addEventListener('click', function () {
        counter = 1;
    });
    radio2.addEventListener('click', function () {
        counter = 2;
    });
    radio3.addEventListener('click', function () {
        counter = 3;
    });

    document.getElementById('radio' + counter).checked = true;
    counter++
    if(counter > 3){
        counter = 1;
    }        
}, 5000);
}

for(let j = 1; j<7; j++){
    view.push(document.getElementById(`viewShirt${j}`));
    voucher.push(document.getElementById(`voucher-shirt${j}`));
    modalVouch.push(document.getElementById(`modalVouch${j}`));
    copyBtn.push(document.getElementById(`copyBtn${j}`));
    modal.push(document.getElementById(`myModal${j}`));
    txtVal.push(document.getElementById(`txtVal${j}`));
    closeVouch.push(document.getElementsByClassName("closeVoucher")[j-1]);
    close.push(document.getElementsByClassName("close")[j-1]);
    cancel.push(document.getElementsByClassName("cancel")[j-1]);
    small.push(document.getElementsByClassName("small")[j-1]);
    medium.push(document.getElementsByClassName("medium")[j-1]);
    large.push(document.getElementsByClassName("large")[j-1]);
    xlarge.push(document.getElementsByClassName("xlarge")[j-1]);
}

for(let j = 1; j<4; j++){
    view2.push(document.getElementById(`viewShirt2${j}`));
    modal2.push(document.getElementById(`myModal2${j}`));
    voucher2.push(document.getElementById(`voucher-shirt2${j}`));
    modalVouch2.push(document.getElementById(`modalVouch2${j}`));
}

if(isPathBestSellers){
    for(let i = 0; i<3; i++){
        view2[i].addEventListener('click', function(){
            modal2[i].style.display = "block";
        })
        voucher2[i].addEventListener('click', function(){
            modalVouch2[i].style.display = "block";
        })
    }

    for(let i=0; i<3; i++){
        copyBtn[i].addEventListener('click', function(){
            var tempVal = txtVal[i].innerText;
            navigator.clipboard.writeText(tempVal);
        })
    }
    window.addEventListener('click', function(event){
        for(let i = 0; i<6; i++){
            if(event.target == modal2[i] || event.target == modalVouch2[i]) {
                modal2[i].style.display = "none";
                modalVouch2[i].style.display = "none";
            }
        }
    })

    for(let i = 0; i<3; i++){
        close[i].addEventListener('click', function(){
            modal2[i].style.display = "none";
        })
        closeVouch[i].addEventListener('click', function(){
            modalVouch2[i].style.display = "none";
        })
        cancel[i].addEventListener('click', function(){
            modal2[i].style.display = "none";
        })
    }

    for(let i=0; i<3; i++){
        small[i].addEventListener('click', function(){
            small[i].style.color = "black";
            small[i].style.background = "rgb(255, 200, 0)";
            //
            medium[i].style.color = "white";
            medium[i].style.background = "black";
            large[i].style.color = "white";
            large[i].style.background = "black";
            xlarge[i].style.color = "white";
            xlarge[i].style.background = "black";
            document.getElementById(`price${i+1}`).textContent = "439 PHP";
        })
        medium[i].addEventListener('click', function(){
            medium[i].style.color = "black";
            medium[i].style.background = "rgb(255, 200, 0)";
            //
            small[i].style.color = "white";
            small[i].style.background = "black";
            large[i].style.color = "white";
            large[i].style.background = "black";
            xlarge[i].style.color = "white";
            xlarge[i].style.background = "black";
            document.getElementById(`price${i+1}`).textContent = "459 PHP";
        })
        large[i].addEventListener('click', function(){
            large[i].style.color = "black";
            large[i].style.background = "rgb(255, 200, 0)";
            //
            medium[i].style.color = "white";
            medium[i].style.background = "black";
            small[i].style.color = "white";
            small[i].style.background = "black";
            xlarge[i].style.color = "white";
            xlarge[i].style.background = "black";
            document.getElementById(`price${i+1}`).textContent = "479 PHP";
        })
        xlarge[i].addEventListener('click', function(){
            xlarge[i].style.color = "black";
            xlarge[i].style.background = "rgb(255, 200, 0)";
            //
            medium[i].style.color = "white";
            medium[i].style.background = "black";
            large[i].style.color = "white";
            large[i].style.background = "black";
            small[i].style.color = "white";
            small[i].style.background = "black";
            document.getElementById(`price${i+1}`).textContent = "499 PHP";
        })
    }
}

if(isPathProducts){
    for(let i = 0; i<6; i++){
        copyBtn[i].addEventListener('click', function(){
            var tempVal = txtVal[i].innerText;
            navigator.clipboard.writeText(tempVal);
        })
    }

    for(let i = 0; i<6; i++){
        view[i].addEventListener('click', function(){
            modal[i].style.display = "block";
        })
        voucher[i].addEventListener('click', function(){
            modalVouch[i].style.display = "block";
        })
    }

    for(let i = 0; i<6; i++){
        close[i].addEventListener('click', function(){
            modal[i].style.display = "none";
        })
        closeVouch[i].addEventListener('click', function(){
            modalVouch[i].style.display = "none";
        })
        cancel[i].addEventListener('click', function(){
            modal[i].style.display = "none";
        })
    }

    window.addEventListener('click', function(event){
        for(let i = 0; i<6; i++){
            if(event.target == modal[i] || event.target == modalVouch[i]) {
                modal[i].style.display = "none";
                modalVouch[i].style.display = "none";
            }
        }
    })

    for(let i=0; i<6; i++){
        small[i].addEventListener('click', function(){
            small[i].style.color = "black";
            small[i].style.background = "rgb(255, 200, 0)";
            //
            medium[i].style.color = "white";
            medium[i].style.background = "black";
            large[i].style.color = "white";
            large[i].style.background = "black";
            xlarge[i].style.color = "white";
            xlarge[i].style.background = "black";
            document.getElementById(`price${i+1}`).textContent = "439 PHP";
        })
        medium[i].addEventListener('click', function(){
            medium[i].style.color = "black";
            medium[i].style.background = "rgb(255, 200, 0)";
            //
            small[i].style.color = "white";
            small[i].style.background = "black";
            large[i].style.color = "white";
            large[i].style.background = "black";
            xlarge[i].style.color = "white";
            xlarge[i].style.background = "black";
            document.getElementById(`price${i+1}`).textContent = "459 PHP";
        })
        large[i].addEventListener('click', function(){
            large[i].style.color = "black";
            large[i].style.background = "rgb(255, 200, 0)";
            //
            medium[i].style.color = "white";
            medium[i].style.background = "black";
            small[i].style.color = "white";
            small[i].style.background = "black";
            xlarge[i].style.color = "white";
            xlarge[i].style.background = "black";
            document.getElementById(`price${i+1}`).textContent = "479 PHP";
        })
        xlarge[i].addEventListener('click', function(){
            xlarge[i].style.color = "black";
            xlarge[i].style.background = "rgb(255, 200, 0)";
            //
            medium[i].style.color = "white";
            medium[i].style.background = "black";
            large[i].style.color = "white";
            large[i].style.background = "black";
            small[i].style.color = "white";
            small[i].style.background = "black";
            document.getElementById(`price${i+1}`).textContent = "499 PHP";
        })
    }
}


