import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box width="1fr" borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;
