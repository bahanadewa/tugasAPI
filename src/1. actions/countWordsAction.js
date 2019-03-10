export const hitungKata = (str)=>{
    var arr = str.split(' ')
    var jumlahKata = arr.length-1
    return {
        type : 'HITUNG_KATA',
        payload : jumlahKata // data yg akan kita kirim ke reducer
    }
}