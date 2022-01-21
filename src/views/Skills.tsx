import { HStack } from '@chakra-ui/react';
import React from 'react';
import SkillBadge from '../components/skill-badge/SkillBadge';

import reactImage from "../assets/images/react.png";
import angularImage from "../assets/images/angular.png"

function Skills(): React.ReactElement {
  const skillsImages = {
      'react': reactImage,
      'angular': angularImage
  }

  const showBadges = () => {
      const badges: any[] = []
      for(const [skill, url] of Object.entries(skillsImages)) {
          badges.push(<SkillBadge skillName={skill} imageUrl={url} />)
      }
      return badges;
  }

  return (
    <HStack>
          { showBadges() }
    </HStack>
  )
}

export default Skills;
