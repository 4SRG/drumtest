import { useEffect } from "react";


const Drums = (props) => {
    function handle(){
        if(props.on === true){
        const aud = document.getElementById(`${props.keyTrigger}`)
        const display = document.getElementById(`display`)
        const audDiv = document.getElementById(`${props.keyTrigger}-container`)

        audDiv.classList.add('bg-blue-950')
        audDiv.classList.remove('back')
        setTimeout(()=>{
            audDiv.classList.remove('bg-blue-950')
            audDiv.classList.add('back')
        },100)

        display.textContent = props.description

        aud.currentTime = 0;
        aud.play()
    }
        else{
            return
        }

    }




    useEffect(() => {
        const handleKey = (event) => {
            if(event.key.toUpperCase() === props.keyTrigger){
                handle()
            }
        }

        window.addEventListener("keydown", handleKey)
        
        return () => {
            window.removeEventListener("keydown", handleKey)
        }
    
    }, [props.keyTrigger && props.on])



    return (
        <div className="drum-pad cursor-pointer back"  id={`${props.keyTrigger}-container`} onClick={handle} >
            {props.keyTrigger}
            <audio src={props.url} id={props.keyTrigger} className="clip"></audio>
        </div>
    )
}

export default Drums