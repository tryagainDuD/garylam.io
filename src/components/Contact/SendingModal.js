import React from 'react'
import { Modal, ModalBody } from 'react-bootstrap'
import {
    SendingModalContent,
    SentModalContent,
    SendingText,
    SentText,
    FirstDot,
    SecondDot,
    ThirdDot,
    Tick
} from './ContactElements'

const SendingModal = ({ show, sent }) => {

    return (
        <Modal
            show={ show }
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >   
            <ModalBody id="modal-body">
                <SendingModalContent sent={ sent }>
                    <SendingText>Sending</SendingText>
                    <FirstDot>.</FirstDot>
                    <SecondDot>.</SecondDot>
                    <ThirdDot>.</ThirdDot>
                </SendingModalContent>
                <SentModalContent sent={ sent }>
                    <SentText>Sent</SentText>
                    <Tick sent={ sent } />
                </SentModalContent>
            </ModalBody>
        </Modal>
    )
}

export default SendingModal
