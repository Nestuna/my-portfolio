import React from 'react';
import SkillBadge from '../components/skill-badge/SkillBadge';

import api from '../api/content.json'

const { skills } = api
const imgBaseUrl = '../assets/images'
const skillImagesUrls: Record<string, string> = {};

for (const skill of skills) {
  import url from imgBaseUrl + skill + 'png'
  skillImagesUrls[skill] = url
}

function Skills(): React.ReactElement {
  const skillsImages = [
    { name: 'react', url: reactImage },
    { name: 'angular', url: angular }
  ]


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
