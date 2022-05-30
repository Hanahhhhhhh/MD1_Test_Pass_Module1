function giaiPhuongTrinh() {
    let a =5
    let b =8
    if(a==0) {
        if (b == 0) {
            document.writeln('phuong trinh vo so nghiem')
        } else {
            document.writeln('phuong trinh vo nghiem')
        }
    }else {
        let x =-b/a;
        document.writeln(`nghiem x = ${x}`)
    }
}
giaiPhuongTrinh();

