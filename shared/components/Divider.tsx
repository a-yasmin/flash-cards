import * as React from 'react'
import Box, { BoxProps } from './Box'
import { cn } from '@/utils/cn'


export interface DividerProps
	extends React.HTMLAttributes<HTMLDivElement>,
		BoxProps {}

const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
	({ className, ...props }, ref) => {
		return (
			<Box
				className={cn('w-full h-px bg-black', className)}
				ref={ref}
				{...props}
			/>
		)
	},
)
Divider.displayName = 'Divider'

export default Divider
