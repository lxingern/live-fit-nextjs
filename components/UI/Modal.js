import { useState, useEffect } from "react"
import ReactDOM from "react-dom"

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onClose} />
}

const ModalOverlay = (props) => {
  return (
    <div className="modal">
      <div>{props.children}</div>
    </div>
  )
}

const Modal = (props) => {
  const [isBrowser, setIsBrowser] = useState(false);
  
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (isBrowser) {
    return (
      <>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, document.getElementById('overlays'))}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.getElementById('overlays'))}
      </>
    )
  } else {
    return null
  }
}

export default Modal