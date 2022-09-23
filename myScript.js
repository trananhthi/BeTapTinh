function cong(a, b) {
    var tong = a + b;
    return tong;
}

function tru(a, b) {
    var hieu = a - b;
    return hieu;
}

function nhan(a, b) {
    var tich = a * b;
    return tich;
}

function chia(a, b) {
    var thuong = a / b;
    return thuong;
}

function add_TextNode(tag, text, element) {
    const node = document.createElement(tag);
    const textnode = document.createTextNode(text);
    node.appendChild(textnode);
    element.appendChild(node);
}

function Tinh() {
    var noti = document.getElementById("text-noti");
    var result = document.getElementById("box3")
    var checkbox = document.getElementsByName("cal");
    for (var i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked == true) {
            var value_checkbox = checkbox[i].value;
        }
    }
    //kiểm tra checkbox có đang đươc check không
    if (value_checkbox == undefined) {
        noti.innerText = "Chưa chọn phép tính!!!";
    }
    else {
        var num1 = document.getElementById("box1").value;
        var num2 = document.getElementById("box2").value;

        if (num2 == "" && num1 == "") {
            noti.innerHTML = "Chưa nhập ô";
            add_TextNode("i", "Số thứ nhất", noti);
            add_TextNode("l", "và", noti);
            add_TextNode("i", "Số thứ hai", noti);
        }
        else if (num2 == "") {
            noti.innerHTML = "Chưa nhập ô";
            add_TextNode("i", "Số thứ hai", noti);
        }
        else if (num1 == "") {
            noti.innerHTML = "Chưa nhập ô";
            add_TextNode("i", "Số thứ nhất", noti);
        }
        else {
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);
            if (isNaN(num1) && isNaN(num2)) {
                noti.innerHTML = "Giá trị nhập ở ô";
                add_TextNode("i", "Số thứ nhất", noti);
                add_TextNode("l", "và", noti);
                add_TextNode("i", "Số thứ hai", noti);
                add_TextNode("l", "không phải số", noti);
            }
            else if (isNaN(num1)) {
                noti.innerHTML = "Giá trị nhập ở ô";
                add_TextNode("i", "Số thứ nhất", noti);
                add_TextNode("l", "không phải số", noti);
            }
            else if (isNaN(num2)) {
                noti.innerHTML = "Giá trị nhập ở ô";
                add_TextNode("i", "Số thứ hai", noti);
                add_TextNode("l", "không phải số", noti);
            }
            else {
                switch (value_checkbox) {
                    case "Cộng":
                        var tong = cong(num1, num2);
                        result.value = tong;
                        break;
                    case "Trừ":
                        var hieu = tru(num1, num2);
                        result.value = hieu;
                        break;
                    case "Nhân":
                        var tich = nhan(num1, num2);
                        result.value = tich;
                        break;
                    default:
                        if (num2 == 0) {
                            noti.innerHTML = "Không tồn tại phép chia cho số 0";
                            result.value = "";
                        }
                        else {
                            var thuong = chia(num1, num2);
                            result.value = thuong;
                        }
                }
            }
        }
    }
}