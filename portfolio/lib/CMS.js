import { createClient } from 'contentful';
import { contentIDs } from '../constants/contentIDs';

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID, 
    accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN
  });


export async function getAbout(){
    const aboutContent = await client.getEntries({
      'sys.id[in]': contentIDs.NAV_ID +','+contentIDs.ABOUT_ID
    })
    return {
      about: aboutContent.items.find(item=>item.sys.id===contentIDs.ABOUT_ID),
      nav: aboutContent.items.find(item=>item.sys.id===contentIDs.NAV_ID)
    };
}

export async function getNav(){
  const nav = await getById(contentIDs.NAV_ID)
  return nav;
}

export async function getContact(){
  const content = await client.getEntries({
    'sys.id[in]': contentIDs.NAV_ID +','+contentIDs.CONTACT_ID + ',' +contentIDs.RESUME_ID
  })
  return {
    contact: content.items.find(item=>item.sys.id===contentIDs.CONTACT_ID),
    resume: content.items.find(item=>item.sys.id===contentIDs.RESUME_ID),
    nav: content.items.find(item=>item.sys.id===contentIDs.NAV_ID)
  };
}

export async function getSkills(){
  const content = await client.getEntries({
    'sys.id[in]': contentIDs.NAV_ID +','+contentIDs.SKILLS_ID
  })
  return {
    skills: content.items.find(item=>item.sys.id===contentIDs.SKILLS_ID),
    nav: content.items.find(item=>item.sys.id===contentIDs.NAV_ID)
  };
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