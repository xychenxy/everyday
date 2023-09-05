import React from "react";
import Spline from "@splinetool/react-spline";

export const Content: React.FC = () => {
	return (
		<section className="grow flex flex-row flex-wrap">
			<div className="text-lg w-[100%] pt-4">
				<p className="text-center font-bold">Hi, I am Mavis</p>
				<p className="text-center font-bold">
					Welcome to unknown 3D space
				</p>
			</div>

			<Spline scene="https://prod.spline.design/U1-r2cDXpbJoCmig/scene.splinecode" />
		</section>
	);
};
