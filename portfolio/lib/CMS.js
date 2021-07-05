import { createClient } from 'contentful';

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID, 
    accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN
  });


export async function getAbout(){
    const aboutContent = await client.getEntry('6BrzPY5KVK2zM8oEuKBtnT')
    return aboutContent.fields;
}

export async function getNav(){
  const nav = await client.getEntry('pqbWfmG9v6w0H96Xx8aOM')
  return nav;
}

export async function getWorks(){
  const works = await client.getEntries({
    content_type: "workItem",
    include: 3,
    order:'-fields.lastUpdated'
  })
  return works;
}