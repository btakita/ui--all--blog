import { type VoidProps } from 'solid-js'
export function FormattedDate($p:VoidProps<{
	date:Date
}>) {
	const date = $p.date
	return (
		<time datetime={date.toISOString()}>
			{
				date.toLocaleDateString('en-us', {
					year: 'numeric',
					month: 'short',
					day: 'numeric',
				})
			}
		</time>
	)
}