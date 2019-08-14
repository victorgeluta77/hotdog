        let btn = document.getElementById('createHotdog');

        btn.onclick =(event)=>{
            let target = event.target;
            if (target.className == 'btn'){
                function createDialogWindow(){
                    let modalWindow = document.createElement('div');
                    modalWindow.setAttribute('id','modalWindow');
                    modalWindow.setAttribute('class','modalWindowBackground');
                    let dialogWin = document.createElement('div');
                    dialogWin.setAttribute('id',"dialogWind");
                    dialogWin.setAttribute('class','dialog');
                    let p = document.createElement('p');
                    p.setAttribute('class','txtHead');
                    p.innerHTML='HotDot created';
                    dialogWin.appendChild(p);
                    let btn = document.createElement('button');
                    btn.innerHTML = 'Ok';
                    btn.setAttribute('id','btnOk');
                    btn.setAttribute('class','btnClick');
                    dialogWin.appendChild(btn);
                    modalWindow.appendChild(dialogWin);
                    document.body.appendChild(modalWindow);
                      console.log(modalWindow);
                }
                createDialogWindow();
                function getE(a){
                    return document.getElementById(a);
                }  
                function modalWindowOpen(){ 
                    getE('btnOk').onclick = ()=>getE("modalWindow").remove();
                    }
                    modalWindowOpen();
            }
            
        };
        
        