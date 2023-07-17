import * as React from "react";
import { CSSTransition } from "react-transition-group";
import { Portal } from "@/app/components/Portal";
import { useKey, useLockBodyScroll } from "@/app/hooks";
import { backdropContainer, modalContainer } from "./Modal.css";
import { Box, Button } from "@/app/styles/components";
import "./Modal.css";

type ModalProps = {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
};

export const Modal: React.FC<ModalProps> = ({ children, isOpen, onClose }) => {
	useKey("escape", onClose);
	useLockBodyScroll(isOpen);
	const contentRef = React.useRef(null);
	const backdropRef = React.useRef(null);

	return (
		<Portal selector="#modal">
			<CSSTransition
				in={isOpen}
				timeout={300}
				classNames={"modal"}
				unmountOnExit
				nodeRef={contentRef}
			>
				<div
					className={modalContainer}
					data-testid="modal"
					ref={contentRef}
				>
					<Box
						display={"flex"}
						justifyContent={"flex-end"}
						padding={"snug"}
					>
						<Button onClick={onClose} aria-label="close modal">
							Close
						</Button>
					</Box>
					{children}
				</div>
			</CSSTransition>
			<CSSTransition
				in={isOpen}
				timeout={300}
				classNames="backdrop"
				unmountOnExit
				nodeRef={backdropRef}
			>
				<div
					className={backdropContainer}
					data-testid="modal-backdrop"
					ref={backdropRef}
					onClick={onClose}
				/>
			</CSSTransition>
		</Portal>
	);
};
