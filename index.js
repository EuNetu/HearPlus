const interval = setInterval(()=> {
    const header = document.querySelector("._1R3Un")
    if(header){
        console.log(header)
        clearInterval(interval)


        const button = document.createElement("button")
        button.innerHTML = "2x"
        button.classList.add("twoTimesButton")
        var flag = 0
        
        button.addEventListener("click", ()=>{
            if(flag == 0){
                const audios = document.querySelectorAll("audio")
                console.log(audios)
                audios.forEach((audio)=>{
                    console.log(audio)
                    audio.playbackRate = 2;
                    flag = 1
                })
            }else{
                const audios = document.querySelectorAll("audio")
                console.log(audios)
                audios.forEach((audio)=>{
                    console.log(audio)
                    audio.playbackRate = 1;
                    flag = 0
                })
            }

        })

        header.appendChild(button)
    }
},1000)

