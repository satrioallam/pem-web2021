function loadContent(){
    var xhr = new XMLHttpRequest();
    var url = "http://localhost/ioo.store/beranda";
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("beranda").innerHTML = this.responseText;
        }
    };
    xhr.open("GET", url, true);
    xhr.send;
}

function loadContent2(){
    var xhr = new XMLHttpRequest();
    var url = "http://localhost/ioo.store/cek_resi";
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("beranda").innerHTML = this.responseText;
        }
    };
    xhr.open("GET", url, true);
    xhr.send;
}

function loadContent3(){
    var xhr = new XMLHttpRequest();
    var url = "http://localhost/ioo.store/konfirmasi";
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("beranda").innerHTML = this.responseText;
        }
    };
    xhr.open("GET", url, true);
    xhr.send;
}

function loadContent4(){
    var xhr = new XMLHttpRequest();
    var url = "http://localhost/ioo.store/kategori";
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("beranda").innerHTML = this.responseText;
        }
    };
    xhr.open("GET", url, true);
    xhr.send;
}

function loadContent5(){
    var xhr = new XMLHttpRequest();
    var url = "http://localhost/ioo.store/bantuan";
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("beranda").innerHTML = this.responseText;
        }
    };
    xhr.open("GET", url, true);
    xhr.send;
}

function loadContent6(){
    var xhr = new XMLHttpRequest();
    var url = "http://localhost/ioo.store/login";
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("beranda").innerHTML = this.responseText;
        }
    };
    xhr.open("GET", url, true);
    xhr.send;
}

function loadContent7(){
    var xhr = new XMLHttpRequest();
    var url = "http://localhost/ioo.store/daftar";
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("form-header").innerHTML = this.responseText;
        }
    };
    xhr.open("GET", url, true);
    xhr.send;
}

function startLog(){
    var a = document.getElementById('user').value + document.getElementById('pass').value;
    var b = ('ioo') + ('221');
    if (a == b){
        var c = document.getElementById('akses').innerHTML = 'Login Successfully';
    }
    else{
        var c = document.getElementById('akses').innerHTML = 'Login Failed';
    };
}