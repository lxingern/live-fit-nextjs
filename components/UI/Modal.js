import { useState, useEffect } from "react"
import ReactDOM from "react-dom"

const Backdrop = () => {
  return <div className="backdrop" />
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
        {ReactDOM.createPortal(<Backdrop />, document.getElementById('overlays'))}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.getElementById('overlays'))}
      </>
    )
  } else {
    return null
  }
}

export default Modal