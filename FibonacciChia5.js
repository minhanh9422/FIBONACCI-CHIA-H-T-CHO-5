let soHangThu=1
let P=0
let S=1
let N=0
while (N % 5 !== 0){
P=S
S=N
N=Number(S+P) 
soHangThu++
}
document.write("Số hạng thứ "+soHangThu+" là:"+ N +"<br>")