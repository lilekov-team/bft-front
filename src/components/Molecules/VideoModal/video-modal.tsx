import { Modal, ModalContent, ModalOverlay } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import Video from "../../Atoms/Video/video"


export const VideoModal = ({
    video,
    setVideo
}: {
    video: string | undefined,
    setVideo: () => void
}) => {

    const [open, setOpen] = useState(false)



    useEffect(() => {
        if (video) {
            setOpen(true)
        } else {
            setOpen(false)
        }
    }, [video])



    return (
        <Modal isOpen={open} blockScrollOnMount={false} isCentered={true} autoFocus={false} onClose={() => {
            setOpen(false)
            setTimeout(() => {
                setVideo()
            }, 200)
        }}>
            <ModalOverlay/>
            <ModalContent width={'100%'} maxW='75rem' background={'transparent'}>
                {
                    video &&
                    <Video
                        src={video}
                        color="blue"
                    />
                }
            </ModalContent>
        </Modal>

    )
}