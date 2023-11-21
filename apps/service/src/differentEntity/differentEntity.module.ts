import { Module } from "@nestjs/common";
import { DifferentEntityModuleBase } from "./base/differentEntity.module.base";
import { DifferentEntityService } from "./differentEntity.service";
import { DifferentEntityResolver } from "./differentEntity.resolver";

@Module({
  imports: [DifferentEntityModuleBase],
  providers: [DifferentEntityService, DifferentEntityResolver],
  exports: [DifferentEntityService],
})
export class DifferentEntityModule {}
