import * as React from 'react'
import Box, { BoxProps } from './Box'
import { cn } from '@/utils/cn'

export interface StackProps
	extends React.HTMLAttributes<HTMLDivElement>,
		BoxProps {}

const Stack = React.forwardRef<HTMLDivElement, StackProps>(
	({ className, ...props }, ref) => {
		return (
			<Box
				className={cn('flex flex-col gap-4', className)}
				ref={ref}
				{...props}
			/>
		)
	},
)
Stack.displayName = 'Stack'

export default Stack
