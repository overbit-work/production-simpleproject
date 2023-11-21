import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DifferentEntityServiceBase } from "./base/differentEntity.service.base";

@Injectable()
export class DifferentEntityService extends DifferentEntityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
