import { Heading, HeadingProps } from "@chakra-ui/layout";
import { ReactNode } from "react";

interface DefaultHeaderProps extends HeadingProps {
  children: ReactNode

}


export function DefaultHeader({ children, ...rest }: DefaultHeaderProps) {
  return (
    <Heading
      fontWeight="medium"
      {...rest}
    >
      {children}
    </Heading>
  )
}