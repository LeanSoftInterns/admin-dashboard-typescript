import { AdminJSOptions } from 'adminjs';
import { Database, Resource, getModelByName } from '@adminjs/prisma';
import { PrismaClient } from '@prisma/client';
import {componentLoader,Components} from './component-loader.js';
const prisma = new PrismaClient();
const options: AdminJSOptions = {
  componentLoader,
  rootPath: '/admin',
  resources: [
    {resource: { model: getModelByName('User'), client: prisma },options: {
      properties: {
        name: {
          type: 'string',
          components: {
            edit: Components.MyInput, // this is our custom component
          },
        },
      },
    },},
    {resource: { model: getModelByName('Role'), client: prisma },}
  ],
  databases: [],
};

export default options;
