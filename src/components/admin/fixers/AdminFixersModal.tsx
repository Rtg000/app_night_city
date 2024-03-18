'use client'
import React, { FC } from "react"
import { Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Input } from "@nextui-org/react";

export const AdminFixersModal = () => {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return(
        <>
            <Button onPress={onOpen}>Añadir</Button>
            <Modal 
                isOpen={isOpen} 
                onOpenChange={onOpenChange}
                placement="top-center"
            >
                <ModalContent>
                {(onClose) => (
                    <>
                    <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
                    <ModalBody>
                        <Input
                        autoFocus
                        label="Email"
                        placeholder="Enter your email"
                        variant="bordered"
                        />
                        <Input
                        label="Password"
                        placeholder="Enter your password"
                        type="password"
                        variant="bordered"
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" variant="flat" onPress={onClose}>
                        Close
                        </Button>
                        <Button color="primary" onPress={onClose}>
                        Sign in
                        </Button>
                    </ModalFooter>
                    </>
                )}
                </ModalContent>
            </Modal>                     
        </>
    );
}