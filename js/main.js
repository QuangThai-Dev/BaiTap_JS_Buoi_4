// Sắp xếp ba số nguyên theo thứ tự tăng dần
/**
 * b1: Input
 *      - Nhập vào ba số nguyên
 * b2: handle
 *  -   Tạo ba biến số nguyên a, b, c và một biến temp 
 *  -   so sánh hai số a và b: nếu a > b thì hoán đổi vị trí gán temp = a , a = b , b = temp;
 *  -   so sánh hai số a và c: nếu a > c thì hoán đổi vị trí gán temp = a, a = c, c = temp;
 *  -   so sánh hai số b và c: nếu b > c thì hoán đổi vị trí gán temp = b, b = c, c = temp;
 * b3: output
 *  - Xuất ra màn hình ba số theo thứ tự tăng dần
 */
var sapXep = document.getElementById('sapXep')
var thongTin = document.getElementById('thongTin');
thongTin.style.display = 'none';
var btnSapXep = document.getElementById('btnSapXep').onclick = function() {
    var soThuNhat = document.getElementById('soThuNhat').value;
    var soThuHai = document.getElementById('soThuHai').value;
    var soThuBa = document.getElementById('soThuBa').value;
    var temp;
    if (soThuNhat > soThuHai) {
        temp = soThuNhat;
        soThuNhat = soThuHai;
        soThuHai = temp
        console.log(temp, soThuNhat, soThuHai)
    }
    if (soThuNhat > soThuBa) {
        temp = soThuNhat;
        soThuNhat = soThuBa;
        soThuBa = temp;
        console.log(temp, soThuNhat, soThuBa)
    }
    if (soThuHai > soThuBa) {
        temp = soThuHai;
        soThuHai = soThuBa;
        soThuBa = temp;
        console.log(temp, soThuHai, soThuBa)
    }
    thongTin.style.display = 'block';
    sapXep.innerHTML = 'Các số theo thứ tự tăng dần: ' + soThuNhat + ' - ' + soThuHai + ' - ' + soThuBa;

}


// Bài 2
/**
 * b1: Input
 *  - Nhập yêu cầu của mấy
 * b2: Handle
 *  - Tạo biến chaoHoi và biến chao
 *  - Xét điều kiện lời chào:
 *      + Nếu chaoHoi = 'B' thì gán chao = 'Chào Bố'  
 *      + Nếu chaoHoi = 'M' thì gán chao = 'Chào Mẹ'
 *      + Nếu chaoHoi = 'A' thì gán chao = 'Chào Anh Trai'
 *      + Nếu chaoHoi = 'E' thì gán chao = 'Chào Em Gái'
 * b2: OutPut
 *  Xuất lời lời chào
 */
var thongTinChao = document.getElementById('thongTinChao');
var loiChao = document.getElementById('loiChao');
thongTinChao.style.display = 'none';
var btnChaoHoi = document.getElementById('btnChaoHoi').onclick = function() {
    var chaoHoi = document.getElementById('chaoHoi').value;
    var chao = '';
    switch (chaoHoi) {
        case 'B':
            chao = "Chào Bố";
            break;
        case 'M':
            chao = "Chào Mẹ";
            break;
        case 'A':
            chao = "Chào Anh Trai";
            break;
        case 'E':
            chao = "Chào Em Gái";
            break;
        default:
            chao = "Ai sử dụng máy??";
    }
    thongTinChao.style.display = 'block';
    loiChao.innerHTML = chao;

}

// Bài 3:
/**
 * b1:Input
 *  - Nhập ba số nguyên
 * b2: Handle
 *  - tạo ba biến số nguyên soNguyenMot,soNguyenHai,soNguyenBa,demChan,demLe
 *  - Xét điều kiện: Nếu soNguyenMot % 2 == 0 thì tăng demChan ngược lại nếu không thỏa thì tăng demLe
 *                   Nếu soNguyenHai % 2 == 0 thì tăng demChan ngược lại nếu không thỏa thì tăng demLe
 *                   Nếu soNguyenBa % 2 == 0 thì tăng demChan ngược lại nếu không thỏa thì tăng demLe
 * b3:Output
 *  - Xuất ra bao nhiêu số chẵn, bao nhiêu số lẻ
 */
var thongTinDem = document.getElementById('thongTinDem');
thongTinDem.style.display = 'none';
var soChan = document.getElementById('soChan');
var soLe = document.getElementById('soLe');
var btnDem = document.getElementById('btnDem').onclick = function() {
    var soNguyenMot = document.getElementById('soNguyenMot').value;
    var soNguyenHai = document.getElementById('soNguyenHai').value;
    var soNguyenBa = document.getElementById('soNguyenBa').value;
    var demChan = 0;
    var demLe = 0;
    if (soNguyenMot % 2 == 0) {
        demChan++;
    } else {
        demLe++;
    }
    if (soNguyenHai % 2 == 0) {
        demChan++;
    } else {
        demLe++;
    }
    if (soNguyenBa % 2 == 0) {
        demChan++;
    } else {
        demLe++
    }
    thongTinDem.style.display = 'block';
    soChan.innerHTML = 'Có ' + demChan + ' số chẵn';
    soLe.innerHTML = 'Có ' + demLe + ' số lẻ';
}

// Bài 4:
/**
 * b1:Input:
 *  - Nhập ba cạnh tam giác
 * b2:Handle:
 *  - Tạo 3 biến là ba cạnh tam giác: canhA, canhB, canhC
 *  - Xét điều kiện: canhA == canhB && canhA == canhC && canhB == canhC : tam giác đều
 *                   canhA == canhB || canhA == canhC || canhB == canhC : tam giác cân
 *                   anhA * canhA == canhB * canhB + canhC * canhC || canhB * canhB == canhA * canhA + canhC * canhC || 
 *                   canhC * canhC == canhA * canhA + canhB * canhB : Tam giác vuông
 * b3:Output:
 *  - Xuất ra tam giác đó làm tam giác gì
 */
var thongTinTamGiac = document.getElementById('thongTinTamGiac');
thongTinTamGiac.style.display = 'none';
var tamGiac = document.getElementById('tamGiac');
var btnTamGiac = document.getElementById('btnTamGiac').onclick = function() {
        var canhA = document.getElementById('canhA').value;
        var canhB = document.getElementById('canhB').value;
        var canhC = document.getElementById('canhC').value;
        var ketLuan = '';
        if (canhA == canhB && canhA == canhC && canhB == canhC) {
            ketLuan = 'Tam giac đều';
        } else if (canhA == canhB || canhA == canhC || canhB == canhC) {
            ketLuan = 'Tam giác cân';
        } else if (canhA * canhA == canhB * canhB + canhC * canhC || canhB * canhB == canhA * canhA + canhC * canhC || canhC * canhC == canhA * canhA + canhB * canhB) {
            ketLuan = 'Tam giác vuông'
        } else {
            ketLuan = 'ba cạnh trên không phải của một tam giác'
        }
        thongTinTamGiac.style.display = 'block';
        tamGiac.innerHTML = ketLuan;
    }
    // if ((Number(canhA) * Number(canhA) == Number(canhB) * Number(canhB) + Number(canhC) * Number(canhC)) || (Number(canhB) * Number(canhB) == Number(canhA) * Number(canhA) + Number(canhC) * Number(canhC)) || (Number(canhC) * Number(canhC) == Number(canhA) * Number(canhA) + Number(canhB) * Number(canhB)))