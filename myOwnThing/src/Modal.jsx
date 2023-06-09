import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
    const elRef = useRef(null);
    const modalRoot = document.getElementById("modal");

    if (!elRef.current) {
        elRef.current = document.createElement('div')
    }

    useEffect(() => {
        modalRoot.appendChild(elRef.current);

        //componentWillUnmount
        return () => modalRoot.removeChild(elRef.current);
    }, [])

    return createPortal(<div>{children}</div>, elRef.current)
}

export default Modal;