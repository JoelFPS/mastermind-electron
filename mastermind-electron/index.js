function difficultyChoose(){
    let master = "";
    let difficulty = document.getElementById('difficulty');
    let selected = difficulty.selectedIndex;
    if(selected == 0){
        window.ipcRenderer.send('openPage','masterhard');
    }else{
        window.ipcRenderer.send('openPage','mastereasy');
    }
    
}


