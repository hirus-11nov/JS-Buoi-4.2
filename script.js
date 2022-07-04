//Bài 1: Tìm ngày tiếp theo và ngày trước đó
/**
 * Input: day, month, year
 * Process: 1. Lấy input
 *          2. Sử dụng switch case và lập biểu thức điều kiện cho các trường hợp:
 *              - Ngày tiếp theo = ++day, month, year
 *              - Ngày trước đó = --day, month, year
 *              - Ngày tiếp theo của ngày cuối tháng (28/2, 30 hoặc 31): day = 1, ++month, year
 *              - Ngày trước đó của ngày đầu tháng: day = (28/2, 30 hoặc 31), --month, year
 *              - Ngày tiếp theo của ngày cuối năm: day = 1, month = 1, ++year
 *              - Ngày trước đó của ngày đầu năm: day = 31, month = 12, --year
 *          3. Log ra màn hình ngày tiếp theo và ngày trước đó
 * Output: Ngày tiếp theo và ngày trước đó
 */
console.log("-----Bài 1: Tìm ngày tiếp theo và ngày trước đó-----");
var day = 11;
var month = 11;
var year = 2069;
var newDay = day;
var newMonth = month;
var newYear = year;
var next;
var prev;

switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        if (day === 1) {
            next = ++day + "/" + month + "/" + year;
            if (month === 1) {
                prev = ((newDay = 31) + "/" + (newMonth = 12) + "/" + --year);
            } else if (month === 8) {
                prev = ((newDay = 31) + "/" + --month + "/" + year);
            } else {
                prev = ((newDay = 30) + "/" + --month + "/" + year);
            }
        } else if (day === 31) {
            month === 12 ? next = ((newDay = 1) + "/" + (newMonth = 1) + "/" + ++newYear)
                : next = ((newDay = 1) + "/" + ++newMonth + "/" + year);
            prev = --day + "/" + month + "/" + year;
        } else {
            next = ++day + "/" + month + "/" + year;
            prev = --newDay + "/" + month + "/" + year;
        }
        console.log("Ngày tiếp theo là:", next);
        console.log("Ngày trước đó là:", prev);
        break;

    // Tháng 2 mặc định có 28 ngày, không phân biệt năm nhuận
    case 2:
    case 4:
    case 6:
    case 9:
    case 11:
        if (day === 1) {
            next = ++day + "/" + month + "/" + year;
            prev = ((newDay = 31) + "/" + --month + "/" + year);
        } else if (day === 30 || (day === 28 && month === 2)) {
            next = ((newDay = 1) + "/" + ++newMonth + "/" + year);
            prev = --day + "/" + month + "/" + year;
        } else {
            next = ++day + "/" + month + "/" + year;
            prev = --newDay + "/" + month + "/" + year;
        }
        console.log("Ngày tiếp theo là:", next);
        console.log("Ngày trước đó là:", prev);
        break;

    default:
        break;
}

//Bài 2: Kiểm tra tháng có bao nhiêu ngày
/**
 * Input: month, year
 * Process: 1. Lấy input
 *          2. Sử dụng switch case và lập biểu thức điều kiện cho các trường hợp:
 *              - Tháng 1,3,5,7,8,10,12: có 31 ngày
 *              - Tháng 4,6,9,11: Có 30 ngày
 *              - Tháng 2 năm nhuận có 29 ngày: Năm chia hết cho 4 nhưng không chia hết cho 100. Hoặc năm chia hết cho 400.
 *              - Tháng 2 năm không nhuận có 28 ngày.
 *          3. Log ra màn hình số ngày trong tháng
 * Output: Số ngày trong tháng
 */
console.log("-----Bài 2: Kiểm tra tháng có bao nhiêu ngày-----");
var month1 = 2;
var year1 = 2100;

switch (month1) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("Tháng " + month1 + " có 31 ngày!");
        break;

    case 4:
    case 6:
    case 9:
    case 11:
        console.log("Tháng " + month1 + " có 30 ngày!");
        break;

    case 2:
        if ((year1 % 4 === 0 && year1 % 100 !== 0) || (year1 % 400 === 0)) {
            console.log("Tháng " + month1 + " năm " + year1 + " có 29 ngày! (Năm nhuận)");
        } else {
            console.log("Tháng " + month1 + " năm " + year1 + " có 28 ngày! (Năm không nhuận)");
        }
        break;

    default:
        break;
}

