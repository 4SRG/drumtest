import { useCallback, useEffect } from "react";

const Drums = (props) => {
    const handle = useCallback(() => {
        if (props.on) {
            const aud = document.getElementById(`${props.keyTrigger}`);
            const display = document.getElementById(`display`);
            const audDiv = document.getElementById(`${props.keyTrigger}-container`);

            // Check if elements exist to avoid errors
            if (!aud || !display || !audDiv) {
                console.error("Missing elements:", { aud, display, audDiv });
                return;
            }

            // Add and remove animation classes
            audDiv.classList.add("bg-blue-950");
            audDiv.classList.remove("back");
            setTimeout(() => {
                audDiv.classList.remove("bg-blue-950");
                audDiv.classList.add("back");
            }, 100);

            // Update display text and play audio
            display.textContent = props.description;
            aud.currentTime = 0;
            aud.play().catch((err) =>
                console.error("Audio play error:", err)
            ); // Handle potential autoplay restrictions
        } else {
            return;
        }
    }, [props.on, props.keyTrigger, props.description]);

    useEffect(() => {
        const handleKey = (event) => {
            if (event.key.toUpperCase() === props.keyTrigger) {
                handle();
            }
        };

        // Add keydown listener
        window.addEventListener("keydown", handleKey);

        // Cleanup listener on unmount
        return () => {
            window.removeEventListener("keydown", handleKey);
        };
    }, [props.keyTrigger, handle]);

    return (
        <div
            className="drum-pad cursor-pointer back"
            id={`${props.keyTrigger}-container`}
            onClick={handle}
        >
            {props.keyTrigger}
            <audio
                src={props.url}
                id={props.keyTrigger}
                className="clip"
            ></audio>
        </div>
    );
};

export default Drums;
