/*
present = 15
grade = 85

present 10 siswa tidak lulus
grade lebih dari 80 = siswa lulus dengan nilai a
grade diatas 70 = B
grade diatas 60 = C
grade diatas 50 = siswa hanya bisa lulus jika present 15
dibawah 50 siswa tidak lulus
*/

let grade = 50
let present = 10

if (present < 10){
    console.log('Siswa Tidak Lulus');
} else if(grade > 0 && grade <= 100) {
    if (grade >= 80){
        console.log('Siswa Lulus Dengan Nilai A');
    } else if (grade >= 70 ){
        console.log('Siswa Lulus Dengan Nilai B');
    } else if (grade >= 60 ){
        console.log('Siswa Lulus Dengan Nilai C');
    } else if (grade >= 50 ){
        if (present >= 15){
            console.log('Siswa Lulus Dengan Nilai D');
        } else {
            console.log('Siswa Tidak Lulus');
        }
    } else if(grade < 50){
        console.log('Siswa Tidak Lulus');
    }
}  else {
    console.log('Data Invalid');
}