import * as React from "react";
import { CSSTransition } from "react-transition-group";

import { useKey, useLockBodyScroll } from "../../hooks";
import "./style.css";

import {
	sidebarContainer,
	topBar,
	sidbarContent,
	sidebarfooter,
	backdropContainer,
} from "./Sidebar.css";
import { Text, Button } from "@/app/styles/components";

type SidebarProps = {
	isOpen: boolean;
	title: string;
	onClose: () => void;
	footer?: React.ReactNode;
	children: React.ReactNode;
};

export const Sidebar: React.FC<SidebarProps> = ({
	children,
	footer,
	isOpen,
	title,
	onClose,
}) => {
	useKey("escape", onClose);
	useLockBodyScroll(isOpen);
	const contentRef = React.useRef(null);
	const backdropRef = React.useRef(null);

	return (
		<>
			<CSSTransition
				in={isOpen}
				timeout={300}
				classNames="sidebar"
				unmountOnExit
				nodeRef={contentRef}
			>
				<div className={sidebarContainer} ref={contentRef}>
					<div className={topBar}>
						<Text>{title}</Text>
						<Button onClick={onClose}>Close</Button>
					</div>
					<div className={sidbarContent}>{children}</div>
					<div className={sidebarfooter}>{footer}</div>
				</div>
			</CSSTransition>

			<CSSTransition
				in={isOpen}
				timeout={300}
				classNames="backdrop"
				unmountOnExit
				nodeRef={backdropRef}
			>
				<div className={backdropContainer} onClick={onClose} />
			</CSSTransition>
		</>
	);
};
