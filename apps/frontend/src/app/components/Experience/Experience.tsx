import { experiences } from "@/app/utils/constants";
import Image from "next/image";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

type Experience = (typeof experiences)[number] & { index: number };

const ExperienceCard = ({
	date,
	company_name,
	points,
	title,
	index,
}: Experience) => {
	return (
		<VerticalTimelineElement
			contentStyle={{
				background: "#1d1836",
				color: "#fff",
			}}
			contentArrowStyle={{ borderRight: "7px solid  #232631" }}
			date={date}
			iconStyle={{ background: "black" }}
			icon={
				<div className="flex justify-center items-center w-full h-full">
					{index + 1}
				</div>
			}
		>
			<div>
				<h3 className="text-white text-[24px] font-bold">{title}</h3>
				<p
					className="text-secondary text-[16px] font-semibold"
					style={{ margin: 0 }}
				>
					{company_name}
				</p>
			</div>

			<ul className="mt-5 list-disc ml-5 space-y-2">
				{points.map((point, index) => (
					<li
						key={`experience-point-${index}`}
						className="text-white-100 text-[14px] pl-1 tracking-wider"
					>
						{point}
					</li>
				))}
			</ul>
		</VerticalTimelineElement>
	);
};

export default function Experience() {
	return (
		<div className="flex flex-col px-4 md:py-20" id="experience">
			<p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider font-bold text-center">
				Work Experience
			</p>

			<div className="mt-20 flex flex-col">
				<VerticalTimeline>
					{experiences.map((experience, index) => (
						<ExperienceCard
							key={`experience-${index}`}
							{...experience}
							index={index}
						/>
					))}
				</VerticalTimeline>
			</div>
		</div>
	);
}
