import { Box } from '@chakra-ui/react';
import React from 'react';

interface Props {
    skillName: string
    imageUrl: string,
}

function SkillBadge(props: Props): React.ReactElement {
	const { skillName, imageUrl } = props;
  return (
    <Box
      borderRadius={5}
      p='.2em'
      m="2em"
      h="100px"
      w="100px"
      bg="foreground-color">

      <img src={imageUrl} alt={skillName}></img>
      </Box>
  );
}

export default SkillBadge;
