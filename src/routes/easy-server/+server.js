import { json } from '@sveltejs/kit';
 
/** @type {import('./$types').RequestHandler} */
export function GET(event) {
  // log all headers
  // console.log(...event.request.headers);
  console.log(event)
 
  return json({
    // retrieve a specific header
    message: 'easy server'
  });
}