interface IconProps {
	IconSvg: any;
	size: string;
}

export function Icon({ IconSvg, size }: IconProps) {
	return (
		<>
			{
				<IconSvg
					style={{
						width: size,
						height: size,
					}}
				/>
			}
		</>
	);
}
