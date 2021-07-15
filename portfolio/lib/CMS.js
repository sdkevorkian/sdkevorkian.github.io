import { createClient } from 'contentful';
import { contentIDs } from '../constants/contentIDs';

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID, 
    accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN
  });


export async function getAbout(){
    const aboutContent = await getById(contentIDs.ABOUT_ID)
    return aboutContent;
}

export async function getNav(){
  const nav = await getById(contentIDs.NAV_ID)
  return nav;
}

export async function getContact(){
  const contact = await getById(contentIDs.CONTACT_ID)
  return contact;
}

export async function getResume(){
  const resume = await getById(contentIDs.RESUME_ID)
  return resume;
}

export async function getSkills(){
    const skills = await getById(contentIDs.SKILLS_ID)
    return skills
}

export async function getWorks(){
  const works = await client.getEntries({
    content_type: "workItem",
    include: 3,
    order:'-fields.lastUpdated'
  })
  return works;
}

export async function getById(id){
    const item = await client.getEntry(id);
    return item.fields
}