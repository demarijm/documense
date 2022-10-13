// const router = require("express").Router();
import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
let pingCount: number = 0;
const prisma = new PrismaClient();

export async function api() {
    await prisma.$connect()
  
    await prisma.user.create({
      data: {
        name: 'Rich',
        email: 'hello@prisma.com',
        posts: {
          create: {
            title: 'My first post',
            body: 'Lots of really interesting stuff',
            slug: 'my-first-post',
          },
        },
      },
    })
  
    const allUsers = await prisma.user.findMany({
      include: {
        posts: true,
      },
    })
    console.dir(allUsers, { depth: null })
  }