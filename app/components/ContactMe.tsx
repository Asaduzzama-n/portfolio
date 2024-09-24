import { ArrowUpRight } from "lucide-react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "./ui/animated-modal";
import MagicButton from "./ui/MagicButton";

const ContactMe = () => {
  return (
    <div className="py-5  flex items-center justify-center">
      <Modal>
        <ModalTrigger className=" text-white flex justify-center group/modal-btn">
          <MagicButton
            title="Contact Me Now"
            icon={<ArrowUpRight className="w-7 h-7 p-1 ml-2 text-purple" />}
          />
        </ModalTrigger>
        <ModalBody className="bg-black-100">
          <ModalContent>hello</ModalContent>
          <ModalFooter className="gap-4 bg-black-100">footer</ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ContactMe;
