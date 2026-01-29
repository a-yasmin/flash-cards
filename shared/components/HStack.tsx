import * as React from 'react'
import Box, { BoxProps } from './Box'
import { cn } from '@/utils/cn'

export interface StackProps
	extends React.HTMLAttributes<HTMLDivElement>,
		BoxProps {}

const HStack = React.forwardRef<HTMLDivElement, StackProps>(
	({ className, ...props }, ref) => {
		return (
			<Box
				className={cn('flex flex-row gap-4 items-center', className)}
				ref={ref}
				{...props}
			/>
		)
	},
)
HStack.displayName = 'HStack'

export default HStack
