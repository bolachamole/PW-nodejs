import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaAdapter } from "@prisma/adapter-mariadb";
import type { CreateMajorDto, UpdateMajorDto } from "../types/major.js";
import validateEnv from "../utils/validateEnv.js";

const env = validateEnv();
// acessa o bd
const adapter = PrismaMariaDb(env.DATABSE_URL);
// instancia do prisma pra ajudar no acesso
const prisma = new PrismaClient({ adapter });

export async function getMajors(): Promise<Major[]> {
	return prisma.major.findMany();
}

export async function getMajor(id: string): Promise<Major | null> {
	return prisma.major.findFirst({ where: {id} });
}

export async function createMajor(data: CreateMajorDto): Promise<Major> {
	return prisma.major.create({ data });
}

export async function updateMajor(id: string, data: UpdateMajorDto): Promise<Major> {
	return prisma.major.update({ data: data, where: {id} });
}

export async function getMajor(id: string): Promise<Major | null> {
	return prisma.major.remove({ where: {id} });
}
