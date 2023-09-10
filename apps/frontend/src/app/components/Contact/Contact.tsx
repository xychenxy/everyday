import EarthCanvas from "../canvas/Earth";

export default function Contact() {
	return (
		<div
			className="h-screen flex md:flex-row flex-col md:px-28 gap-8 md:pt-20"
			id="contact"
		>
			{/* get in touch */}
			<div className="md:w-2/5 flex flex-col gap-4 rounded-2xl p-8">
				<p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
					Get in touch
				</p>

				<form className="mt-12 flex flex-col gap-8">
					<input
						type="text"
						name="name"
						placeholder="Name"
						className="bg-transparent py-4 px-6 placeholder:text-secondary text-white rounded-lg font-medium border"
					/>

					<input
						type="email"
						name="email"
						placeholder="Email"
						className="bg-transparent py-4 px-6 placeholder:text-secondary text-white rounded-lg font-medium border"
					/>

					<textarea
						rows={4}
						name="message"
						placeholder="What you want to say?"
						className="bg-transparent py-4 px-6 placeholder:text-secondary text-white rounded-lg font-medium border"
					/>

					<button
						// type="submit"
						className="bg-transparent py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary border"
					>
						Send
					</button>
				</form>
			</div>

			{/* earth */}
			<div className="md:w-3/5">
				<EarthCanvas />
			</div>
		</div>
	);
}
