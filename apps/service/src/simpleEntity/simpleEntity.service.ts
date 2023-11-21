import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SimpleEntityServiceBase } from "./base/simpleEntity.service.base";

@Injectable()
export class SimpleEntityService extends SimpleEntityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
