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

const Modal = () => {
  return (
    <>
      <Backdrop />
      <ModalOverlay />
    </>
  )
}

export default Modal