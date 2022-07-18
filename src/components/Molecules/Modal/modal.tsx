import {Modal, ModalContent, ModalOverlay} from '@chakra-ui/modal'





interface ModalProps {
    open: boolean,
    onClose: () => void,
}




const CustomModal: React.FC<ModalProps> = ({
    onClose,
    open,
    children
}) => {



    console.log(open)

    return (
        <Modal isOpen={open} isCentered={true} closeOnOverlayClick={false} autoFocus={false} onClose={onClose}>
         
            <ModalContent width={'100%'} maxW='53.75rem' background={'transparent'}>
                <div className='flex justify-center pt-14 pb-16 border-4 border-accent shadow-modal  '
                style={{
                    backdropFilter: 'blur(40px)'
                }}
                >
                    {children}
                </div>
            </ModalContent>
        </Modal>
    )
}




export default CustomModal