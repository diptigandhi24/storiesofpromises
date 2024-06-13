//reading the json file and send it to the income request
//return a promise with json data
import { readFile } from "fs/promises";
import { NextResponse } from "next/server";

export async function GET(res) {
    const file = await readFile(process.cwd() + '/data/story.json', 'utf8');
   
    return NextResponse.json(file);
  }