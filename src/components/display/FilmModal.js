import {Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@nextui-org/react"


export default function FilmModal({film, disclosure})
{
	return (
		<Modal
			isOpen={disclosure.isOpen}
			onOpenChange={disclosure.onOpenChange}
			hideCloseButton={true}
			backdrop='blur'
			classNames={{
				// body: "bg-lgray-h",
				// backdrop: "",
				// base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
				// header: "bg-lgray-h",
				// footer: "bg-lgray-h",
				// closeButton: "hover:bg-white/5 active:bg-white/10",
			}}
		>
			<ModalContent>
				{(onClose) => (
					<>
						<ModalHeader>

						</ModalHeader>
						<ModalBody>

						</ModalBody>
						<ModalFooter>

						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	)
}
