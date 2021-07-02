import { createClient } from 'contentful';

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID, 
    accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN
  });


export async function getAbout(){
    const aboutContent = await client.getEntry({id:'6BrzPY5KVK2zM8oEuKBtnT'})
    return aboutContent.fields;
}