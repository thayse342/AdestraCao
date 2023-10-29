import React from "react";
import { StyleModal } from "./modal.style";
import Button from "../Button/Button";

const Modal = ({
  isOpen,
  children,
  setCloseModal,
  botaosalvar,
  titulo,
  mensagemconfirmacao,
  isModalOnLogin,
}) => {
  const closeModalAndExecuteAction = async () => {
    if (isModalOnLogin) {
      const success = await botaosalvar(); 
      if (success) {
        setCloseModal(); 
      }
    } else {
      setCloseModal();
    }
  };

  if (isOpen) {
    return (
      <StyleModal>
        <div className="modal">
          <div className="header">
            <p>{titulo}</p>
          </div>
          <div className="content">{children}</div>

          <div className="footer">
            <div className="esquerda">
              <p>{mensagemconfirmacao}</p>
            </div>

            <div className="direita">
              <Button
                texto={isModalOnLogin ? "Enviar" : "Salvar"}
                variant={"primary"}
                width={"65px"}
                height={"35px"}
                onClick={closeModalAndExecuteAction}
                fontSize={"12px"}
              />
              <Button
                texto={"Cancelar"}
                variant={"secondary"}
                width={"65px"}
                height={"35px"}
                onClick={setCloseModal}
                fontSize={"12px"}
              />
            </div>
          </div>
        </div>
      </StyleModal>
    );
  }
  return null;
};

export default Modal;