//Bài 3: Đọc số nguyên có 3 chữ số
/**
 * Input: Số nguyên 3 chữ số
 * Process: 1. Lấy input
 *          2. Lấy ra số Hàng chục, trăm, đơn vị
 *          3. Dùng switch case để đọc số:
 *              - Hàng trăm
 *              - Hàng chục
 *              - Hàng đơn vị
 *          4. Log ra màn hình cách đọc số nguyên 3 chữ số
 * Output: Cách đọc số nguyên 3 chữ số
 */
console.log("-----Bài 3: Đọc số nguyên có 3 chữ số-----");
var number = 315;
var hundreds = Math.floor(number / 100);
var tens = Math.floor(number / 10 % 10);
var units = number % 10;

switch (hundreds) {
    case 1:
        hundreds = "Một trăm";
        break;
    case 2:
        hundreds = "Hai trăm";
        break;
    case 3:
        hundreds = "Ba trăm";
        break;
    case 4:
        hundreds = "Bốn trăm";
        break;
    case 5:
        hundreds = "Năm trăm";
        break;
    case 6:
        hundreds = "Sáu trăm";
        break;
    case 7:
        hundreds = "Bảy trăm";
        break;
    case 8:
        hundreds = "Tám trăm";
        break;
    case 9:
        hundreds = "Chín trăm";
        break;
    default:
        break;
}

switch (tens) {
    case 0:
        units === 0 ? tens = "" : tens = "lẻ";
        break;
    case 1:
        tens = "mười";
        break;
    case 2:
        tens = "hai mươi";
        break;
    case 3:
        tens = "ba mươi";
        break;
    case 4:
        tens = "bốn mươi";
        break;
    case 5:
        tens = "năm mươi";
        break;
    case 6:
        tens = "sáu mươi";
        break;
    case 7:
        tens = "bảy mươi";
        break;
    case 8:
        tens = "tám mươi";
        break;
    case 9:
        tens = "chín mươi";
        break;
    default:
        break;
}

switch (units) {
    case 0:
        units = "";
        break;
    case 1:
        tens === "lẻ" ? units = "một" : units = "mốt";
        break;
    case 2:
        units = "hai";
        break;
    case 3:
        units = "ba";
        break;
    case 4:
        units = "bốn";
        break;
    case 5:
        tens === "lẻ" ? units = "năm" : units = "lăm";
        break;
    case 6:
        units = "sáu";
        break;
    case 7:
        units = "bảy";
        break;
    case 8:
        units = "tám";
        break;
    case 9:
        units = "chín";
        break;
    default:
        break;
}
console.log(hundreds, tens, units);

//Bài 4: Tên sinh viên xa trường nhất
/**
 * Input: Tên sinh viên, tọa độ từng sinh viên và tọa độ trường học
 * Process:
 *      1.Lấy input.
 *      2.Tính khoảng cách của từng sinh viên đến trường học: d = căn bậc 2 ((x-x0)^2 + (y-y0)^2);
 *      3.Lập biểu thức điều kiện so sánh từng sinh viên
 *      4.Log ra màn hình kết quả sinh viên xa trường nhất
 * Output: Sinh viên xa trường nhất
 */
console.log("-----Bài 4: Tên sinh viên xa trường nhất-----");
var x0 = 5;
var y0 = 5;
var name1 = "AAA";
var x1 = 20;
var y1 = 5;
var name2 = "BBB";
var x2 = 1;
var y2 = 15;
var name3 = "CCC";
var x3 = 10;
var y3 = 1;
var d1, d2, d3;
d1 = Math.sqrt(Math.pow((x1 - x0), 2) + Math.pow((y1 - y0), 2));
d2 = Math.sqrt(Math.pow((x2 - x0), 2) + Math.pow((y2 - y0), 2));
d3 = Math.sqrt(Math.pow((x2 - x0), 2) + Math.pow((y3 - y0), 2));
var result;

if (d1 > d2 && d1 > d3) {
    result = name1;
}
else if (d2 > d1 && d2 > d3) {
    result = name2;
} else {
    result = name3;
}
console.log(result, "là sinh viên xa trường nhất");