const key = document.querySelectorAll('.square');
var move = 1;
var turn = true;
function player_1_win () {	
	for(let i=0;i<key.length;i+=3)
    {
        if((key[i].dataset.key === key[i+1].dataset.key )&&(key[i+1].dataset.key ===key[i+2].dataset.key )&&(key[i].dataset.key ==='1'))
            return true;
    }

    for(let i=0;i<3;i++)
    {
        if((key[i].dataset.key==key[i+3].dataset.key)&&(key[i+3].dataset.key==key[i+6].dataset.key)&&(key[i].dataset.key ==='1'))
            return true;
    }
    if((key[0].dataset.key==key[4].dataset.key)&&(key[4].dataset.key==key[8].dataset.key)&&(key[0].dataset.key ==='1'))
    {
        return true;
    }
    if((key[2].dataset.key==key[4].dataset.key)&&(key[4].dataset.key==key[6].dataset.key)&&(key[2].dataset.key ==='1'))
    {
        return true;
    }
    return false;
}
function player_2_win () {
	for(let i=0;i<key.length;i+=3)
    {
        if((key[i].dataset.key === key[i+1].dataset.key )&&(key[i+1].dataset.key ===key[i+2].dataset.key )&&(key[i].dataset.key ==='2'))
            return true;
    }

    for(let i=0;i<3;i++)
    {
        if((key[i].dataset.key==key[i+3].dataset.key)&&(key[i+3].dataset.key==key[i+6].dataset.key)&&(key[i].dataset.key ==='2'))
            return true;
    }
    if((key[0].dataset.key==key[4].dataset.key)&&(key[4].dataset.key==key[8].dataset.key)&&(key[0].dataset.key ==='2'))
    {
        return true;
    }
    if((key[2].dataset.key==key[4].dataset.key)&&(key[4].dataset.key==key[6].dataset.key)&&(key[2].dataset.key ==='2'))
    {
        return true;
    }
    return false;
}
function isFull(){
    for(let i =0;i<key.length;i++)
    {
        if(key[i].dataset.key !='1')
        {
            if(key[i].dataset.key !='2')
               {
                 return false;
               }
        }
    }
return true;
}

function play(){
	console.log(this.dataset.key)
	if(this.dataset.key === '0' && turn){
        if(move%2 == 1){
        	this.innerHTML = `<img src="image/image.png">`;
        	this.dataset.key = '1';
        }else {
        	this.innerHTML = `<img src="image/fork.png">`;
        	this.dataset.key = '2';
        }
        move++;
        if(player_1_win()){
           alert("Player 1 đã thắng!")
           turn = false;
        }
        if(player_2_win()){
        	alert("Player 2 đã thắng!")
        	           turn = false;
        }
        if(isFull() && turn){
        	alert("Hòa!")
        }
	}
}
key.forEach((item) => item.addEventListener('click', play))
var button = document.querySelector('#reset-button')
button.onclick = ()=>{
    // window.location = `file:///C:/Users/lieut/OneDrive/M%C3%A1y%20t%C3%ADnh/Test/Baiii1/index.html`;
    location.reload();
}