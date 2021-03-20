function validate() {
    document.getElementById('email').addEventListener('change',onChard);

    function onChard(ev){
        const email = ev.target.value;
        if(/^[a-z]+@[a-z]+\.[a-z]+$/.test(email)){
            ev.target.className = '';
        }else{
            ev.target.className = 'error';
        }
    }
}