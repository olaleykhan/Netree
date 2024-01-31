import UserModel from './users.schema.js';
import { type IUser } from '@/bl/user/types';
import { type Document } from 'mongoose';

export async function getAllUsers (): Promise<Document[]> {
  return await UserModel.find({});
}

export async function getUser (id: string): Promise<Document | null> {
  return await UserModel.findById(id);
}

export async function createUser (user: IUser): Promise<Document> {

  console.log(user, "user data")
  const res = await UserModel.create(user);
  console.log(res, "the res")

  return res;
}
