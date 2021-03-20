function attachGradientEvents() {
    document.getElementById('gradient').addEventListener('mousemove',onMove )

    function onMove(event){
        const offsetX = event.offsetX
        const percent = Math.floor(offsetX / event.target.clientWidth * 100)
        console.log(percent);

        document.getElementById('result').textContent = `${percent}%`;
    }
}